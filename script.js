const questions = [
    {//1
        type: 'image',
        constraint: 'Mental_Ability',
        imageURL: 'Lock_Key.jpg',
        question: `Hints to Crack This Code :

        a. 482 : One number is correct and well placed.
        b. 416 : One number is correct but wrongly placed.
        c. 738 : Nothing is correct.
        d. 780: One number is correct but wrongly placed.
        e. 204: Two numbers are correct but wrongly placed.
        `,
        answers: [
            { text: "A. 062", correct: true },
            { text: "B. 602", correct: false },
            { text: "C. 042", correct: false },
            { text: "D. 204", correct: false },
        ]
    },
    {//2
        type: 'text',
        question: `In the following sentence, Find out which pair of words can be filled in the blanks in order to make a meaningful sentence.

        A four - year - old girl ______ her life after she was _____ from a 400 ft borewell she had slipped into.
        `,
        answers: [
            { text: "A. Default, Released", correct: false },
            { text: "B. Made, Treated", correct: false },
            { text: "C. Maintained, Sustained", correct: false },
            { text: "D. Lost, Rescued", correct: true },
        ]
    },
    {//3
        type: 'text',
        question: "Which Indian cricketer launched his own sports brand, DNINE Sports, on September 19, 2023?",
        answers: [
            { text: "A. Deepak Chahar", correct: true },
            { text: "B. Jasprit Bumrah", correct: false },
            { text: "C. Rohit Sharma", correct: false },
            { text: "D. Virat Kohli", correct: false },
        ]
    },
    {//4   
        type: 'image',
        constraint: ['Mental_Ability'],
        imageURL: 'Box_Puzzle.jpg',
        question: "Find the value of X ? ",
        answers: [
            { text: "A. 2", correct: false },
            { text: "B. 9", correct: true },
            { text: "C. 11", correct: false },
            { text: "D. 12", correct: false },
        ]
    },
    {//5
        type: 'text',
        constraint: ['Mental_Ability'],
        question: "The time in the clock is 12:35 then its mirror image will be",
        answers: [
            { text: "A. 12:25", correct: false },
            { text: "B. 11:35", correct: false },
            { text: "C. 10:55", correct: false },
            { text: "D. 11:25", correct: true },
        ]
    },
    {//6
        type: 'text',
        question: "Karma is a folk dance of which tribe ?",
        answers: [
            { text: "A. Tharu", correct: false },
            { text: "B. Sahariya", correct: false },
            { text: "C. Kharwar", correct: true },
            { text: "D. Baiga", correct: false },
        ]
    },
    {//7
        type: 'image',
        imageURL: 'Leaf_Puzzle.jpg',
        question: "Find out from amongst the four alternatives as to how the pattern would appear when the transparent sheet is folded at the dotted line.",
        answers: [
            { text: "A. 1", correct: false },
            { text: "B. 2", correct: false },
            { text: "C. 3", correct: false },
            { text: "D. 4", correct: true },
        ]
    },
     {//8
        type: 'image_type',
        imageURL: 'Statue_Of_Unity.jpg',
        question: `Find out from amongst the four alternatives as to how the pattern would appear when the transparent sheet is folded at the dotted line.
        
        Disclaimer : Write only the name of the river. eg: Ganga and not Ganga River
        `,
        answer: "Narmada",
    },
    {//9
        type: 'image',
        imageURL: 'Java.png',
        question: "What will be the output ?.",
        answers: [
            { text: "A. JavaProgramming", correct: true },
            { text: "B. JavaProgrammingTest", correct: false },
            { text: "C. JavaTest", correct: false },
            { text: "D. ProgrammingTest", correct: false },
        ]
    },
    {//10
        type: 'text',
        question: "The comprehension which tells about journalism in question number : 6 , there is a question related to it, What does the phrase \"amounts to a row of beans\" mean :",
        answers: [
            { text: "A. Fluff pieces are decorated to look as consequential as hard news", correct: false },
            { text: "B. The news selected is trivial", correct: true },
            { text: "C. The news should travel the wires no farther", correct: false },
            { text: "D. It is ought to be overlooked ", correct: false },
        ]
    },
    {//11
        type: 'text',
        question: "The company which offered opportunities to small businesses by lowering the entry barriers to leverage e-commerce is",
        answers: [
            { text: "A. Flipkart ", correct: false },
            { text: "B. Tata Consultancy Services ", correct: false },
            { text: "C. Amazon", correct: true },
            { text: "D. Larsen & Toubro", correct: false },
        ]
    },
     {//12
        type: 'text',
        question: `The following questions are based on the information given below:

        1. A cuboid shaped wooden block has 6 cm length, 4 cm breadth and 1 cm height.
        2. Two faces measuring 4 cm x 1 cm are coloured in black.
        3. Two faces measuring 6 cm x 1 cm are coloured in red.
        4. Two faces measuring 6 cm x 4 cm are coloured in green.
        5. The block is divided into 6 equal cubes of side 1 cm (from 6 cm side), 4 equal cubes of side 1 cm(from 4 cm side).
        `,
        answers: [
            { text: "A. 4", correct: false },
            { text: "B. 8", correct: false },
            { text: "C. 12", correct: false },
            { text: "D. 16", correct: true},
        ]
    },
     {//13
        type: 'text',
        question: "Name of the documentary which shows the precious bond between an orphaned baby elephant and his indigenous caretakers, Bomman and Bellie, is explored in a documentary that tells their story as they care for the animal.",
        answers: [
            { text: "A. The Element Story", correct: false },
            { text: "B. The Elephant Whispers", correct: true },
            { text: "C. The Story of India", correct: false },
            { text: "D. The World Before her", correct: false},
        ]
    },
    {//14
        type: 'text',
        constraint: ['Mental_Ability'],
        question: `One sunny day in a playground that stretched farther than the eye could see, five brave friends gathered for adventure. Mighty Kumar stood as sturdy as a mountain, 40 meters to the right of quick-witted Ankur, who kept a sharp watch in every direction. Courageous Dev towered tall, 60 meters to the south of Kumar, providing shade from the blazing sun. Agile Nilesh crouched like a tiger just 25 meters to the west of Ankur, ready to spring into action. And wise Pintu watched over them all from 90 meters to the north of Dev, guarding his fellow comrades. Facing north together, the five companions stood united, their bonds strong even across the vast distances separating them in the giant playground.
        
        Which one is in the North-East of the person who is to the left of Kumar?
        `,
        answers: [
            { text: "A. Dev", correct: false },
            { text: "B. Nilesh", correct: false },
            { text: "C. Pintu", correct: true },
            { text: "D. Ankur ", correct: false},
        ]
    },
    {//15
        type: 'image',
        imageURL: 'KCL.png',
        question: "Relation between currents according to KCL is :",
        answers: [
            { text: "A. i1=i2=i3=i4=i5", correct: false },
            { text: "B. i1+i4+i3=i5+i2", correct: false },
            { text: "C. i1-i5=i2-i3-i4", correct: false },
            { text: "D. i1+i5=i2+i3+i4", correct: true },
        ]
    }    
];

