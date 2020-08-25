/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Quotes stored in an array
***/
var quotes = [
  {quote: "Keep your face always toward the sunshine-and shadows wil fall behind you.", source: "Walt Whitman"},
  {quote: "It's always the simple that produces the marvelous.", source: "Amelia Barr"},
  {quote: "Let us make our future now, and let us make our dreams tomorrow's reality.", source: "Malala Yousafzai"},
  {quote: "Frankly, my dear, I don't give a damn.", source: "Gone With the Wind", year: 1939},
  {quote: "I'm going to make him an offer he can't refuse.", source: "The Godfather", year: 1972},
  {quote: "Toto, I've got a feeling we're not in Kansas anymore.", source: "Dorothy", citation: "The Wizard of Oz", year: 1939},
  {quote: "You talking to me?", source: "Robert DeNiro", citation: "Taxi Driver", year: 1976}
]
console.log(quotes);




/***
  This is the function that accesses the quotes array. 
  It chooses a random number based on the length of the array, then returns the quote based on the index number.
***/
function getRandomQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
  } 

console.log(getRandomQuote());


/***
  This is the function that prints the quotes to the website.
  The empty HTML variable is complete with concatanated strings which include two conditional statements to determine if 
  a quote has a citation and a year. If the quote does, it is printed to the website.
  The getElementById is used to target the div element in the index.html
***/

function printQuote() {
  var randomQuote = getRandomQuote();
  var HTML = ' ';
  HTML += '<p class="quote">' + randomQuote.quote + '</p>' + '<p class="source">' + randomQuote.source;
   if (randomQuote.citation) {
    HTML += '<span class = "citation">' + randomQuote.citation + '</span>';
    }
    if(randomQuote.year) {
     HTML += '<span class = "year">' + randomQuote.year + '</span>';
     } 
     HTML += '</p>';
     document.getElementById("quote-box").innerHTML=HTML;
}



/***
  This is the event listener provided by Treehouse that is called when the button is clicked to show another quote.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);