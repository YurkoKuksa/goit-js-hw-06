function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBackground = document.querySelector('body');
const colorSpan = document.querySelector('.color');

const buttonChangeColor = document.querySelector('.change-color');
buttonChangeColor.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
  const newColor = getRandomHexColor();
  colorBackground.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}


// const colorBackground = document.querySelector('.change-color')

// const formElement = document.querySelector('.widget');

// formElement.addEventListener('click', onTargetClick);


// function onTargetClick() {
//   colorBackground.style.backgroundColor = getRandomHexColor();
// };

// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>




