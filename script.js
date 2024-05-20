// Function to fetch the file content and render it with Marked.js
async function loadMarkdown(markdownFilePath) {
  try {
    const response = await fetch(markdownFilePath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const markdownContent = await response.text();
    document.getElementById('content').innerHTML = marked.parse(markdownContent);
    // Set scroll position to the top of the page after content is loaded
    window.scrollTo(0, 0);
  } catch (error) {
    console.error('Error loading Markdown file:', error);
    document.getElementById('content').innerHTML = `<p>Error loading content.</p>`;
  }
}

// Function to load the Markdown file corresponding to the current hash
function loadMarkdownForHash() {
  let hash = window.location.hash.slice(1); // Get the current hash and remove the leading '#'
  if (!hash || !hash.startsWith('file-')) {
    // If no hash or hash does not start with 'file-', set to the homepage and reload the hash
    window.location.hash = 'file-homepage';
  } else {
    const markdownFilePath = `/${hash.slice(5)}.md`;
    loadMarkdown(markdownFilePath);
  }
}

// Ensure the Markdown content is loaded correctly when the page loads
document.addEventListener("DOMContentLoaded", loadMarkdownForHash);

// Handle any hash changes
window.addEventListener('hashchange', loadMarkdownForHash);

// Show or hide "Back to Top" button based on scroll position
window.onscroll = function() {
  const button = document.getElementById('back-to-top');
  if (document.documentElement.scrollTop > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
};
