function onPageLoad() {
  navigateToHash();
  sendGitHubRequests();
};

function navigateToHash() {
  var hash = window.location.hash.substr(1);
  if (hash) {
    var tab = hash.split('-')[0];
    var elementList = document.getElementsByClassName("tabbed-content");
    updateTabbedContent(tab, elementList);
    elementList = document.getElementsByClassName("tab");
    updateTabbedContent(tab, elementList);
    var element = document.getElementById(hash + "Description");
    if (element && element.type === "checkbox") {
      element.checked = true;
    }
  }
};

function updateTabbedContent(tabId, elementList) {
  var foundTab = false;
  for (var i = 0; i < elementList.length; i++) {
    var element = elementList[i];
    if (element.id.indexOf(tabId) == 0) {
      element.classList.add("current-tab");
      foundTab = true;
    } else {
      element.classList.remove("current-tab");
    }
  }
  if (!foundTab) {
    updateTabbedContent("mainPage", elementList);
  }
};

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
