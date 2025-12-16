document.addEventListener("DOMContentLoaded", () => {

    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", async () => {
        // Get active tab
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        // Inject the converter script
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["injected_libs/html2pdf.bundle.min.js", "content_script.js"]
        });
    });

});
