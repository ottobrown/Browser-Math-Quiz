document.addEventListener("keydown", fetchAnswer)
var correctAnswer, operators, rightAnswers, wrongAnswers
operators = [1, 1, 1, 1]
rightAnswers = 0
wrongAnswers = 0

function updateOperators(swap, myid) {
    // 0 = * | 1 = / | 2 = + | 3 = - |
    let swapbutton = document.getElementById(myid).style.backgroundColor
    if (swapbutton == 'cornflowerblue') {document.getElementById(myid).style.background = "grey"
        operators[swap] = 0}
    else {document.getElementById(myid).style.background = "cornflowerblue"
        operators[swap] = 1}
    console.log("button pressed")
}


function fetchAnswer(key) {
    // paramater 'key' is for ASCII keycodes
    if (key.keyCode == "13") {
        // keycode 13 is the enter key
        let answer = document.getElementById("answer").value
        // id 'answer' is the answer textbox
        answer = parseInt(answer)
        document.getElementById("answer").value = ''
        if (answer == correctAnswer) {
            console.log("Correct")
            rightAnswers ++
            score()
            generateQuestion()
        }   
        else {
            console.log("Incorrect")
            wrongAnswers ++
            score()
        }
        }
    }

function score() {
    let totalAnswers = rightAnswers + wrongAnswers
    let percent = Math.floor((rightAnswers / totalAnswers) * 100)
    document.getElementById("correctOutOfTotal").innerHTML = rightAnswers + ' out of ' + totalAnswers + '(' + percent + '%)'
}

function generateQuestion() {
    let chosenop = Math.floor(Math.random() * 4)
    if (operators[chosenop] === 1) {
        if (chosenop == 0) {multiply()}
        if (chosenop == 1)  {divide()}
        if (chosenop == 2) {add()}
        if (chosenop == 3) {subtract()}
// 0 = * | 1 = / | 2 = + | 3 = - |
    }
    else {
        generateQuestion()
    }
}

function multiply() {
    let num0 = Math.floor(Math.random() * 12)
    num0 = num0 + 1
    let num1 = Math.floor(Math.random() * 12)
    num1 = num1 + 1 
    correctAnswer = num0 * num1 
    document.getElementById("question").innerHTML = num0 + 'x' + num1 + ' = ' 
}

function divide() {
    let num0 = Math.floor(Math.random() * 12)
    num0 = num0 + 1
    let num1 = Math.floor(Math.random() * 12)
    num1 = num1 + 1
    let num2 = num0 * num1
    correctAnswer = num0  
    document.getElementById("question").innerHTML = num2 + '÷' + num1 + ' = ' 
}

function add() {
    let num0 = Math.floor(Math.random() * 12)
    num0 = num0 + 1
    let num1 = Math.floor(Math.random() * 12)
    num1 = num1 + 1 
    correctAnswer = num0 +  num1 
    document.getElementById("question").innerHTML = num0 + '+' + num1 + ' = ' 
}

function subtract() {
    let num0 = Math.floor(Math.random() * 12)
    num0 = num0 + 1
    let num1 = Math.floor(Math.random() * 12)
    num1 = num1 + 1 
    let num2 = num0 + num1
    correctAnswer = num0 
    document.getElementById("question").innerHTML = num2 + '-' + num1 + ' = ' 
}

function timer() {}

generateQuestion()