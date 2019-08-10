window.addEventListener ("load", adFinder, false);


function adFinder(evt) {
    var links = document.getElementsByClassName('ads-visurl')
    var adLinks = {};

    console.log(links)
    Array.from(document.getElementsByClassName('ads-visurl')).forEach(link => {
        link.style.backgroundColor = 'orange'
        adLinks[link.baseURI] = link.parentNode.href
        console.log(link)
    });
    // for (var link of links) {
    //     console.lo(link)
    //     link.style.backgroundColor = 'orange' 
    //     adLinks[link.baseUri] = link.parentNode.href
    // }
    console.log(adLinks)

    chrome.runtime.sendMessage({plice: JSON.stringify(adLinks)});

}
