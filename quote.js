const quote = document.querySelector("#quote");
const quoteImg = document.querySelector("#quoteImg");
const author = document.querySelector("#author");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let i = 0;

const quotes = [
  {
    quote:
      '"If life were predictable it would cease to be life and be without flavor."',
    author: `Eleanor Roosevelt`,
  },
  {
    quote: ` "Life is a succession of lessons which must be lived to be understood." `,
    author: "Waldo Emerson",
  },
  {
    quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    author: "Abraham Lincoln",
  },
  {
    quote: `"You will face many defeats in life, but never let yourself be defeated."`,
    author: "Maya Angelou",
  },
  {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    author: "Babe Ruth",
  },
  {
    quote: `"Life is never fair, and perhaps it is a good thing for most of us that it is not." `,
    author: "Oscar Wilde",
  },
  {
    quote: ` "The only impossible journey is the one you never begin." `,
    author: "Tony Robbins",
  },
  {
    quote: ` "In this life we cannot do great things. We can only do small things with great love."`,
    author: "Mother Teresa",
  },
  {
    quote: ` "Only a life lived for others is a life worthwhile." `,
    author: "Albert Einstein",
  },
];

const chosenQuote = quotes[i];
quote.innerText = chosenQuote.quote;
author.innerText = chosenQuote.author;

previous.addEventListener("click", preQuote);

function preQuote() {
  i -= 1;
  if (i == -1) {
    i = quotes.length - 1;
  }
  const chosenQuote = quotes[i];
  quote.innerText = chosenQuote.quote;
  author.innerText = chosenQuote.author;
  console.log(i);
}

next.addEventListener("click", nextQuote);

function nextQuote() {
  i += 1;
  if (i == quotes.length) {
    i = 0;
  }
  const chosenQuote = quotes[i];
  quote.innerText = chosenQuote.quote;
  author.innerText = chosenQuote.author;
  console.log(i);
}
