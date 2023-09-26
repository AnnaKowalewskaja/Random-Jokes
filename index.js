let quoteObject = {};
getQuotes();

async function getQuotes() {
    const quotes = 'rusian_quotes.json';
    const res = await fetch(quotes);
    const data = await res.json();
    const num = generateNum(data);
    quoteObject = data[num];

}



const quotesText = document.getElementById('quotes__text'),
    // quotesImg = document.getElementById('quotes__img'),
    quotesAuthor = document.getElementById('quotes__author'),
    quotesButton = document.getElementById('quotes__button'),
    body = document.getElementById('body');

const COLORS1 = ['#683611', '#813919', '#96581C', '#D2973E', '#c97b42', '#ae4f0c', '#521808'];
const COLORS2 = ['#c67815', '#daa628', '#EEC76F', '#f6f1b5', '#F6E8B8', '#ffdbaf', '#f8ebd3'];

quotesButton.addEventListener("click", changeQuotes);

function generateNum(data) {
    return Math.round(Math.random() * (data.length - 1));
}

function changeQuotes() {
    quotesText.innerHTML = quoteObject.text;
    quotesAuthor.innerHTML = quoteObject.author;
    getQuotes();
    const numColor = generateNum(COLORS1);
    body.style.cssText = `
    background-color:${COLORS1[numColor]};
    color:${COLORS2[numColor]};
    `;
    quotesButton.style.cssText = `
    background-color:${COLORS2[numColor]};
    color:${COLORS1[numColor]};
    `
}

setTimeout(changeQuotes, 200);

console.log('60/70');