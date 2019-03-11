const compliments = [
  "Your eyebrows are on fleek.",
  "I like your outfit so much that if I wore it on the same day as you I wouldn’t even be embarrassed, we’d just be that stylish.",
  "You’re a great person to do a group project with.",
  "Being alone is kind of nice. Being alone with you is better.",
  "You’re always on time to things, which is awesome because I’m not.",
  "Looking like a complete idiot with you is really fun.",
  "I would hang out with you even if you hadn’t showered for a couple days.",
  "I would be really okay with you seeing me without makeup, that’s how much I like you.",
  "You’re one of my favorite drunken karaoke partners.",
  "You’re really smart, and I’m not just saying that because I want you in my study group.",
  "You have really good taste in friends (i.e. me).",
  "You have a really contagious laugh. See, now I’m laughing and it's all your fault.",
  "Your sense of humor is exactly like mine.",
  "You can pull off wildly colored hair and that is a seriously awesome quality.",
  "I bet that sometimes you actually wake up flawless.",
  "You actually have a lot of interesting things to say, and I don’t say that about just anyone.",
  "You’re so hot, you make a dragon want to retire.",
  "I would go on an 18 hour road trip with you, I like you that much.",
  "Out of all the strangers I meet on a daily basis, I’m glad you’re one of those strangers that became my friend.",
  "If you were running for president, I would vote for you.",
  "If you cooked something really gross, I like you enough that I would tell you instead of politely eating it and hating everything.",
  "You just look really friendly, can we be friends?",
  "I would be really okay with just sitting and watching Netflix with you. Nothing else, just that and it would still be really nice.",
  "If you got really famous, I would be the first member of your fan club.",
  "You’re that “Nothing” when people ask me what I’m thinking about.",
  "You look great today.",
  "You’re a smart cookie.",
  "Our time together is like a nap, it never lasts long enough.",
  "I bet you make babies smile.",
  "You have impeccable manners.",
  "I like your style.",
  "You have the best laugh.",
  "I appreciate you.",
  "You are the most perfect you there is.",
  "Our system of inside jokes is so advanced that only you and I get it. And I like that.",
  "You’re strong.",
  "Your perspective is refreshing.",
  "You’re an awesome friend.",
  "You light up the room.",
  "You deserve a hug right now.",
  "You should be proud of yourself.",
  "You’re more helpful than you realize.",
  "You have a great sense of humor.",
  "You’ve got all the right moves!",
  "Is that your picture next to “charming” in the dictionary?",
  "Your kindness is a balm to all who encounter it.",
  "You’re all that and a super-size bag of chips.",
  "On a scale from 1 to 10, you’re an 11.",
  "You are brave.",
  "You’re even more beautiful on the inside than you are on the outside.",
  "You have the courage of your convictions.",
  "Aside from food. You’re my favorite.",
  "If cartoon bluebirds were real, a bunch of them would be sitting on your shoulders singing right now.",
  "You are making a difference.",
  "You’re like sunshine on a rainy day.",
  "You bring out the best in other people.",
  "Your ability to recall random factoids at just the right time is impressive.",
  "You’re a great listener.",
  "How is it that you always look great, even in sweatpants?",
  "Everything would be better if more people were like you!",
  "I bet you sweat glitter.",
  "You were cool way before hipsters were cool.",
  "That color is perfect on you.",
  "Hanging out with you is always a blast.",
  "You always know — and say — exactly what I need to hear when I need to hear it.",
  "You smell really good.",
  "You may dance like no one’s watching, but everyone’s watching because you’re an amazing dancer!",
  "Being around you makes everything better!",
  "When you say, “I meant to do that,” I totally believe you.",
  "When you’re not afraid to be yourself is when you’re most incredible.",
  "Colors seem brighter when you’re around.",
  "You’re more fun than a ball pit filled with candy. (And seriously, what could be more fun than that?)",
  "That thing you don’t like about yourself is what makes you so interesting.",
  "You’re wonderful.",
  "Everyday is just BLAH when I don’t see you For reals! (awesome – you are halfway through the list. You’re awesome!)",
  "Jokes are funnier when you tell them.",
  "You’re better than a triple-scoop ice cream cone. With sprinkles.",
  "Your bellybutton is kind of adorable.",
  "Your hair looks stunning.",
  "You’re one of a kind!",
  "You’re inspiring.",
  "If you were a box of crayons, you’d be the giant name-brand one with the built-in sharpener.",
  "You should be thanked more often. So thank you!!",
  "Our community is better because you’re in it.",
  "Someone is getting through something hard right now because you’ve got their back.",
  "You have the best ideas.",
  "You always know how to find that silver lining.",
  "Everyone gets knocked down sometimes, but you always get back up and keep going.",
  "You’re a candle in the darkness.",
  "You’re a great example to others.",
  "Being around you is like being on a happy little vacation.",
  "You always know just what to say.",
  "You’re always learning new things and trying to better yourself, which is awesome.",
  "If someone based an Internet meme on you, it would have impeccable grammar.",
  "You could survive a Zombie apocalypse.",
  "You’re more fun than bubble wrap.",
  "When you make a mistake, you fix it.",
  "Who raised you? They deserve a medal for a job well done.",
  "You’re great at figuring stuff out.",
  "Your voice is magnificent.",
  "The people you love are lucky to have you in their lives.",
  "You’re like a breath of fresh air.",
  "You’re gorgeous — and that’s the least interesting thing about you, too.",
  "You’re so thoughtful.",
  "Your creative potential seems limitless.",
  "You’re the coolest person I know. And I consider myself best friends with like all celebrities, so. . . .",
  "You’re irresistible when you blush.",
  "Actions speak louder than words, and yours tell an incredible story.",
  "Somehow you make time stop and fly at the same time.",
  "When you make up your mind about something, nothing stands in your way.",
  "You seem to really know who you are.",
  "Any team would be lucky to have you on it.",
  "In high school I bet you were voted “most likely to keep being awesome.”",
  "I bet you do the crossword puzzle in ink.",
  "Babies and small animals probably love you.",
  "If you were a scented candle they’d call it Perfectly Imperfect (and it would smell like summer).",
  "There’s ordinary, and then there’s you.",
  "You’re someone’s reason to smile.",
  "You’re even better than a unicorn, because you’re real.",
  "How do you keep being so funny and making everyone laugh?",
  "You have a good head on your shoulders.",
  "Has anyone ever told you that you have great posture?",
  "The way you treasure your loved ones is incredible.",
  "You’re really something special.",
  "You’re a gift to those around you."
];

