import type { BlogRewrite } from "./types";

const r: BlogRewrite = {
  updated: "2026-11-03",
  append: [
    {
      heading: "Warning signs in an app's permissions",
      body: `Before you install any video downloader from an app store, open its listing and scroll to the data and permissions section. A tool that saves videos needs very little: access to store files, and the internet. Be wary of a downloader that asks for:\n\n- your **contacts**, **location** or **microphone**;\n- permission to **draw over other apps** or to act as an **accessibility service**, which can read what's on your screen;\n- a **VPN** profile, or to install another app;\n- your TikTok **login**. A downloader never needs your password, because public videos can be fetched by link.\n\nAlso read a handful of the **newest one-star reviews**. They reveal things the description leaves out, such as a sudden paywall, ads that open the app store by themselves, or downloads that stopped working after an update.`,
    },
    {
      heading: "If you've already installed a dodgy downloader",
      body: `Uninstall it, then check your phone's settings for anything it left behind: device admin rights, an accessibility service, a VPN or a browser notification permission it requested. If you entered your TikTok password into it, change the password and sign out of other devices in TikTok's security settings. From then on, a browser-based downloader does the same job with nothing to install.`,
    },
  ],
};

export default r;
