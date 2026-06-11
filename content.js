// content.js

// Replace all visible text nodes in common elements with 'uwu'
function replaceTextWithUwuInElement(element) {
  // Collect all text from direct text nodes
  let text = '';
  for (let child of element.childNodes) {
    if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
      text += child.textContent + ' ';
    }
  }
  text = text.trim();
  if (text) {
    let newText = '';
    for (let word of text.split(' ')) {
      let rand = Math.random();
      console.log(rand);
      if (rand < 0.5 && word !== 'uwu') {
        word = 'uwu';
      }
      newText += word + ' ';
    }
    newText = newText.trim();
    // Remove all direct text nodes
    for (let i = element.childNodes.length - 1; i >= 0; i--) {
      let child = element.childNodes[i];
      if (child.nodeType === Node.TEXT_NODE) {
        element.removeChild(child);
      }
    }
    // Add a single new text node
    element.insertBefore(document.createTextNode(newText), element.firstChild);
  }
}

const tags = ['div','span','p','a','li','td','th','h1','h2','h3','h4','h5','h6'];
tags.forEach(tag => {
  document.querySelectorAll(tag).forEach(el => replaceTextWithUwuInElement(el));
});
