document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      loadNews(request.pageTitle);
    });

chrome.runtime.sendMessage({requestNews: true}, function(response) {
    
    buildNews(response);
})

function buildNews(newsItem){

    for(var i = 0; i < 3; i++){
        document.getElementsByTagName('a')[i].href = newsItem.values[i].url;
        document.getElementsByTagName('h2')[i].innerHTML = newsItem.values[i].name;
        document.getElementsByTagName('p')[i].innerHTML = newsItem.values[i].description;
        document.getElementsByTagName('img')[i].src = newsItem.values[i].image.thumbnail.contentURL;
    }
    
    // // Changes all the urls
    // document.getElementsByTagName('a')[0].href = newsItem.values[0].url;
    // document.getElementsByTagName('a')[1].href = newsItem.values[1].url;
    // document.getElementsByTagName('a')[2].href = newsItem.values[2].url;
    // // Changes the titles
    // document.getElementsByTagName('h2')[0].innerHTML = newsItem.values[0].name;
    // document.getElementsByTagName('h2')[1].innerHTML = newsItem.values[1].name;
    // document.getElementsByTagName('h2')[2].innerHTML = newsItem.values[2].name;
    // // Changes the descrpition
    // document.getElementsByTagName('p')[0].innerHTML = newsItem.values[0].description;
    // document.getElementsByTagName('p')[1].innerHTML = newsItem.values[1].description;
    // document.getElementsByTagName('p')[2].innerHTML = newsItem.values[2].description;
    // // Changes the picture
    // document.getElementsByTagName('img')[0].src = newsItem.values[0].image.thumbnail.contentURL;
    // document.getElementsByTagName('img')[1].src = newsItem.values[1].image.thumbnail.contentURL;
    // document.getElementsByTagName('img')[2].src = newsItem.values[2].image.thumbnail.contentURL;
}

buildNews(newsObj)
