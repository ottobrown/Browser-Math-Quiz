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