// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const input = document.querySelector('#name-input') 

const span = document.querySelector('#name-output') 


function onTargetInput(event) { 
    console.log(event.target.value)
    span.textContent = event.target.value ? event.target.value : "";
}

input.addEventListener('input', onTargetInput)