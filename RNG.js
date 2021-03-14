function rng() {
    let min, max
    min = parseInt(document.getElementById("min").value)
    max = parseInt(document.getElementById("max").value)
        /* if (document.getElementById("negativeCheckbox").checked = true) {
        let negative = Math.floor(Math.random() * 2)
        if (negative == 1) {return 0 - Math.floor(Math.random() * max++ - min) + min}
    }
else {return Math.floor(Math.random() * max++ - min) + min}
^Maybe make this work in the future^
 */
return Math.floor(Math.random() * (max - min) + min)
}