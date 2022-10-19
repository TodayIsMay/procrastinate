let phrases = ['расставить книги по цвету', 'позалипать в YouTube', 'развести холивар в чатике', 'поспать', 'потыкать кнопки', 'посмотреть видяшки']

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

let button = document.querySelector('.button');
let advice = document.querySelector('.advice');
button.addEventListener('click', function() {
    smoothly(advice, 'textContent', getRandomElement(phrases));
    
    console.log(getRandomElement(phrases));
})