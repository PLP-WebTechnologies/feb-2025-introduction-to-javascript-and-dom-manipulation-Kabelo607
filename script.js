// Select elements by their IDs
const dynamicText = document.getElementById('dynamicText');
const changeTextBtn = document.getElementById('changeTextBtn');
const toggleElementBtn = document.getElementById('toggleElementBtn');

// Change text content and modify CSS styles dynamically
changeTextBtn.addEventListener('click', () => {
  dynamicText.textContent = "Text updated dynamically!";
  dynamicText.style.color = 'crimson';
  dynamicText.style.fontWeight = 'bold';
  dynamicText.style.fontSize = '24px';
});

// Add or remove an element on button click
toggleElementBtn.addEventListener('click', () => {
  const existingElement = document.getElementById('addedElement');

  if (existingElement) {
    // Remove the element if it exists
    existingElement.remove();
  } else {
    // Create and add a new element
    const newElement = document.createElement('div');
    newElement.id = 'addedElement';
    newElement.textContent = "I'm a dynamically added element!";
    newElement.style.marginTop = '10px';
    newElement.style.padding = '10px';
    newElement.style.backgroundColor = 'lightyellow';
    newElement.style.border = '1px solid orange';
    document.body.appendChild(newElement);
  }
});