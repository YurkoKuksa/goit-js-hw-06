
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const namesElements = document.querySelector('#ingredients')





const markup = ingredients.map(el => {
  const listItems = document.createElement(`li`)
  listItems.classList.add("item")
  listItems.textContent = el
  
// listItems.style.color='red'

  return listItems
})



namesElements.append(...markup)

 



