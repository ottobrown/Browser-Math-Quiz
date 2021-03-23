document.addEventListener("keydown", fetchAnswer)
//document.getElementById("negativeCheckbox").checked = false
var correctAnswer, operators, rightAnswers, wrongAnswers
operators = [1, 1, 1, 1]
rightAnswers = 0
wrongAnswers = 0

var questions = {
    toggleBasicquestion: true,
    toggleSolvex: true,
}

function updateOperators(swap, myid) {
    // 0 = * | 1 = / | 2 = + | 3 = - |
    let swapbutton = document.getElementById(myid).style.backgroundColor
    if (swapbutton == 'cornflowerblue') {document.getElementById(myid).style.background = "grey"
        operators[swap] = 0}
    else {document.getElementById(myid).style.background = "cornflowerblue"
        operators[swap] = 1}
    if (operators == [0, 0, 0, 0]) {document.getElementById("question").innerHTML = 'question failed to generate'}
    console.log("button pressed")
}

function updateQuesions(myid) {
    let swapbutton = document.getElementById(myid).style.backgroundColor
    if (swapbutton == 'cornflowerblue') {document.getElementById(myid).style.background = "grey"
        questions[myid] = false}
    else {document.getElementById(myid).style.background = "cornflowerblue"
        questions[myid] = true}
    console.log(questions.myid)
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
            wrongAnswers++
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
    // makes questionid be a random name of an object property for both questions and questionFunctions
        var questionid;
        var count = 0;
        for (var prop in questions)
            if (Math.random() < 1/++count) {
               questionid = prop;}
    if (questions[questionid] == true) {questionFunctions[questionid]()} 
    else{generateQuestion()}
    //This causes it to redo questions after marking the answer as correct
}

generateQuestion()