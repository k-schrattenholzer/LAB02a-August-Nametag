const myName = document.getElementById('my-name')
const nameInput = document.getElementById('input-name')
const nameButton = document.getElementById('name-button')
const magicalButton = document.getElementById('magical-button')
const dreamyButton = document.getElementById('dreamy-button')
const fontButton = document.getElementById('font-button')
const tag = document.getElementById('tag')


nameButton.addEventListener('click', () => {
    myName.textContent = nameInput.value
})

fontButton.addEventListener('click', () => {
    tag.style.fontFamily = 'monospace';
    console.log ('we clicked the font button');
    
})

magicalButton.addEventListener('click', () => {
    tag.style.backgroundColor = 'purple';
    myName.style.color = "purple";

})

dreamyButton.addEventListener('click', () => {
    tag.style.backgroundImage = "url('clouds.jpg')";
    myName.style.color = "pink";
})
