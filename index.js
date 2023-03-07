

let countEl = document.getElementById("countEl")
let saveEl = document.getElementById("saveEl")

let count = 0

 
function increment(){
count += 1
countEl.textContent = count

}

function save(){
	let countStr = count + "- "
	saveEl.textContent += countStr
	countEl.textContent = 0
	count = 0
}


let greetingl = document.getElementById(greeting1)
let name = "karthick"
let greet = "welcome"
greeting1.innerText = name + "   " + greet
