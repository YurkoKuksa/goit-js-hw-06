
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

/* <form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form> */


const formElement = document.querySelector('.login-form')

formElement.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    const elements = e.target.elements;
    const email = elements.email.value;
    const password = elements.password.value;

    if (email === '' || password === '') {
        return alert('Please, fill in all the fields');
    }
    alert(`Email: ${email}, Password: ${password}`);
     formElement.reset();

//   const login = e.target.elements.login.value;
//   const data = {
//     email,
//     password,
//     login,
//   };

//   console.log(data);
}