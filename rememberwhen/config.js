// ---------------------------------------------------------------------------
// Remember When — invite/redirect link configuration.
// This is the ONLY file you normally need to edit. Update the URLs below,
// re-upload it, and every landing page picks up the change.
// ---------------------------------------------------------------------------
window.RW_CONFIG = {
  // Live iOS App Store listing.
  iosUrl:
    "https://apps.apple.com/us/app/remember-when-nostalgia-quiz/id6785160732",

  // Google Play listing. LEAVE EMPTY until the Android app is public — while
  // empty, Android visitors are sent to `fallbackUrl` instead. When Play goes
  // live, paste the listing URL here (e.g.
  // "https://play.google.com/store/apps/details?id=com.example.rememberwhen").
  androidUrl: "",

  // Where to send Android (until Play is live) and desktop visitors.
  fallbackUrl: "https://sobersend.com/rememberwhen",

  // Custom URL scheme the installed app registers — do not change unless the
  // app's scheme changes.
  scheme: "rememberwhen",

  appName: "Remember When",
};
