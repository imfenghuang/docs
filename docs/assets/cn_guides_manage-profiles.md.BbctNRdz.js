import{_ as e,c as o,o as i,a3 as t}from"./chunks/framework.B4p9iGtR.js";const g=JSON.parse('{"title":"Managing Firefox Profiles","description":"","frontmatter":{"title":"Managing Firefox Profiles"},"headers":[],"relativePath":"cn/guides/manage-profiles.md","filePath":"cn/guides/manage-profiles.md"}'),l={name:"cn/guides/manage-profiles.md"},s=t('<p>This [[guides/index|guide]] will give you a comprehensive understanding of Firefox profiles, helping you manage them effectively even in the most challenging situations. By following this guide, you&#39;ll learn how to preserve key elements of your browsing experience, including bookmarks, history, passwords, and more.</p><h2 id="goal" tabindex="-1">Goal <a class="header-anchor" href="#goal" aria-label="Permalink to &quot;Goal&quot;">​</a></h2><p>This guide will help you:</p><ul><li>Keep bookmarks and history</li><li>Keep passwords</li><li>Keep logins</li><li>Keep open tabs</li><li>Keep your default search engine</li><li>Preserve <code>about:config</code> settings</li><li>Keep installed add-ons (but note that you may lose all add-on customizations)</li></ul><h2 id="steps-to-follow" tabindex="-1">Steps to Follow <a class="header-anchor" href="#steps-to-follow" aria-label="Permalink to &quot;Steps to Follow&quot;">​</a></h2><h3 id="_1-open-your-current-profile-folder" tabindex="-1">1. Open Your Current Profile Folder <a class="header-anchor" href="#_1-open-your-current-profile-folder" aria-label="Permalink to &quot;1. Open Your Current Profile Folder&quot;">​</a></h3><ol><li>Go to <code>about:support</code> in Firefox.</li><li>Under the &quot;Application Basics&quot; section, click on &quot;Open Folder&quot; next to &quot;Profile Folder.&quot;</li></ol><div class="important custom-block github-alert"><p class="custom-block-title">**Turn Off Firefox**</p><p>This step is crucial to avoid corruption, as Firefox continuously reads and writes data while running.</p></div><h3 id="_2-copy-essential-files" tabindex="-1">2. Copy Essential Files <a class="header-anchor" href="#_2-copy-essential-files" aria-label="Permalink to &quot;2. Copy Essential Files&quot;">​</a></h3><p>After turning off Firefox, copy the following files from your profile folder:</p><ul><li><strong>places.sqlite</strong>: Contains bookmarks and history.</li><li><strong>cookies.sqlite</strong>: Stores login sessions.</li><li><strong>cert9.db + key4.db + logins.json</strong>: Holds your saved passwords.</li><li><strong>extension-preferences.json + extensions.json + extension-settings.json + extensions folder</strong>: These files keep track of your installed add-ons (but not their custom settings).</li><li><strong>search.json.mozlz4</strong>: Stores your search engine preferences.</li><li><strong>sessionCheckpoints.json + sessionstore.jsonlz4</strong>: Saves your currently open tabs.</li><li><strong>prefs.js</strong>: Contains your <code>about:config</code> settings.</li></ul><div class="note custom-block github-alert"><p class="custom-block-title">**Optional Files**</p><p></p><ul><li><strong>storage folder</strong>: If you want to keep add-on customizations (this may not work 100% of the time).</li><li><strong>chrome folder</strong>: If you want to retain your interface customizations.</li></ul></div><h3 id="_3-create-and-set-up-a-new-profile" tabindex="-1">3. Create and Set Up a New Profile <a class="header-anchor" href="#_3-create-and-set-up-a-new-profile" aria-label="Permalink to &quot;3. Create and Set Up a New Profile&quot;">​</a></h3><ol><li>Go to <code>about:profiles</code> in Firefox.</li><li>Click on &quot;Create a New Profile.&quot;</li><li>Select a folder to store the new profile.</li><li>Launch Firefox with the new profile.</li><li>Go to <code>about:support</code> again and open the profile folder for the new profile.</li><li><strong>Turn off Firefox</strong>.</li><li>Paste the files you copied earlier into the new profile folder.</li></ol><div class="warning custom-block github-alert"><p class="custom-block-title">**Incompatibility Error**</p><p></p><p>If Firefox opens with an incompatibility error after pasting the files, go to the new profile folder and move the <code>compatibility.ini</code> file somewhere else.</p></div><h3 id="_4-final-step-set-as-default-profile" tabindex="-1">4. Final Step: Set as Default Profile <a class="header-anchor" href="#_4-final-step-set-as-default-profile" aria-label="Permalink to &quot;4. Final Step: Set as Default Profile&quot;">​</a></h3><p>After ensuring everything works correctly, go back to <code>about:profiles</code> and set the newly created profile as the default. This will make it your main profile moving forward.</p><p>By following these steps, you&#39;ll maintain a consistent and personalized browsing experience across different Firefox profiles.</p>',18),r=[s];function a(n,p,c,d,f,u){return i(),o("div",null,r)}const m=e(l,[["render",a]]);export{g as __pageData,m as default};
