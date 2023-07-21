function generateReport() {
    const childName = document.getElementById("childName").value;
    const skillsWorkedOn = document.getElementById("skillsWorkedOn").value;
    const skillsMastered = document.getElementById("skillsMastered").value;
    const skillsToPractice = document.getElementById("skillsToPractice").value;

    const reportTemplate = `Hello! Today ${childName} worked on ${skillsWorkedOn}. They made lots of progress on ${skillsMastered} and we will continue to help ${childName} get a better understanding of [PRACTICE SKILL]. Please let us know if you have any questions!`;

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






