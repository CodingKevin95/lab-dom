let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload =  function(event) {
  
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  
  const title = document.querySelector('#main-title');
  title.textContent = 'Something Shorter'

  // Part 2

  const body = document.querySelector('body');
  body.style='background-color: tan';

  // Part 3

  const fav = document.querySelector('#favorite-things');
  const fav2 = fav.children[5];
  fav2.parentElement.removeChild(fav2);

  // Part 4

  const specialTitle = document.getElementsByClassName('special-title');
    for (let i = 0; i < specialTitle.length; i++) {
      specialTitle[i].style.fontSize = '2rem';
    }

  // Part 5

  const race = document.querySelector('#past-races');
  const races = race.children[3];
  races.parentElement.removeChild(races);

  // Part 6

  // let city = 'Boston';
  // let newLi = (document.createElement('li').innerText = city);
  // document.getElementById('past-races').append(newLi);

  const list = document.querySelector('#past-races');
  const newList = document.createElement("li")
  list.appendChild(document.createTextNode("Boston"));


  // Part 7

  // // const blog = document.querySelector('.main')
  let newDiv = document.createElement('div')
  newDiv.className = 'blog-post purple';
  let location = document.createElement("h1")
  location.innerText = "Boston";
  let blogText = document.createElement('p')
  blogText.innerText = 'The Celtics will will the Championships';
  newDiv.append(location, blogText);
  document
    .getElementById('dom-adventures')
    .insertAdjacentElement("afterend", newDiv)

}