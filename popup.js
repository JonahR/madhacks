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



function buildNews(newsItem){
    // Changes all the urls
    document.getElementById('story_one').href= newsItem.values[0].url;
    document.getElementById('story_two').href= newsItem.values[1].url;
    document.getElementById('story_three').href= newsItem.values[2].url;
    // Changes the titles
    document.getElementsByTagName('h2')[0].innerHTML =
    document.getElementsByTagName('h2')[1].innerHTML =
    document.getElementsByTagName('h2')[2].innerHTML =
    // Changes the descrpition
    // Changes the picture
}

buildNews(newsObj)
