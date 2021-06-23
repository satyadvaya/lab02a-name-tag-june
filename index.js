console.log("hello world!")

const nameTag = document.getElementById('name-tag');
console.log(nameTag)

const nameSection = document.getElementById('name-section');
nameSection.addEventListener('click', () => {
    console.log("i am clicking this thing")
    console.log(Math.random());
    nameSection.innerText = "Benny";
})

const nameInput = document.getElementById('name-input');
// nameInput.addEventListener('input', (event) => {
//     console.log(event.target.value);
//     nameSection.innerText = event.target.value;
// })

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
    nameSection.innerText = nameInput.value;
})

const topSection = document.getElementById('top-section');
topSection.style.backgroundColor = "purple";

const bottomSection = document.getElementById('bottom-section');
bottomSection.style.backgroundColor = "purple";

function shout(word) {
    console.log(word.toUpperCase());
}
shout('ohboy');

// same as below ...

const shoutAgain = function(word) {
    console.log(word.toUpperCase());
}
shoutAgain('here we go again')

// same as below ...

// const shoutAgain = function(word) {
//     console.log(word.toUpperCase());
// }
// shoutAgain('here we go again')
