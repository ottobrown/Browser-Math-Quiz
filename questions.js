function solveforx() {
    let addorsub
    let x = rng()
    let coeffx = rng()
    if (coeffx == 0) {solveforx()} 
    let add = rng()
    let answer = (coeffx * x) + add
    correctAnswer = x
    if (add <= 0) {addorsub = '-'}
    else {addorsub = '+'}
    document.getElementById("question").innerHTML = coeffx + 'x' + addorsub + Math.abs(add) + '=' + answer + '  x='
}

function basicmath() {
    let num0 = rng()
    let num1 = rng() 
        let chosenop = Math.floor(Math.random() * 4)
        if (operators[chosenop] === 1) {
            if (chosenop == 0) {correctAnswer = num0 * num1; document.getElementById("question").innerHTML = num0 + 'x' + num1 + ' = ' }
            if (chosenop == 1) {let num2 = num0 * num1; correctAnswer = num0; document.getElementById("question").innerHTML = num2 + '÷' + num1 + ' = ' }
            if (chosenop == 2) {correctAnswer = num0 + num1; document.getElementById("question").innerHTML = num0 + '+' + num1 + ' = ' }
            if (chosenop == 3) {let num2 = num0 + num1; correctAnswer = num0; document.getElementById("question").innerHTML = num2 + '-' + num1 + ' = ' }
        }
        else {basicmath()}
    }