import{_ as e,c as o,o as t,a3 as r}from"./chunks/framework.B4p9iGtR.js";const g=JSON.parse('{"title":"Frequently Asked Questions ❓","description":"","frontmatter":{"title":"Frequently Asked Questions ❓"},"headers":[],"relativePath":"faq.md","filePath":"faq.md"}'),n={name:"faq.md"},a=r('<p>Welcome to the Zen Browser FAQ section! Here, you&#39;ll find answers to common questions and helpful tips to enhance your experience with Zen Browser. If your question isn&#39;t covered here, feel free to explore our community forums <a href="https://www.reddit.com/r/zen_browser" target="_blank" rel="noreferrer">r/zen_browser</a> or reach out to the support team.</p><h2 id="why-can-t-zen-browser-play-drm-protected-content" tabindex="-1">Why can&#39;t Zen Browser play DRM-protected content? <a class="header-anchor" href="#why-can-t-zen-browser-play-drm-protected-content" aria-label="Permalink to &quot;Why can&#39;t Zen Browser play DRM-protected content?&quot;">​</a></h2><div class="important custom-block github-alert"><p class="custom-block-title">This only affects Microsoft Windows</p><p></p></div><blockquote><p>[!question]- What is DRM? <a href="https://wikipedia.org/wiki/Digital_rights_management" target="_blank" rel="noreferrer">Digital Rights Management</a> (DRM) is a technology used to control how digital content, such as videos and music, can be accessed and used. DRM is commonly used by streaming services to protect copyrighted content. When you try to play DRM-protected content, the website verifies if the necessary DRM software is available on your browser. Most browsers use <a href="./www.widevine.com"><strong>Widevine</strong></a>, a DRM technology developed by Google, to facilitate this.</p></blockquote><p>Zen Browser currently lacks DRM-support, because it does not have a Widevine license. Acquiring such a license requires the payment of large fees (at least $5,000). Acquiring this license is financially unresponsible for the developer of Zen. This means that DRM-protected media cannot be played in Zen Browser for the foreseeable future. If support grows and the developer receives sufficient funding, a Widevine license may be considered.</p><p>Feel free to support the funding of a Widevine license for Zen on <a href="https://ko-fi.com/zen_browser" target="_blank" rel="noreferrer">Ko-Fi</a> or <a href="https://www.patreon.com/zen_browser" target="_blank" rel="noreferrer">Patreon</a>!</p><blockquote><p>[!question]- Which Services Are Affected? Due to the lack of DRM support, you will not be able to stream content from the following services in Zen Browser:</p><ul><li><strong>HBO Max</strong></li><li><strong>Netflix</strong></li><li><strong>Spotify</strong></li><li><strong>Disney+</strong></li><li><strong>Amazon Prime Video</strong></li><li><strong>Apple Music</strong></li><li><strong>Google Play Movies &amp; TV</strong></li></ul></blockquote><div class="info custom-block github-alert"><p class="custom-block-title">Alternative solutions</p><p></p><ul><li>Use a browser that has a Widevine license, such as <a href="./www.mozilla.org/firefox/"><strong>Mozilla Firefox</strong></a>, when streaming DRM-protected content.</li><li>Use the native desktop app for the service you want to use</li></ul></div><h2 id="how-do-i-know-zen-is-safe" tabindex="-1">How do I know Zen is safe? <a class="header-anchor" href="#how-do-i-know-zen-is-safe" aria-label="Permalink to &quot;How do I know Zen is safe?&quot;">​</a></h2><p>Zen Browser is designed with a focus on security and privacy. Additionally, the browser&#39;s codebase is derived from Firefox, a well-known and trusted open-source project. Users can verify the safety of the browser by reviewing the source code available on <a href="https://github.com/zen-browser/desktop" target="_blank" rel="noreferrer">GitHub</a> . Regular updates and community engagement also contribute to its security.</p><h2 id="how-can-i-support-zen" tabindex="-1">How can I support Zen? <a class="header-anchor" href="#how-can-i-support-zen" aria-label="Permalink to &quot;How can I support Zen?&quot;">​</a></h2><p>If you&#39;d like to support the development of Zen Browser, you can do so through their official donation platforms. Contributions help the small team continue improving the browser and adding new features. You can support Zen Browser in the following ways:</p><ul><li><strong>Patreon</strong>: Visit <a href="https://www.patreon.com/zen_browser" target="_blank" rel="noreferrer">https://www.patreon.com/zen_browser</a> to make recurring donations and gain access to updates and possible rewards.</li><li><strong>Ko-fi</strong>: You can also support Zen Browser with one-time donations via <a href="https://ko-fi.com/zen_browser" target="_blank" rel="noreferrer">https://ko-fi.com/zen_browser</a>.</li></ul><p>Your support helps the team maintain and enhance Zen Browser for everyone!</p><h2 id="zen-browser-is-damaged-and-can-t-be-opened-on-macos" tabindex="-1">&quot;Zen Browser is damaged and can&#39;t be opened&quot; on macOS <a class="header-anchor" href="#zen-browser-is-damaged-and-can-t-be-opened-on-macos" aria-label="Permalink to &quot;&quot;Zen Browser is damaged and can&#39;t be opened&quot; on macOS&quot;">​</a></h2><p>If you encounter the message &quot;Zen Browser is damaged and can&#39;t be opened&quot; on macOS, it is because Zen Browser is not signed with an official Apple Developer License. This triggers the Gatekeeper security feature, which prevents unsigned or unverified apps from running.</p><p>If you encounter this error please follow our [[install-macos | Installing Zen Browser on MacOS]] guide</p><h2 id="how-to-switch-tabs-by-scrolling" tabindex="-1">How to switch tabs by scrolling? <a class="header-anchor" href="#how-to-switch-tabs-by-scrolling" aria-label="Permalink to &quot;How to switch tabs by scrolling?&quot;">​</a></h2><p>You can to enable this feature by changing a setting in the browser&#39;s configuration. Here&#39;s how:</p><ol><li>Open the <code>about:config</code> page. This page contains advanced settings for the browser.</li><li>Search for <code>toolkit.tabbox.switchByScrolling</code></li><li>Toggle the setting to <code>true</code> by double-clicking on it</li></ol><p>Once this setting is enabled, you can hover your mouse over the tab bar and use your mouse wheel to scroll through the tabs, making it easier to navigate between them.</p><h2 id="where-do-i-recommend-features" tabindex="-1">Where do I recommend features? <a class="header-anchor" href="#where-do-i-recommend-features" aria-label="Permalink to &quot;Where do I recommend features?&quot;">​</a></h2><p>If you want to recommend features or report an issue, you can do so on the browser&#39;s GitHub page. Before submitting your request, it&#39;s mandatory to check if the issue or feature has already been reported. You can do this by searching through existing issues on the <a href="https://github.com/zen-browser/desktop/issues" target="_blank" rel="noreferrer">GitHub issues page</a>.</p><p>Keep in mind that the Zen Browser team is currently very small, so it might take some time for your request to be reviewed and addressed. The team is dedicated to improving the browser, but with limited resources, they prioritize the most critical and popular requests. Your patience and thoroughness in reporting can help make Zen Browser better for everyone.</p><h2 id="how-can-i-sync-my-data-across-multiple-devices" tabindex="-1">How can I sync my data across multiple devices? <a class="header-anchor" href="#how-can-i-sync-my-data-across-multiple-devices" aria-label="Permalink to &quot;How can I sync my data across multiple devices?&quot;">​</a></h2><p>Zen Browser integrates with Firefox Sync, allowing you to sync your addons, bookmarks, history, passwords, and other browser data across multiple devices. To enable Firefox Sync in Zen Browser:</p><ol><li><strong>Open the Zen Browser Settings</strong></li><li><strong>Navigate to the &quot;Sync&quot; tab</strong></li><li><strong>Sign in with your Mozilla Account.</strong> (If you don&#39;t have an account, you&#39;ll need to create one)</li><li><strong>Select what data you wish to sync</strong></li></ol><p>After signing in and selecting your preferences, your data will be synced across all devices where you are signed in with the same Mozilla account.</p>',28),s=[a];function i(l,c,d,h,u,p){return t(),o("div",null,s)}const f=e(n,[["render",i]]);export{g as __pageData,f as default};
