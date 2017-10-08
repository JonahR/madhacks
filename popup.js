

chrome.runtime.sendMessage({requestNews: true}, function(response) {
    buildNews(response);

})

function buildNews(newsItem){
    for(var i = 0; i < 3; i++){
        document.getElementsByTagName('a')[i].href = newsItem.value[i].url;
        document.getElementsByTagName('h2')[i].innerHTML = newsItem.value[i].name;
        document.getElementsByTagName('p')[i].innerHTML = newsItem.value[i].description;
        if(newsItem.value[i].image != undefined){
            document.getElementsByTagName('img')[i].src = newsItem.value[i].image.thumbnail.contentUrl; 
        }
        
    }
    // allows for urls to make new tab
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
}

