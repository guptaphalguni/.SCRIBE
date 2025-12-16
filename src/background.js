// Runs once when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    console.log("SCRIBE Extension successfully installed.");
});

// (Optional for future use)
// This listener simply shows that the service worker is running
chrome.runtime.onStartup.addListener(() => {
    console.log("SCRIBE background service worker loaded.");
});
