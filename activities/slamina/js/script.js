/**
 * Name That Animal!
 * Alyssa Durdey
 *
 * This is a template. You must fill in the title, author,
 * and this description to match your project!
 */

"use strict";
const speechSynthesizer = new p5.Speech();
const speechRecognizer = new p5.SpeechRec();
let currentAnimal = ``;
const animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra",
];
let bg = {
  r: 158,
  g: 219,
  b: 174,
};

/**
 * Description of preload
 */
function preload() {}

/**
 * Creates the canvas
 */
function setup() {
  createCanvas(800, 800);
}
/**
 * Draws the green background
 */
function draw() {
  background(bg.r, bg.g, bg.b);
}
/**
 * User will hear an animal pronounced backwards when the mouse is pressed
 */
function mousePressed() {
  currentAnimal = animals[int(random(0, animals.length))];
  console.log(currentAnimal);
  let reverseAnimal = reverseString(currentAnimal);
  speechSynthesizer.speak(reverseAnimal);
}
/**
Reverses the string
*/
function reverseString(myString) {
  //Splits the string into an array of characters
  let characters = myString.split(``);
  // Reverses the array of characters
  let reverseCharacters = characters.reverse();
  // Joins the array of characters back into a string
  let result = reverseCharacters.join(``);
  // Return the result
  return result;
  // Future Note: I can also combine all this into one line, such as
  //return string.split(``).reverse().join(``);
}
