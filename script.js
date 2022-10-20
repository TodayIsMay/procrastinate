let phrases = ['расставить книги по цвету',
    'позалипать в YouTube',
    'развести холивар в чатике',
    'поспать',
    'потыкать кнопки',
    'посмотреть видяшки',
    'прочитать непрочитанное в Telegram-каналах',
    'сходить на концерт Олега Медведева']

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let button = document.querySelector('.button');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');
let body = document.querySelector('.body');
let phrase = document.querySelector('.phrase');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(advice, 'textContent', randomElement);
    if (randomElement.length >= 40) {
        phrase.style.fontSize = '200%';
    } else {
        phrase.style.fontSize = '250%';
    }

    console.log(getRandomElement(phrases));
});

button.addEventListener('mouseover', function () {
    //button.setAttribute('backgroundColor', '#ffffff');
    button.style.backgroundColor = '#808080';
    console.log('Mouse is on the button.')
});

button.addEventListener('mouseout', function () {
    //smoothly(button, 'backgroundColor', '#323131');
    button.style.backgroundColor = '#323131';
});

window.addEventListener('resize', function () {
    let borders = body.getBoundingClientRect();
    let width = borders.width;
    let height = borders.height;
    //let width = body.style.width;
    //console.log('ширина' + width);
    if (width >= height) {
        image.setAttribute('style', 'width: 30%');
        console.log('ширина: ' + width);
        console.log('высота: ' + height);
    } else {
        image.setAttribute('style', 'width: 30vh');
        console.log(width);
    }
});