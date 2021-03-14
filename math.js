document.addEventListener("keydown", fetchAnswer)
//document.getElementById("negativeCheckbox").checked = false
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
    if (operators == [0, 0, 0, 0]) {document.getElementById("question").innerHTML = 'question failed to generate'}
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
    if (rng() % 2 == 0) {solveforx()}
    else {basicmath()}
    //add a way to determine which function to call
}

generateQuestion()