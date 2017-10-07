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

function loadNews(query) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.cognitive.microsoft.com/bing/v5.0/news/search?q= " + query.split(' ').join('+'), false);
  xhttp.setRequestHeader("Ocp-Apim-Subscription-Key", "637ae6a3583c4a8f990aa1ed28580490");
  xhttp.send();
  var response = JSON.parse(xhttp.responseText);
  console.log(response);
}