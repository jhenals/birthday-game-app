import {
  logo,
  jin,
  jk1,
  jk2,
  koya,
  purple,
  dynamite,
  springDay,
  lifeGoesOn,
} from "../assets";

const intro = [
  "🎉 DUN... DUN... DUN...",
  "Today is a VERY special day! 🎉",
  "It’s Nyka’s birthday! 🎂✨",
  "But wait… something suspicious is going on. 🤨",
  "BTS and her super awesome, totally amazing cousin (yeah, it's me 😏) have a TOP-SECRET mission for her.",
  "Before she can unlock her mystery gift, she must prove one thing:",
  "💜 Is she REALLY a true BTS fan? 💜",
  "They’ve set up some fun, little tests just for her. Will she pass the test? ",
  "Or will she have to face… the ultimate Bangtan penalty? (Just kidding… or are we? 👀)",
  "👉 Are you ready, Nyka? Let the adventure begin! 🚀💜",
];

const chapters = [
  {
    title: "Chapter 1: Begins ≠ Youth",
    description: "The Beginning",
    image: "/images/chapter1.jpg",
  },
  {
    title: "Chapter 2: The Memory Maze",
    description: "The Memory Maze",
    image: "/images/chapter2.jpg",
  },
  {
    title: "Chapter 3: Young Forever ",
    description: "The End",
    image: "/images/chapter3.jpg",
  },
  {
    title: "The Most Beautiful Moment in Life",
    description: "The gift",
    image: "",
  },
];

const chap1 = [
  {
    level: "easy",
    question: "What is the title of BTS’ debut song?",
    option_a: "DNA",
    option_b: "No More Dream",
    option_c: "I Need U",
    option_d: "Spring Day",
    correct: "option_b",
  },
  {
    level: "easy",
    question: "What is Borahe (보라해) a combination of?",
    option_a: "BTS + Love",
    option_b: "ARMY + Forever",
    option_c: "Purple + I Love You",
    option_d: "BTS + Dreams",
    correct: "option_c",
  },
  {
    level: "easy",
    question: "Which BTS member is known as the Golden Maknae?",
    option_a: "Jimin",
    option_b: "V",
    option_c: "RM",
    option_d: "Jungkook",
    correct: "option_d",
  },
  {
    level: "medium",
    question: "In which year did BTS debut?",
    option_a: "2013",
    option_b: "2015",
    option_c: "2017",
    option_d: "2019",
    correct: "option_a",
  },
  {
    level: "medium",
    question: "What is the name of BTS’s official light stick?",
    option_a: "Bangstick",
    option_b: "Army Bomb",
    option_c: "BTS Glow",
    option_d: "Purple Beam",
    correct: "option_b",
  },
  {
    level: "hard",
    question:
      "In the HYYH (The Most Beautiful Moment in Life) storyline, which BTS member’s character is often connected with time travel and trying to save the others?",
    option_a: "Jin",
    option_b: "Jimin",
    option_c: "Suga",
    option_d: "Jungkook",
    correct: "option_a",
  },
];

const chapt2images = [
  {
    name: "BTS",
    image: logo,
  },

  {
    name: "Jin",
    image: jin,
  },
  {
    name: "Jungkook 1",
    image: jk1,
  },
  {
    name: "Jungkook 2",
    image: jk2,
  },
  {
    name: "Koya",
    image: koya,
  },
  {
    name: "Purple",
    image: purple,
  },
  {
    name: "BTS",
    image: logo,
  },

  {
    name: "Jin",
    image: jin,
  },
  {
    name: "Jungkook 1",
    image: jk1,
  },
  {
    name: "Jungkook 2",
    image: jk2,
  },
  {
    name: "Koya",
    image: koya,
  },
  {
    name: "Purple",
    image: purple,
  },
];

const audioQuestions = [
  {
    audioClip: dynamite,
    correct: "Dynamite",
    options: ["Idol", "Butter", "Blood Sweat & Tears", "Dynamite"],
  },
  {
    audioClip: springDay,
    correct: "Spring Day",
    options: ["Boy With Luv", "Spring Day", "Fake Love", "Coffee"],
  },
  {
    audioClip: lifeGoesOn,
    correct: "Life Goes On",
    options: ["Life Goes On", "Save Me", "Mic Drop", "Not Today"],
  },
];

export { intro, chapters, chap1, chapt2images, audioQuestions };
