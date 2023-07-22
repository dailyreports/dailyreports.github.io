function generateReport() {
    const templateSelect = document.getElementById("templateSelect");
    const selectedTemplate = templateSelect.value;

    if (!selectedTemplate) {
        alert("Please select a template before generating.");
        return;
    }
    const childName = document.getElementById("childName").value;
    const skillsWorkedOn = document.getElementById("skillsWorkedOn").value;
    const skillsMastered = document.getElementById("skillsMastered").value;
    const skillsToPractice =      document.getElementById("skillsToPractice").value;
    let reportTemplate = "";
    if (selectedTemplate === "today") {
        reportTemplate = `Hello! Today ${childName} worked on ${skillsWorkedOn}. They made lots of progress on ${skillsMastered} and we will continue to help ${childName} get a better understanding of ${skillsToPractice}. Please let us know if you have any questions!`;
        
    } else {
       if (selectedTemplate === "yesterday") {
        reportTemplate = `Good morning! Yesterday ${childName} worked on ${skillsWorkedOn}. They made lots of progress on ${skillsMastered} and we will continue to help ${childName} get a better understanding of ${skillsToPractice}. Please let us know if you have any questions!`;
    }
    }

    document.getElementById("reportOutput").innerText = reportTemplate;
    const copyButton = document.getElementById("copyButton");
    copyButton.style.display = "block";
    copyButton.textContent = "Copy Report";
    copyButton.addEventListener("click", copyReport);
}

function copyReport() {
    const reportText = document.getElementById("reportOutput").innerText;
    const textarea = document.createElement("textarea");
    textarea.value = reportText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    const copyButton = document.getElementById("copyButton");
    copyButton.textContent = "Copied!";
    copyButton.removeEventListener("click", copyReport);
}


document.getElementById("templateSelect").addEventListener("change", function () {
    const inputFields = document.getElementById("inputFields");
    if (this.value) {
        inputFields.style.display = "block";
    } else {
        inputFields.style.display = "none";
        document.getElementById("reportOutput").innerText = "";
        document.getElementById("copyButton").style.display = "none";
    }
});
