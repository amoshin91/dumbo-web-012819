const compliments = [
  "Your eyebrows are on fleek.",
  "You’re a great person to do a group project with.",
  "You’re always on time to things, which is awesome because I’m not.",
  "Looking like a complete idiot with you is really fun.",
  "Being alone is kind of nice. Being alone with you is better.",
  "I would hang out with you even if you hadn’t showered for a couple days.",
  "I would go on an 18 hour road trip with you, I like you that much.",
  "Out of all the strangers I meet on a daily basis, I’m glad you’re one of those strangers that became my friend.",
  "You’re that “Nothing” when people ask me what I’m thinking about.",
  "You’re more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
  "I like your outfit so much that if I wore it on the same day as you I wouldn’t even be embarrassed, we’d just be that stylish.",
  "You’re even better than a unicorn, because you’re real.",
  "I would be really okay with you seeing me without makeup, that’s how much I like you.",
  "You have really good taste in friends (i.e. me).",
  "You have a really contagious laugh. See, now I’m laughing and it's all your fault.",
];
// helper method to get random number for photos
function randomNumber(minNumber, maxNumber) {
  // given a min and max, return a number between them
  return Math.floor((Math.random() * (maxNumber - minNumber) + minNumber) / 10) * 10;
}

// we are finding our <em> tag & removing it
document.querySelector('em').remove();

const ulTag = document.querySelector('ul');

compliments.forEach(function(compliment) {
  ulTag.innerHTML +=
  `<li>
      <div class="trash">🗑</div>
      <div class="favorite">⭐️</div>
      <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
      <h3>"${compliment}"</h3>
      <div>
        <cite data-hug-count="0">Hugged 0 times</cite>
        <button>🤗 it</button>
      </div>
    </li>`
})
// be able to add a "hug" to a compliment and see my hug count go up accordingly

// we need to find all of our buttons
ulTag.addEventListener('click',  function(event) {
  if (event.target.tagName === 'BUTTON') {
    // we need to find the hug count element <cite> that we just clicked on
    const citeTag = event.target.parentElement.querySelector('cite');
    // we need to update it by 1
    let updatedHugCount = parseInt(citeTag.dataset.hugCount) + 1

    citeTag.dataset.hugCount = updatedHugCount;
    citeTag.innerText = `Hugged ${updatedHugCount} times`
  } else if (event.target.classList.contains('trash')) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains('favorite')) {
    event.target.parentElement.innerHTML =
    `<img src="https://media.giphy.com/media/fxKZAR0nAUhJCcvqP5/giphy.gif" class="angelo-parrot" />` +
    event.target.parentElement.innerHTML
  }
})

//  ----- to add my own compliments ------

// find our form
const formTag = document.querySelector('form')
// on submit, grab whatever is in the input box in the form (the compliment)
formTag.addEventListener('submit', function(event) {
  event.preventDefault()

  const compliment = event.target.compliment.value
  // using that complimet make a new complimet li, add in our complimet
  // attach that new li to our UL (in the top position)
  ulTag.innerHTML =
  `<li>
      <div class="trash">🗑</div>
      <div class="favorite">⭐️</div>
      <img width="200" src="https://www.placecage.com/gif/${randomNumber(400, 500)}/${randomNumber(200, 250)}" />
      <h3>"${compliment}"</h3>
      <div>
        <cite data-hug-count="0">Hugged 0 times</cite>
        <button>🤗 it</button>
      </div>
    </li>` + ulTag.innerHTML
})
