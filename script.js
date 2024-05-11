// Path to the external Markdown file
const markdownFilePath = 'http://localhost:8000/homepage.md';

// Function to fetch the file content and render it with Marked.js
async function loadMarkdown() {
  try {
    const response = await fetch(markdownFilePath);
    const markdownContent = await response.text();
    document.getElementById('content').innerHTML = marked.parse(markdownContent);
  } catch (error) {
    console.error('Error loading Markdown file:', error);
  }
}

// Load the Markdown content when the page is ready
loadMarkdown();

// Show or hide "Back to Top" button based on scroll position
window.onscroll = function() {
    const button = document.getElementById('back-to-top');
    if (document.documentElement.scrollTop > 100) {
      button.style.display = 'block';
    } else {
      button.style.display = 'none';
    }
};