const myName = document.getElementById('my-name')
const nameInput = document.getElementById('input-name')
const nameButton = document.getElementById('name-button')
const magicalButton = document.getElementById('magical-button')
const tagBackground = document.getElementById('tag')

nameButton.addEventListener('click', () => {
    myName.textContent = nameInput.value
})
magicalButton.addEventListener('click', () => {
    tagBackground.style.backgroundColor = "purple";
    console.log ('we got clicked')
})