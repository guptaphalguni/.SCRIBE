
chrome.runtime.onInstalled.addListener(() => {
    console.log("SCRIBE Extension successfully installed.");
});


chrome.runtime.onStartup.addListener(() => {
    console.log("SCRIBE background service worker loaded.");
});
