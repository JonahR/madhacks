

chrome.runtime.sendMessage({requestNews: true}, function(response) {
    buildNews(response);

})

function buildNews(newsItem){
    if(newsItem == null || newsItem == undefined){
        defaultTemplate();
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
    } else {
    
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
}

// default template
function defaultTemplate(){
    var aTag = document.getElementsByTagName('a');
    aTag[0].href = "http://www.cnn.com";
    aTag[1].href = "http://www.foxnews.com/";
    aTag[2].href = "https://www.nytimes.com/";

    var h2Tag = document.getElementsByTagName('h2');
    h2Tag[0].innerHTML = "CNN";
    h2Tag[1].innerHTML = "FOX";
    h2Tag[2].innerHTML = "The New York Times";

    var pTag = document.getElementsByTagName('p');
    pTag[0].innerHTML = "Breaking News, Latest News and Videos"
    pTag[1].innerHTML = "Fox News - Breaking News Updates | Latest News Headlines | Photos &amp; News Videos"
    pTag[2].innerHTML = "The New York Times - Breaking News, World News &amp; Multimedia"

    var imgTag = document.getElementsByTagName('img');
    imgTag[0].src = "Images/thumbnail1.png";
    imgTag[1].src = "Images/thumbnail2.png";
    imgTag[2].src = "Images/thumbnail3.png";
}
