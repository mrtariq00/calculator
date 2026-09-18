function calculater(value) {
    var equBox = document.getElementById("equBox")
    var resBox = document.getElementById("resBox")

    if (value == '=') {
        let equ = equBox.innerText.replaceAll("÷","/").replaceAll("×","*")
        resBox.innerText = eval(equ)
    } else if(value == "del") {
        equBox.innerText = equBox.innerText.slice(0,-1)
        resBox.innerText = ""
    } else if(value == "C") {
        equBox.innerText = ''
        resBox.innerText = ""
    } else {
        equBox.innerText += value
        resBox.innerText = ""
    }
}

