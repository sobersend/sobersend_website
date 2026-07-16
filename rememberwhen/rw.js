// ---------------------------------------------------------------------------
// Shared logic for the Remember When landing pages. You should not need to edit
// this file — put your store URLs in config.js.
// ---------------------------------------------------------------------------
(function (global) {
  var cfg = global.RW_CONFIG || {};

  function platform() {
    var ua = navigator.userAgent || navigator.vendor || "";
    if (/android/i.test(ua)) return "android";
    // iPadOS 13+ reports as Mac; disambiguate via touch support.
    if (/iPad|iPhone|iPod/.test(ua)) return "ios";
    if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return "ios";
    return "other";
  }

  function storeUrl() {
    var p = platform();
    if (p === "ios" && cfg.iosUrl) return cfg.iosUrl;
    if (p === "android" && cfg.androidUrl) return cfg.androidUrl;
    return cfg.fallbackUrl;
  }

  function gotoStore() {
    global.location.replace(storeUrl());
  }

  // Try to open the installed app via its custom scheme; if nothing takes over
  // the page within the timeout (app not installed), fall back to the store.
  function openApp(path, timeoutMs) {
    var opened = false;
    function onHide() {
      opened = true;
    }
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) onHide();
    });
    global.addEventListener("pagehide", onHide);
    global.addEventListener("blur", onHide);

    global.location.href = cfg.scheme + "://" + path;

    setTimeout(function () {
      if (!opened) gotoStore();
    }, timeoutMs || 1400);
  }

  global.RW = {
    platform: platform,
    storeUrl: storeUrl,
    gotoStore: gotoStore,
    openApp: openApp,
    config: cfg,
    // Reads a query-string value (e.g. the invite/group token in `t`).
    query: function (name) {
      return new URLSearchParams(global.location.search).get(name) || "";
    },
  };
})(window);
