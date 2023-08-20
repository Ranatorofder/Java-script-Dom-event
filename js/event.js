// opption two onclick button
// importent some time use this
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// opption three onclick button 

const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}

// opption:4 onclick button
const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurPle() {
    document.body.style.backgroundColor = 'purple'
}

// opption:5 onclick button

const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink)

function makePink() {

    document.body.style.backgroundColor = 'pink'
}

// another option:5

const makeDarkButton = document.getElementById('make-dark');
makeDarkButton.addEventListener('click', function makeDark() {
    document.body.style.backgroundColor = '#323437'
})

// fainal option:5 
// it's almost everytime use

document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})