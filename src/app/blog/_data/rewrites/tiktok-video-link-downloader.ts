import type { BlogRewrite } from "./types";

const r: BlogRewrite = {
  updated: "2026-11-03",
  append: [
    {
      heading: "Which TikTok link formats work?",
      body: `TikTok hands out links in a few shapes, and the downloader reads all of the common ones:\n\n- **Short share links** such as \`vm.tiktok.com/…\` or \`vt.tiktok.com/…\`, which is what the app's **Share → Copy link** gives you.\n- **Full video addresses** such as \`tiktok.com/@name/video/123…\`, which is what you see in a desktop browser's address bar.\n- **Links with tracking bits** on the end (\`?is_from_webapp=1&sender_device=pc\`). You don't need to trim them; the tool ignores what it doesn't need.\n\nWhat won't work: a link to a **profile** (\`tiktok.com/@name\` with no video number), a **search** or hashtag page, a **live** stream, or a link from a private account. If you're unsure, open the link in a browser first; if it plays a single video, it will download.`,
    },
    {
      heading: "Saving the file on iPhone, Android and a computer",
      body: `Where the MP4 lands depends on your device:\n\n- **iPhone (Safari):** after tapping Download, open the downloads arrow in the address bar, tap the file, then the Share button and **Save Video** to put it in Photos. Otherwise it stays in the Files app under Downloads.\n- **Android (Chrome):** the video goes to the **Downloads** folder and usually appears in Google Photos or your gallery within a minute.\n- **Windows and Mac:** the file goes to your Downloads folder, named after the video. Rename it to something you'll recognise later, such as the date and topic.\n\nThe MP3 option saves to the same places, and plays in any music or voice-memo app.`,
    },
  ],
};

export default r;
