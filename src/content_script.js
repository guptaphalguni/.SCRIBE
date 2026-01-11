(function() {
    try {

        // Get the user selected content
        const selection = window.getSelection();

        if (!selection || selection.toString().trim() === "") {
            alert("Please select some text on the page before converting!");
            return;
        }

        
        const range = selection.getRangeAt(0).cloneContents();

       
        const container = document.createElement("div");
        container.id = "scribe-selected-content";
        container.style.padding = "20px";
        container.appendChild(range);

       
        html2pdf()
            .from(container)
            .set({
                margin: 1,
                filename: "selected-content.pdf",
                html2canvas: { scale: 2 },
                jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
            })
            .save();

    } catch (error) {
        console.error("SCRIBE PDF Error:", error);
        alert("Error converting selection to PDF.");
    }
})();
