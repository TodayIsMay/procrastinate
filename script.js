let phrases = ['расставить книги по цвету', 'позалипать в YouTube', 'развести холивар в чатике', 'поспать', 'потыкать кнопки', 'посмотреть видяшки']

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let button = document.querySelector('.button');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');
let body = document.querySelector('.body');
button.addEventListener('click', function() {
    smoothly(advice, 'textContent', getRandomElement(phrases));
    
    console.log(getRandomElement(phrases));
})

let borders = body.getBoundingClientRect();
let width = borders.width;
let height = borders.height;
console.log('ширина' + width);
if (width >= height) {
    image.setAttribute('style', 'width: 30%');
    console.log(width);
} else {
    image.setAttribute('style', 'width: 30vh');
    console.log(width);
}