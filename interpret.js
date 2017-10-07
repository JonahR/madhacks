// On page load look for page title
$(document).ready( function() {
    chrome.runtime.sendMessage({pageTitle: $('h1:first').text()}, function(response) {
        console.log("Success");
      });
});