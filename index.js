const nameSection = document.getElementById('name-section');
const nameInput = document.getElementById('name-input');
const nameButton = document.getElementById('name-button');

nameButton.addEventListener('click', () => {
    nameSection.textContent = nameInput.value;
});

const topSection = document.getElementById('top-section');
const bottomSection = document.getElementById('bottom-section');
const pinkButton = document.getElementById('pink-button');
const lightgreenButton = document.getElementById('lightgreen-button');
const lightblueButton = document.getElementById('lightblue-button');

pinkButton.addEventListener('click', () => {
    topSection.style.background = "pink";
    bottomSection.style.background = "pink";
});

lightgreenButton.addEventListener('click', () => {
    topSection.style.background = "lightgreen";
    bottomSection.style.background = "lightgreen";
});

lightblueButton.addEventListener('click', () => {
    topSection.style.background = "lightblue";
    bottomSection.style.background = "lightblue";
});