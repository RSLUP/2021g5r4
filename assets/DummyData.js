const listning = require('../assets/titles/listning.jpg');
const maths = require('../assets/titles/maths.jpg');
const maths1 = require('../assets/titles/maths1.jpg');
const maths2 = require('../assets/titles/maths2.jpg');
const maths3 = require('../assets/titles/maths3.jpg');
const it = require('../assets/titles/it.jpg');
const it1 = require('../assets/titles/it1.jpg');
const it2 = require('../assets/titles/it2.jpg');
const it3 = require('../assets/titles/it3.jpg');
const grammer = require('../assets/titles/grammer.jpg');
const writing = require('../assets/titles/writing.jpg');
const speaking = require('../assets/titles/speaking.jpg');
const reading = require('../assets/titles/reading.jpg');
const vocubluary = require('../assets/titles/vocubluary.jpg');

const levels = [
  {
    id: 1,
    name: 'Beginner',
  },
  {
    id: 2,
    name: 'Intermediate',
  },
  {
    id: 3,
    name: 'Advance',
  },
];

const subjects = [
  {
    id: 1,
    name: 'English Language',
  },
  {
    id: 2,
    name: 'Computer Science',
  },
  {
    id: 3,
    name: 'Mathematics',
  },
];

const areas = [
  {
    id: 1,
    name: 'Speaking',
    image: speaking,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 10,
    subject: [1],
    quizesList: [
      {
        id: 1,
        level: [1],
        levelName: 'Beginner',
      },
      {
        id: 2,
        level: [1],
        levelName: 'Beginner',
      },
      {
        id: 3,
        level: [2],
        levelName: 'Intermediate',
      },
      {
        id: 4,
        level: [2],
        levelName: 'Intermediate',
      },
      {
        id: 5,
        level: [3],
        levelName: 'Advance',
      },
      {
        id: 6,
        level: [3],
        levelName: 'Advance',
      },
    ],
  },
  {
    id: 2,
    name: 'Grammer',
    image: grammer,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 5,
    subject: [1],
  },
  {
    id: 3,
    name: 'Reading',
    image: reading,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 8,
    subject: [1],
  },
  {
    id: 4,
    name: 'Writing',
    image: writing,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 8,
    subject: [1],
  },
  {
    id: 5,
    name: 'Vocabulary',
    image: vocubluary,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 8,
    subject: [1],
  },
  {
    id: 6,
    name: 'Listning',
    image: listning,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 8,
    subject: [1],
  },
  {
    id: 7,
    name: 'Programming',
    image: it3,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 7,
    subject: [2],
  },
  {
    id: 8,
    name: 'Design Pattern',
    image: it1,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 5,
    subject: [2],
  },
  {
    id: 9,
    name: 'Data Structures',
    image: it2,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 10,
    subject: [2],
  },
  {
    id: 10,
    name: 'DBMS',
    image: it,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 8,
    subject: [2],
  },
  {
    id: 11,
    name: 'Staticstics',
    image: maths2,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 7,
    subject: [3],
  },
  {
    id: 12,
    name: 'Probability',
    image: maths1,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 8,
    subject: [3],
  },
  {
    id: 13,
    name: 'Integration',
    image: maths,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 8,
    subject: [3],
  },
  {
    id: 14,
    name: 'Differentiation',
    image: maths3,
    title: "Let's Start to Learn Reading Lessons...",
    numberOfQuizes: 8,
    subject: [3],
  },
];

export default {
  levels,
  subjects,
  areas,
};
