
const main = document.querySelector('main')
//1. Elements
// 1.1. div Calculator
const calculatorDiv = document.createElement('div')
calculatorDiv.classList.add('calculator')

//1.2. div Display
const displayDiv = document.createElement('div')
displayDiv.classList.add('display')

//1.2.1. div input
const inputDiv = document.createElement('div')
inputDiv.classList.add('input')

//1.2.2. div output
const outputDiv = document.createElement('div')
outputDiv.classList.add('output')

displayDiv.appendChild(inputDiv)
displayDiv.appendChild(outputDiv)

calculatorDiv.appendChild(displayDiv)


//1.2.4. buttons

const buttons =[
    ["C", "()", "%", "÷"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["+/-", "0", ".", "="]
]

buttons.forEach(row =>{
    const buttonRow = document.createElement('div');
    buttonRow.classList.add('button-row')
    row.forEach(value => {
        const button = document.createElement('button');
        button.classList.add('button')
        button.textContent=value
        buttonRow.appendChild(button)
    })
    calculatorDiv.appendChild(buttonRow)
})

main.appendChild(calculatorDiv)