const questionElement = document.getElementById("question");
const questionImage = document.getElementById('question-image');
const answerButtons = document.getElementById("answer-buttons");
const answerLabel = document.getElementById("answer-label");
const userAnswer = document.getElementById('user-answer');
const nextButton = document.getElementById("next-btn");
const timerDisplay = document.getElementById("timer");
const questionDisplay = document.getElementById("q_index");
const questionIndexDisplay = document.getElementById("question_index");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 1200;

function startQuiz() {
    currentQuestionIndex = 0;
    let mental_ability = 0;
    score = 0;
    timeLeft = 1200;
    nextButton.innerHTML = "Next";
    timer = setInterval(() => {
        if (timeLeft < 0) {
            clearInterval(timer);
            // Handle quiz time over, e.g., show results or end the quiz
            showScore();
        } else {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
            timeLeft--;
        }
    }, 1000);
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionIndexDisplay.innerHTML = "Question " + questionNo;
    if (currentQuestion.type === 'text') {
        questionImage.style.display = 'none'; // Hide the image
        answerLabel.style.display = 'none';
        userAnswer.style.display = 'none';
        questionElement.innerHTML = currentQuestion.question;
    }
    if (currentQuestion.type === 'image') {
        questionImage.style.display = 'block'; // Show the image
        answerLabel.style.display = 'none';
        userAnswer.style.display = 'none';
        questionElement.innerHTML = currentQuestion.question;
        questionImage.src = currentQuestion.imageURL;
    }
    if (currentQuestion.type === 'image_type') {
        questionImage.style.display = 'block'; // Show the image
        answerLabel.style.display = 'block';
        userAnswer.style.display = 'block';
        userAnswer.value = '';
        questionElement.innerHTML = currentQuestion.question;
        questionImage.src = currentQuestion.imageURL;
    }

    questionDisplay.innerHTML = questionNo + " of " + questions.length + " Questions";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState() {
    nextButton.style.display = "block";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    selectedBtn.classList.add("select");

    if (questions[currentQuestionIndex].type === 'image_type') {
        const userTypedAnswer = userAnswer.value.trim().toLowerCase(); // Get the user's typed answer
        const correctTypedAnswer = questions[currentQuestionIndex].answer.trim().toLowerCase(); // Get the correct typed answer

        if (userTypedAnswer === correctTypedAnswer) {
            score++; // Increase the score for correct typed answers
            if(questions[currentQuestionIndex].constraint === 'Mental_Ability'){
                mental_ability++;
            }
        }
        userAnswer.value = ''; // Clear the input field
    } else {
        if (isCorrect) {
            score++;
            if(questions[currentQuestionIndex].constraint === 'Mental_Ability'){
                mental_ability++;
            }
        }
    }
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    clearInterval(timer);
    questionElement.innerHTML = 'You scored '+score+' out of 15';
    //nextButton.innerHTML = "Show Results";
    questionIndexDisplay.style.display = 'none';
    nextButton.style.display = "block";
    questionImage.style.display = "none";
    questionDisplay.style.display = "none";
}

function handleNextButton() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        if (questions[currentQuestionIndex - 1].type === 'image_type') {
            // Check and score the typed answer for the previous question
            const userTypedAnswer = userAnswer.value.trim().toLowerCase();
            const correctTypedAnswer = questions[currentQuestionIndex - 1].answer.trim().toLowerCase();

            if (userTypedAnswer === correctTypedAnswer) {
                score++; // Increase the score for correct typed answers
            }

            userAnswer.value = ''; // Clear the input field
        }

        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
});

startQuiz();
