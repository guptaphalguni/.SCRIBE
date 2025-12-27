document.addEventListener("DOMContentLoaded", () => {

  const selectBtn  = document.getElementById("selectBtn");
  const convertBtn = document.getElementById("convertBtn");
  const clearBtn   = document.getElementById("clearBtn");
  const statusEl   = document.getElementById("status");

  // HARD GUARD (this stops crashes permanently)
  if (!selectBtn || !convertBtn || !clearBtn || !statusEl) {
    console.error("Popup elements missing:", {
      selectBtn, convertBtn, clearBtn, statusEl
    });
    return;
  }

  function updateStatus(msg) {
    statusEl.textContent = msg;
  }

  selectBtn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content_script.js"]
    });
    updateStatus("Selection mode activated.");
  });

  convertBtn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: [
        "injected_libs/html2pdf.bundle.min.js",
        "content_script.js"
      ]
    });
    updateStatus("Generating PDF...");
  });

  clearBtn.addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => window.getSelection()?.removeAllRanges()
    });
    updateStatus("Selection cleared.");
  });

});
