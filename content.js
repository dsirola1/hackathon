//alert('hackathon extension alert!');

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      let firstHref = $("a[href^='http']").eq(0).attr("href");
      alert(firstHref);
      chrome.tabs.create({"url": firstHref});
    }
  }
);