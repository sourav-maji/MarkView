// Function to update preview using Marked.js
function updatePreview() {
    const markdownInput = document.getElementById("markdown-input").value;
    const previewArea = document.getElementById("markdown-preview");
    
    console.log(markdownInput);
    try {
        // convert Markdown input to HTML
        previewArea.innerHTML = marked(markdownInput);
    } catch (error) {
        // Handle any errors
        previewArea.innerHTML = "<p style='color: red;'>Please refresh the page</p>";
    }
}

// Add event listener to update preview as user types
document.getElementById("markdown-input").addEventListener("input", function(){
    updatePreview()
});
