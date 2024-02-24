let poems = [];

function loadPoems() {
  const poemContainer = document.getElementById('poems');
  poemContainer.innerHTML = '';

  for (let poem of poems) {
    const poemElement = document.createElement('div');
    poemElement.classList.add('poem');

    const titleElement = document.createElement('h3');
    titleElement.textContent = poem.title;

    const textElement = document.createElement('p');
    textElement.textContent = poem.text;

    poemElement.appendChild(titleElement);
    poemElement.appendChild(textElement);

    poemContainer.appendChild(poemElement);
  }
}

function submitPoem() {
  const title = document.getElementById('poemTitle').value;
  const text = document.getElementById('poemText').value;

  if (title && text) {
    const newPoem = { title, text };
    poems.push(newPoem);

    document.getElementById('poemForm').reset();
    loadPoems();
  }
}

function logout() {
  localStorage.removeItem('poems');
  location.href = 'index.html';
}

function loadSavedPoems() {
  const savedPoems = JSON.parse(localStorage.getItem('poems')) || [];
  poems = savedPoems;
  loadPoems();
}

loadSavedPoems();

document.getElementById('poemForm').addEventListener('submit', (event) => {
  event.preventDefault();
  submitPoem();
});