/** ------------ This is using document.createElement() ------------ **/
// for (let i= 0; i < compliments.length; i++) {
//   // our parent container
//   const liTag = document.createElement('li');
//   // the h3 with our compliment
//   const h3Tag = document.createElement('h3');
//   h3Tag.innerText = compliments[i];
//   // our div that should have the hug count & the button
//   const divTag = document.createElement('div');
//   // our hug button
//   const buttonTag = document.createElement('button');
//   buttonTag.innerText = '🤗 it';
//   // our hug count container
//   const citeTag = document.createElement('cite');
//   citeTag.innerText = 'Hugged 0 Times'
//   // our cat image
//   const imageTag = document.createElement('img');
//   imageTag.width = 200;
//   imageTag.src = 'https://placekitten.com/510/215';
//
//   // add our hug stuff to our div container
//   divTag.append(citeTag, buttonTag)
//
//   // put our elements together in our li
//   liTag.append(imageTag, h3Tag, divTag)
//
//   // find our list of compliments
//   const listContainer = document.querySelector('ul');
//
//   // add our new compliment to our list
//   listContainer.append(liTag)
// }


/** ------------ This is using .innerHTML ------------ **/
// find our list of compliments
const listContainer = document.querySelector('ul');

for (let i= 0; i < compliments.length; i++) {
  // concatenate new li strings to the already existing html
  listContainer.innerHTML +=
  `<li>
    <img width="200" src="https://placekitten.com/505/255" />
    <h3>"${compliments[i]}"</h3>
    <div>
      <cite>Hugged 0 times</cite>
      <button>🤗 it</button>
    </div>
  </li>`
}
