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

  function campaign() {
    var raw = (query("c") || "").toLowerCase().trim();
    if (!/^[a-z0-9-]{1,40}$/.test(raw)) return "";
    return raw;
  }

  function withCampaign(url, p) {
    var c = campaign();
    if (!c || !url) return url;
    try {
      var u = new URL(url, global.location.href);
      if (p === "ios") {
        if (cfg.iosProviderToken) u.searchParams.set("pt", cfg.iosProviderToken);
        u.searchParams.set("ct", c);
        u.searchParams.set("mt", "8");
      } else if (p === "android") {
        u.searchParams.set(
          "referrer",
          "utm_source=center-email&utm_medium=email&utm_campaign=" + c
        );
      } else {
        u.searchParams.set("c", c);
      }
      return u.toString();
    } catch (e) {
      return url;
    }
  }

  function storeUrl() {
    var p = platform();
    if (p === "ios" && cfg.iosUrl) return withCampaign(cfg.iosUrl, "ios");
    if (p === "android" && cfg.androidUrl) {
      return withCampaign(cfg.androidUrl, "android");
    }
    return withCampaign(cfg.fallbackUrl, "other");
  }

  function logClick() {
    var c = campaign();
    if (!c || !cfg.supabaseUrl || !cfg.supabaseAnonKey) {
      return Promise.resolve();
    }
    var endpoint =
      String(cfg.supabaseUrl).replace(/\/$/, "") + "/rest/v1/rpc/log_outreach_click";
    return fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: cfg.supabaseAnonKey,
        Authorization: "Bearer " + cfg.supabaseAnonKey,
      },
      body: JSON.stringify({ p_campaign: c, p_platform: platform() }),
      keepalive: true,
    }).catch(function () {});
  }

  function gotoStore() {
    global.location.replace(storeUrl());
  }

  // Log ?c= then hop. Timeout so a hung request cannot trap the visitor.
  function gotoStoreAfterLog() {
    var done = false;
    function go() {
      if (done) return;
      done = true;
      gotoStore();
    }
    setTimeout(go, 900);
    logClick().then(go);
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

  function query(name) {
    return new URLSearchParams(global.location.search).get(name) || "";
  }

  global.RW = {
    platform: platform,
    storeUrl: storeUrl,
    gotoStore: gotoStore,
    gotoStoreAfterLog: gotoStoreAfterLog,
    campaign: campaign,
    openApp: openApp,
    config: cfg,
    // Reads a query-string value (e.g. the invite/group token in `t`).
    query: query,
  };
})(window);
