import{_ as e,c as t,o as a,a3 as s}from"./chunks/framework.B4p9iGtR.js";const b=JSON.parse('{"title":"Installing Zen Browser on MacOS","description":"","frontmatter":{"title":"Installing Zen Browser on MacOS"},"headers":[],"relativePath":"guides/install-macos.md","filePath":"guides/install-macos.md"}'),n={name:"guides/install-macos.md"},i=s('<p>This [[guides/index|guide]] provides step-by-step instructions for installing Zen Browser on macOS, including how to bypass macOS Gatekeeper due to the lack of an official Developer License. It also explains how users can support the Zen Browser team by donating towards obtaining a Developer License.</p><blockquote><p>[!question]- Why Bypassing Gatekeeper is Necessary Zen Browser currently requires users to bypass macOS Gatekeeper because the app does not have a Developer License from Apple. This license, which costs 100 euros annually, is necessary for official app signing and distribution. Unfortunately, due to limited resources, it is not within the Zen Browser team&#39;s ability to purchase this license at the moment. If you&#39;d like to help Zen Browser obtain a Developer License and improve the installation experience, you can make a donation. Contributions will directly support the team in reaching this goal.</p><ul><li><strong>Patreon</strong>: <a href="https://www.patreon.com/zen_browser" target="_blank" rel="noreferrer">https://www.patreon.com/zen_browser</a></li><li><strong>Ko-fi</strong>: <a href="https://ko-fi.com/zen_browser" target="_blank" rel="noreferrer">https://ko-fi.com/zen_browser</a></li></ul></blockquote><h2 id="step-1-download-the-latest-version" tabindex="-1">Step 1: Download the Latest Version <a class="header-anchor" href="#step-1-download-the-latest-version" aria-label="Permalink to &quot;Step 1: Download the Latest Version&quot;">​</a></h2><ul><li>Download the latest Zen Browser DMG.</li><li>Once downloaded, open the DMG file. You might need to zoom out a bit to see everything.</li></ul><p>![[open-dmg.png]]</p><h2 id="step-2-install-zen-browser" tabindex="-1">Step 2: Install Zen Browser <a class="header-anchor" href="#step-2-install-zen-browser" aria-label="Permalink to &quot;Step 2: Install Zen Browser&quot;">​</a></h2><ul><li>Drag the Zen Browser icon to the Applications folder.</li></ul><h2 id="step-3-bypass-gatekeeper" tabindex="-1">Step 3: Bypass Gatekeeper <a class="header-anchor" href="#step-3-bypass-gatekeeper" aria-label="Permalink to &quot;Step 3: Bypass Gatekeeper&quot;">​</a></h2><p>Upon trying to open Zen Browser, you may encounter a message indicating the file is damaged. This happens because the app does not have a valid developer signature and is using an Ad-hoc sign.</p><p>![[gatekeeper.png]]</p><h3 id="to-bypass-this-warning" tabindex="-1">To bypass this warning: <a class="header-anchor" href="#to-bypass-this-warning" aria-label="Permalink to &quot;To bypass this warning:&quot;">​</a></h3><ol><li><p><em>Open Terminal.</em></p></li><li><p>Run one of the following commands:</p><ul><li>To bypass Gatekeeper for the current installed version:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xattr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/Applications/Zen Browser.app/&#39;</span></span></code></pre></div></li><li>To bypass Gatekeeper for all versions of the app:<div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">xattr</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.apple.quarantine</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;/Applications/Zen Browser.app/&#39;</span></span></code></pre></div></li></ul></li><li><p>After running the command, if successful, Terminal will return a blank line. ![[blank space.png]]</p></li></ol><h2 id="step-4-open-zen-browser" tabindex="-1">Step 4: Open Zen Browser <a class="header-anchor" href="#step-4-open-zen-browser" aria-label="Permalink to &quot;Step 4: Open Zen Browser&quot;">​</a></h2><ul><li>Open Zen Browser from the Applications folder.</li><li>Complete the onboarding process.</li><li>If you use Little Snitch (LS), accept or block any connections as needed. For a browser, it is generally not recommended to block connections other than telemetry.</li></ul><h2 id="step-5-restart-zen-browser" tabindex="-1">Step 5: Restart Zen Browser <a class="header-anchor" href="#step-5-restart-zen-browser" aria-label="Permalink to &quot;Step 5: Restart Zen Browser&quot;">​</a></h2><p>At the time of writing, there seems to be a bug with Zen Browser where the menu might not display correctly on the initial start. To fix this, quit Zen Browser (<code>⌘Q</code>) and reopen it.</p><p>![[broken-menu.png]] ![[fixed menu.png]]</p><p>You should now have a fully functional Zen Browser on your macOS. If you need to uninstall Zen, you can use Pearcleaner.</p><hr><p>Thanks to <a href="https://github.com/SenpaiHunters" target="_blank" rel="noreferrer">SenpaiHunters</a> for creating this guide</p><p>Original Post: <a href="https://github.com/zen-browser/desktop/issues/53" target="_blank" rel="noreferrer">Issue #53</a></p>',21),o=[i];function r(l,p,h,c,d,u){return a(),t("div",null,o)}const m=e(n,[["render",r]]);export{b as __pageData,m as default};
