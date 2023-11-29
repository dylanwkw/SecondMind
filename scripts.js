// scripts.js
document.getElementById('noteForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Access form elements
  const linkInput = document.getElementById('link');
  const descriptionTextarea = document.getElementById('description');
  const tagsInput = document.getElementById('tags');

  // Get values from form elements
  const linkValue = linkInput.value;
  const descriptionValue = descriptionTextarea.value;
  const tagsValue = tagsInput.value.split(',').map(tag => tag.trim()).slice(0, 5); // Limit to the first 5 tags

  // Use the values as needed
  console.log('Link:', linkValue);
  console.log('Description:', descriptionValue);
  console.log('Tags:', tagsValue);
  
  // Clear the form (optional)
  linkInput.value = '';
  descriptionTextarea.value = '';
  tagsInput.value = '';
  
  fetchAndDisplayNotes(linkValue, descriptionValue, tagsValue);
  // Fetch and display updated notes
  // ...
});

// Function to fetch and display notes
async function fetchAndDisplayNotes(link, description, tags) {
  // const response = await fetch('/notes');
  // const notes = await response.json();
  const notes = [{
    link: link,
    description: description,
    tags: tags,  

  }];

  const notesList = document.getElementById('notesList');

  notes.forEach(note => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      Link: <a href="${note.link}" target="_blank">${note.link}</a>
      <br>
      <strong>${note.description}</strong>
      <br>
      Tags: ${note.tags.join(', ')}  <!-- Join tags into a string for display -->
      <hr>
    `;
    notesList.appendChild(listItem);
  });
}
