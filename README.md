# Welcome to my Website!
Hi all, this is my website. Nothing too fancy, just a place for me to share my content. As mentioned over on the [Projects](http://codisimus.com/projects) page, this website serves as a proof of concept for various HTML/CSS tricks. The purpose of this post is to dive into those details.

## Accessibility
First and foremost, while it should be a given, too much web content out there is not formatted properly. It ignores things such as:
- Headings (uses larger text instead)
- Forms (fields are not grouped on the page but rather tied together in the javascript code)
- Alt text/tooltips
- Element attributes such as *active*
- Generally non-hacky or un-intuitive code

> I try my best to keep up but I am sure I miss certain accessibility features as I am not actively developing web pages.

There is a wide variety of *readers* of modern-day web pages. As a developer, you must accommodate people who have varying *access* to the content. Some of those variations are physical such as the inability to distinguish certain colors and some are technical such as consuming content through a smart speaker rather than a computer screen. Even if humans are able to make sense of what is being presented, computers may struggle a bit more.

This is my plea to all developers to pay attention and care about accessibility when writing your code. As a reward, your content will be more properly handled by other code. As an example, here is what Bing presents when I search for **PhatLoots**.
![PhatLoots Presented by Bing](http://codisimus.com/images/Bing%20Presented%20by%20Bing.png)
Notice how Bing is able to dynamically read the content from my page and present it in its own compressed, yet very intuitive, format.

## Hosting
This website costs me nothing to host which is perfect for a casual side-project. The pages are served from [GitHub](http://github.com/Codisimus/codisimus.github.io) for free which is possible since the webpages themselves are static and not built using any backend server. There are of course downsides to such an approach. A static website is limited in many aspects. I have encountered a few of these myself and have used some innovative workarounds.

### Dynamic Content
I suppose, this is obvious but my static web pages are not designed to have dynamic content. What I mean by that is I, or a welcome visitor, cannot take some sort of action upon my website in order to update or change it. For example, you cannot *create an account*, *upload/post content*, or *edit and save a page*. For the most part, I don't need that functionality. However, for my [Bingo Board](http://codisimus.com/bigbowlbingo), it presented a problem...

#### Saving State
[Big Bowl Bingo](http://codisimus.com/bigbowlbingo) is a project I created for a specific American Football event (though it would work with any game throughout the season). The tool provides you with a [Random Bingo Board](http://codisimus.com/bigbowlbingo?random) on which to play.

Wanting to add some strategy to an otherwise simple game, I provided a way to build your own board by choosing exactly what you would like and where. But that is only worthwhile if it can be done ahead of time to prepare your custom board for later; when the game is being played. So the solution? Looking at [the code](https://github.com/Codisimus/codisimus.github.io/blob/master/bigbowlbingo.html#L19), each selection item is assigned a character value. Said characters are alpha-numeric including a few others since I wanted more than 36 options. These characters are then [stored in a hash](https://github.com/Codisimus/codisimus.github.io/blob/master/js/bigbowlbingo.js#L36) and appended to the URL as a **Board ID**. Using this approach, only 25 characters need to be provided in order to completely recreate the exact 5x5 grid.

To complicate things a bit more, I include an option for *seeing an advertisement for a specific brand*. That brand is a custom text field beneath the form. When the board is completed and generated, that text value is appended to the Board ID within parentheses.

Maybe not the best approach but the tool allows for a visitor to generate a bingo board, bookmark or share it, and repeatedly play it all without creating an account or requiring me to store hundreds of board configurations within a database.

#### Blog Posts
I like to share video and music content. Neither of those is difficult as I host them on another site, such as YouTube, and then embed them here. In the past, I have done the same for blog posts, embedding them from a blogging website. However, I much prefer posting them straight to the website. The downside of this is formatting. Maybe it is because I prefer backend work, but formatting text in HTML is very tedious. I much prefer MD as is used on GitHub. Ideally, I would be able to write content in MarkDown and embed it within a page. This would have the added benefit of not duplicating the content if I wish to include it in multiple places (such as a preview as well as a full page).

I personally love developing cool ideas like this but, as with any common problem, I was sure others have also encountered this predicament and possibly someone has already solved it. Well, as it turns out, that person is [Jason Lee (aka zerodevx)](https://github.com/zerodevx). His project, [zero-md](https://zerodevx.github.io/zero-md/), converts an MD file to HTML in order to place it within a div. A little bit of additional JavaScript code allows for dynamically pulling an MD file from GitHub meaning that each post can have its own URL without actually creating HTML files for each.

I still wish to add more features, such as the latest posts automatically, but for now I do not mind updating a few lines of HTML each time I push a new MD post.

#### Duplicated Code
Duplicate code/logic is my 2nd biggest pet peeve when it comes to programming (Improper error handling takes the Gold). The whole process of copying code is not only tedious but also prone to many failures:
- code gets updated in one place but not another
- code is assumed to function similarly when one copy is actually slightly different
- can dilute the unique code with repetitive lines (Just look at 90% of [bigbowlbingo.html](https://github.com/Codisimus/codisimus.github.io/blob/master/bigbowlbingo.html#L17))

I could go on, (and I possibly will in a future post) but for now let us leave it at "duplicating code is not ideal". When it comes to this website, the header and footer are shared across most pages. With modern technologies, you could implement a template in order to avoid manually repeating those elements on each page. I am still looking for an elegant solution that I like but for now, I have accepted copying/pasting my changes to each file. I do not often change that content so I feel no need to develop a costly solution in this scenario. If I do find it to be tedious in the future, I may write a simple script to automatically update each of my pages. But until then, developing said script would take more time in the long run.

## Minecraft Plugin Docs
This was a fun challenge back when I worked on [Minecraft plugins](http://codisimus.com/plugins). I wanted to bring my plugin documentation to my website as well as add a few features not provided by BukkitDev. The plugins are no longer updated but I wanted to keep the documentation to highlight some functionality.

### Tabbed Content
The first feature I wanted to have was categorized tabs. My readers do not want to navigate several pages just to find the information of a single plugin. Here is the HTML for said Tabs:
```html
<div id=contentNavigation>
  <ul id=tabList>
    <li><a id=mainPageTab class="button tab current-tab" href="#mainPage">Main Page</a></li>
    <li><a id=commandsTab class="button tab" href="#commands">Commands</a></li>
    <li><a id=permissionsTab class="button tab" href="#permissions">Permissions</a></li>
    <li><a id=useCasesTab class="button tab" href="#useCases">Use Cases</a></li>
    <li><a id=tutorialsTab class="button tab" href="#tutorials">Tutorials</a></li>
    <li><a id=faqTab class="button tab" href="#faq">FAQ</a></li>
  </ul>
</div>
```
As you can see, each tab has its own *button*. For accessibility, each of these tabs is grouped together as list items within a *tabList*. Each Tab also has an assigned hash code so that a visitor may navigate directly to any tab. You may also notice that a specific class is used to indicate the *current-tab*. You can look at the full [CSS](https://github.com/Codisimus/codisimus.github.io/blob/master/css/plugindocs.css#L37) and [JS](https://github.com/Codisimus/codisimus.github.io/blob/master/js/plugindocs.js#L6) for more detail, but essentially, when a tab is clicked. the corresponding div is shown while the rest are hidden.

### Collapsable Info
It took a while to get this right, but the result is a collapsable segment of the page that does not use any library or even JavaScript. As seen on the [Commands](http://codisimus.com/phatloots#commands) and [FAQ](http://codisimus.com/phatloots#faq) Tabs, you are able to click on the heading in order to reveal the related content. The trick behind this one is using a *checkbox* element to allow the CSS to determine whether the collapsable content is currently selected.

**HTML**:
```href
<ul class="collapsible">
  <li>
    <a class="anchor" id=contentOne></a>
    <input type="checkbox" id=contentOneDescription />
    <label for=contentOneDescription>Content One Title</label>
    <p>Content One goes here</p>
  </li>
  <li>
    <a class="anchor" id=contentTwo></a>
    <input type="checkbox" id=contentTwoDescription />
    <label for=contentTwoDescription>Content Two Title</label>
    <p>Content Two goes here</p>
  </li>
</ul>
```
**CSS**:
```css
.collapsible > li > input + label ~ * {
  display: none;
}
.collapsible > li > input:checked + label ~ * {
  display: block;
}
```
Simple as that; clicking on the label text will toggle the checkbox!

More CSS was used to replace the checkbox with a **+** or **-** icon to be more intuitive. The full code can be seen in [main.css](https://github.com/Codisimus/codisimus.github.io/blob/master/css/main.css) but I will include the important bits here:
```css
.collapsible > li > input {
  display: none;
}
.collapsible > li > label {
  cursor: pointer;
}
.collapsible > li > input + label:before {
  border-style: solid;
  border-width: 1px;
  vertical-align: middle;
  font-size: 15px;
  font-family: "Courier New";
  content: "+";
}
.collapsible > li > input:checked + label:before {
  content: "-";
}
```
Often, we introduce libraries and languages in order to accomplish something that we may otherwise determine to be impossible. Libraries are great, and not reinventing the wheel is a good thing, but I still enjoy making this sort of content on my own if even just to prove to myself that it can be done and libraries are not always required.

### Latest Download
This feature is all about automation. I released new versions often, many of which did not warrant updates to the documentation page. Using JavaScript, each plugin page dynamically grabs the plugin name, finds the project on my GitHub, and fetches the latest version. The Download link is then updated with the version number and URL:
```javascript
function sendGitHubRequests() {
  var request = new XMLHttpRequest();
  request.onload = updateDownloadButton;
  request.open("GET", getUrl(document.title, "/releases/latest"), true);
  request.send();
};

function updateDownloadButton() {
  var responseObj = JSON.parse(this.responseText);
  var downloadButton = document.getElementById("latestDownload");
  if (responseObj.tag_name) {
    downloadButton.textContent += " " + responseObj.tag_name;
    downloadButton.href = responseObj.assets[0].browser_download_url;
  }
};

function getUrl(pluginName, path) {
  return "https://api.github.com/repos/Codisimus/" + pluginName + path;
};
```
This code is simplified if you use jQuery but sometimes libraries are overkill or not an option for some reason. You should not *have to* include jQuery to do a simple action such as this.

# Conclusion
This post may serve as a living document. It all depends on the content I add to the site. Simple, but interesting tricks would be added to this page while other, more complicated features will warrant their own post. You can always follow me on [GitHub](https://github.com/Codisimus/) if interested in seeing updates.
