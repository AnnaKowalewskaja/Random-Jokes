let quoteObject = {};
async function getQuotes() {
    const quotes = 'belarusian_quotes.json';
    const res = await fetch(quotes);
    const data = await res.json();
    const num = Math.round(Math.random() * (data.length - 2));
    quoteObject = data[num];
    
}
getQuotes();


const quotesText = document.getElementById('quotes__text'),
    quotesImg = document.getElementById('quotes__img'),
    quotesAuthor = document.getElementById('quotes__author'),
    quotesButton = document.getElementById('quotes__button');

quotesButton.addEventListener("click", changeQuotes);

function changeQuotes() {
    quotesText.innerHTML = quoteObject.text;
    quotesAuthor.innerHTML =quoteObject.author;
    getQuotes();
}


changeQuotes();