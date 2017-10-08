var newsObj = undefined;

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request);
      if (request.requestNews) {
        sendResponse(newsObj)
      } else {
        loadNews(request.pageTitle); 
      }
    });
  
  function loadNews(query) {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://api.cognitive.microsoft.com/bing/v5.0/news/search?q= " + query.split(' ').join('+'), false);
    xhttp.setRequestHeader("Ocp-Apim-Subscription-Key", "637ae6a3583c4a8f990aa1ed28580490");
    xhttp.send();
    newsObj = JSON.parse(xhttp.responseText);
  }

  function getNewsObj() {
      return newsObj;
  }

