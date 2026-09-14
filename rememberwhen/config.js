// ---------------------------------------------------------------------------
// Remember When — invite/redirect link configuration.
// This is the ONLY file you normally need to edit. Update the URLs below,
// re-upload it, and every landing page picks up the change.
// ---------------------------------------------------------------------------
window.RW_CONFIG = {
  // Live iOS App Store listing.
  iosUrl:
    "https://apps.apple.com/us/app/remember-when-nostalgia-quiz/id6785160732",

  // Google Play listing (US production).
  androidUrl:
    "https://play.google.com/store/apps/details?id=com.rememberwhen.app",

  // Where to send Android (until Play is live) and desktop visitors.
  fallbackUrl: "https://sobersend.com/rememberwhen",

  // Custom URL scheme the installed app registers — do not change unless the
  // app's scheme changes.
  scheme: "rememberwhen",

  appName: "Remember When",

  // Apple Campaign Links provider token (pt). Same for every campaign; only
  // ct= changes. Fill after generating one campaign in App Store Connect →
  // Analytics → Acquisition → Campaigns. Clicks still log without this.
  iosProviderToken: "",

  // Public anon key — same role as the mobile app. Used only to call
  // log_outreach_click() from the get page. RLS: insert via RPC, no SELECT.
  supabaseUrl: "https://rbzsrrhcghugjyzqvnvj.supabase.co",
  supabaseAnonKey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJienNycmhjZ2h1Z2p5enF2bnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0NzcyMDMsImV4cCI6MjA5NzA1MzIwM30.xjQX6JkYUBGAKSywZ_fFAEI3N_Ccc8bh8uozqY_rPIg",
};
