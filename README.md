## The Stream Detector PLUS

### What is this?

This is a ***Firefox*** addon written in JavaScript which provides an easy way to keep track of URLs to playlists and subtitles used by Apple HLS, Adobe HDS, MPEG-DASH, and Microsoft Smooth Streaming streams as well as download video/audio files directly and monitor any other file extensions and Content-Type headers.

Also assembles readymade yt-dlp/FFmpeg/Streamlink/hlsdl/N_m3u8DL-RE/mpv commands which (should) include all of the necessary cookies and headers.

![A screenshot of the options menu.](https://addons.mozilla.org/user-media/previews/full/274/274526.png)

More details and screenshots available [in the AMO listing](https://addons.mozilla.org/en-US/firefox/addon/hls-stream-detector/) or the [Web Store listing](https://chrome.google.com/webstore/detail/the-stream-detector/iakkmkmhhckcmoiibcfjnooibphlobak) of the Chrome port.

### Where can I download this?

- [The Firefox Addons (AMO) listing.](https://addons.mozilla.org/en-US/firefox/addon/the-stream-detector-plus/)
- [The Chrome Web Store listing.](https://chrome.google.com/webstore/detail/jlckmaonnkacoebmnlehgkpjgomfileb)
- [The GitHub releases page.](https://github.com/dw5/stream-detector/releases)


### What is this written in?

- Javascript,
- WebExtensions API, including:
  - Clipboard,
  - Downloads,
  - Notifications,
  - Storage,
  - Tabs.

### What's the point?

Being able to easily find direct URLs to streams on the Internet. I wrote this initially for my own use - I was fed up with hunting for URLs in the Network Monitor and manually adding all the necessary headers and cookies.

### How do I use this?

Upon being notified that a stream has been detected (as in the screenshot above), click the toolbar button, and then click on the appropriate filename to copy the URL in its desired form. Use the addon's options page to customize your experience and e.g. download media files directly.

---

### Additional notes

- The Chrome version of this addon is not maintained or supported in any way. It's only published as-is on the off chance that it works. Don't expect it to.
- Websites such as YouTube, Vimeo, Facebook, etc. are very likely to use proprietary technologies which are not supported by this addon.
- This should go without saying, but I am not responsible for and do not condone this addon being used for any nefarious purposes. Copyrighted content is probably DRM-ed anyway.

### Development
- Node.JS + NPM
- Install dependencies `npm install`

### Building for release
- Development + `npm run build`
- You'll see folder named `dist` for firefox, `dist-chrome` for that toxic web browser
- Create zip for those folder and publish to extension places!
- For DIY .xpi `web-ext sign`  [For Firefox](https://github.com/mozilla/web-ext) `npm install --global web-ext` [More info](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/#Signing_your_extension_for_distribution)
- For DIY .crx `npm install -g crx3` ??