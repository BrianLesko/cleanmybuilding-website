// Function to fetch the file content and render it with Marked.js
async function loadMarkdown() {
  try {
    const response = await fetch('/homepage.md');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    const html = marked.parse(text);  // Update this line
    document.getElementById('content').innerHTML = html;
  } catch (error) {
    console.error('Error loading Markdown file:', error);
  }
}


// Call the function to load and render the Markdown
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

