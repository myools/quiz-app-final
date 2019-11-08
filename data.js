// quiz score
var score = 0;
// number of incorrect answers
var incorrect = 0;
//  used to access current question by its index value in the questionData array
var questionArrayIndex = 0;
// used to determine state of quiz button if submit or next
var isButtonSubmit = true;
// object to store question data
const questionData = [
    {
        questionNumber: 1,
        question: 'What are the 3 current hero roles in Overwatch?',
        answers: ['Tank, Attack, Support', 'Protection, Damage, Support', 'Tank, Damage, Support', 'Tank, Damage, Healer'],
        correctAnswer: 2,
    },
    
    {
        questionNumber: 2,
        question: 'How many World of Warcraft expansions are there in 2019?',
        answers: [4, 7, 6, 2],
        correctAnswer: 1,
    },

    {
        questionNumber: 3,
        question: 'What year was the game Hearthstone released?',
        answers: [2012, 2015, 2014, 2018],
        correctAnswer: 2,
    },

    {
        questionNumber: 4,
        question: 'In Diablo 3 which class has the ability called "Zombie Charger"?',
        answers: ['Necromancer', 'Witch Doctor', 'Demon Hunter', 'Monk'],
        correctAnswer: 1,
        
    },

    {
        questionNumber: 5,
        question: 'In World of Warcraft Vanilla what is the final raid boss of Naxxramas?',
        answers: ['Ragnaros', 'Prince Melchezaar', "Kel'thuzad", 'Hemit Nesingwary'],
        correctAnswer: 2,
    },

    {
        questionNumber: 6,
        question: 'In Overwatch what is the hero Lucios role?',
        answers: ['Tank', 'Support', 'Damage', 'Tinker'],
        correctAnswer: 1,
    },

    {
        questionNumber: 7,
        question: 'What are the 3 playable races in Starcraft?',
        answers: ['Protoss, Zerg, Terran', 'Protoss, Zerg, Arthas', 'Illidari, Protoss, Zerg', 'Protoss, Stormwind, Terran'],
        correctAnswer: 0,
        
    },

    {
        questionNumber: 8,
        question: 'What is the newest playable class in World of Warcraft?',
        answers: ['Monk', 'Tinker', 'Demon Hunter', 'Necromancer'],
        correctAnswer: 2,
    },

    {
        questionNumber: 9,
        question: 'What year was Warcraft III released?',
        answers: ['2002', '2005', '1999', '2010'],
        correctAnswer: 0,
    },

    {
        questionNumber: 10,
        question: 'What type of animal is Winston in Overwatch?',
        answers: ['Wolf', 'Lion', 'Fox', 'Gorilla'],
        correctAnswer: 3,
    }
]
// used to store html used for start of quiz
const startHtml = [
    {
        header: '<h1>Blizzard Entertainment Game Knowledge Quiz</h1>'
        + '<p id="italic"><i>How well do you know your Blizzard games!</i></p>',
        main: '<button id="start">Start</button>'
    },
]

