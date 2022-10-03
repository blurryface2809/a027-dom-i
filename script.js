


const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = "laranja"
const fruta2 = document.getElementById("fruta-2")
fruta2.innerHTML = "limão"
const fruta3 = document.getElementById("fruta-3")
fruta3.innerHTML = "uva"


const funcaoFrutas = () =>{
    const fruta1 = document.getElementById("fruta1")
    const fruta2 = document.getElementById("fruta2")
    const fruta3 = document.getElementById("fruta3")
    console.log(`${fruta1.value}, ${fruta2.value}, ${fruta3.value}`)
    fruta1.value = ""
    fruta2.value = ""
    fruta3.value = ""
}