plice = null

const log = (message) => {
  true && chrome.extension.getBackgroundPage().console.log(message);
}

openAdInNewTab = function(link, plice){
    var bkg = chrome.extension.getBackgroundPage();

    log(link);
    log(plice);
    var newLink = plice[link.pageUrl]
    if(newLink) {
        log('Opening new tab: ' + newLink)
        chrome.tabs.create({url: newLink});
    } else {
        log('Link ' + newLink + ' not found')
    }
    plice = null
    log(document)
  };
  
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.plice)
        plice = JSON.parse(request.plice)
       
});

chrome.contextMenus.create({
    title: "Ad Link Direct",
    contexts:["link"],
    onclick: function(link) { openAdInNewTab(link, plice)},
    documentUrlPatterns:  ["https://www.google.com/*"]
});