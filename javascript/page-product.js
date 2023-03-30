"use strict";

// выбор цвета

const white = document.getElementById("white");
const red = document.getElementById("red");
const pink = document.getElementById("pink");
const black = document.getElementById("black");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const colorHeader = document.getElementById("colorHeader");
const imgOne = document.getElementById("imgOne");
const imgTwo = document.getElementById("imgTwo");
const imgThree = document.getElementById("imgThree");
const imgFour = document.getElementById("imgFour");
const imgFive = document.getElementById("imgFive");


// выбран белый
white.addEventListener("click", (e) => {
  e.preventDefault();

  white.classList.toggle("selectedColor");

  if (white.classList.contains("selectedColor")) {
    colorHeader.innerHTML = "Цвет товара: Белый";
    imgOne.setAttribute('src', 'files/img/white-1.jpg');
    imgTwo.setAttribute('src', 'files/img/white-2.jpg');
    imgThree.setAttribute('src', 'files/img/white-3.jpg');
    imgFour.setAttribute('src', 'files/img/white-4.jpg');
    imgFive.setAttribute('src', 'files/img/white-5.jpg');
  }

  if (
    red.classList.contains("selectedColor") ||
    pink.classList.contains("selectedColor") ||
    blue.classList.contains("selectedColor") ||
    black.classList.contains("selectedColor") ||
    green.classList.contains("selectedColor")
  ) {
    red.classList.remove("selectedColor");
    pink.classList.remove("selectedColor");
    black.classList.remove("selectedColor");
    blue.classList.remove("selectedColor");
    green.classList.remove("selectedColor");
  }
});

// выбран красный

red.addEventListener("click", (e) => {
  e.preventDefault();

  red.classList.toggle("selectedColor");

  if (red.classList.contains("selectedColor")) {
    colorHeader.innerHTML = "Цвет товара: Красный";
    imgOne.setAttribute('src', 'files/img/red-1.jpg');
    imgTwo.setAttribute('src', 'files/img/red-2.jpg');
    imgThree.setAttribute('src', 'files/img/red-3.jpg');
    imgFour.setAttribute('src', 'files/img/red-4.jpg');
    imgFive.setAttribute('src', 'files/img/red-5.jpg');
  }

  if (
    white.classList.contains("selectedColor") ||
    pink.classList.contains("selectedColor") ||
    blue.classList.contains("selectedColor") ||
    black.classList.contains("selectedColor") ||
    green.classList.contains("selectedColor")
  ) {
    white.classList.remove("selectedColor");
    pink.classList.remove("selectedColor");
    black.classList.remove("selectedColor");
    blue.classList.remove("selectedColor");
    green.classList.remove("selectedColor");
  }
});

// выбран розовый

pink.addEventListener("click", (e) => {
  e.preventDefault();

  pink.classList.toggle("selectedColor");

  if (pink.classList.contains("selectedColor")) {
    colorHeader.innerHTML = "Цвет товара: Розовый";
    imgOne.setAttribute('src', 'files/img/pink-1.jpg');
    imgTwo.setAttribute('src', 'files/img/pink-2.jpg');
    imgThree.setAttribute('src', 'files/img/pink-3.jpg');
    imgFour.setAttribute('src', 'files/img/pink-4.jpg');
    imgFive.setAttribute('src', 'files/img/pink-5.jpg');
  }

  if (
    red.classList.contains("selectedColor") ||
    white.classList.contains("selectedColor") ||
    blue.classList.contains("selectedColor") ||
    black.classList.contains("selectedColor") ||
    green.classList.contains("selectedColor")
  ) {
    red.classList.remove("selectedColor");
    white.classList.remove("selectedColor");
    black.classList.remove("selectedColor");
    blue.classList.remove("selectedColor");
    green.classList.remove("selectedColor");
  }
});

// выбран черный

black.addEventListener("click", (e) => {
  e.preventDefault();

  black.classList.toggle("selectedColor");

  if (black.classList.contains("selectedColor")) {
    colorHeader.innerHTML = "Цвет товара: Черный";
    imgOne.setAttribute('src', 'files/img/black-1.jpg');
    imgTwo.setAttribute('src', 'files/img/black-2.jpg');
    imgThree.setAttribute('src', 'files/img/black-3.jpg');
    imgFour.setAttribute('src', 'files/img/black-4.jpg');
    imgFive.setAttribute('src', 'files/img/black-5.jpg');
    
  }

  if (
    red.classList.contains("selectedColor") ||
    pink.classList.contains("selectedColor") ||
    blue.classList.contains("selectedColor") ||
    white.classList.contains("selectedColor") ||
    green.classList.contains("selectedColor")
  ) {
    red.classList.remove("selectedColor");
    pink.classList.remove("selectedColor");
    white.classList.remove("selectedColor");
    blue.classList.remove("selectedColor");
    green.classList.remove("selectedColor");
  }
});

// выбран синий

blue.addEventListener("click", (e) => {
  e.preventDefault();

  blue.classList.toggle("selectedColor");

  if (blue.classList.contains("selectedColor")) {
    colorHeader.innerHTML = "Цвет товара: Синий";
    imgOne.setAttribute('src', 'files/img/image-1.webp');
    imgTwo.setAttribute('src', 'files/img/image-2.webp');
    imgThree.setAttribute('src', 'files/img/image-3.webp');
    imgFour.setAttribute('src', 'files/img/image-4.webp');
    imgFive.setAttribute('src', 'files/img/image-5.webp');
  }

  if (
    red.classList.contains("selectedColor") ||
    pink.classList.contains("selectedColor") ||
    white.classList.contains("selectedColor") ||
    black.classList.contains("selectedColor") ||
    green.classList.contains("selectedColor")
  ) {
    red.classList.remove("selectedColor");
    pink.classList.remove("selectedColor");
    black.classList.remove("selectedColor");
    white.classList.remove("selectedColor");
    green.classList.remove("selectedColor");
  }
});

// выбран зеленый

green.addEventListener("click", (e) => {
  e.preventDefault();

  green.classList.toggle("selectedColor");

  if (green.classList.contains("selectedColor")) {
    colorHeader.innerHTML = "Цвет товара: Зеленый";
    imgOne.setAttribute('src', 'files/img/green-1.jpg');
    imgTwo.setAttribute('src', 'files/img/green-2.jpg');
    imgThree.setAttribute('src', 'files/img/green-3.jpg');
    imgFour.setAttribute('src', 'files/img/green-4.jpg');
    imgFive.setAttribute('src', 'files/img/green-5.jpg');
  }

  if (
    red.classList.contains("selectedColor") ||
    pink.classList.contains("selectedColor") ||
    blue.classList.contains("selectedColor") ||
    black.classList.contains("selectedColor") ||
    white.classList.contains("selectedColor")
  ) {
    red.classList.remove("selectedColor");
    pink.classList.remove("selectedColor");
    black.classList.remove("selectedColor");
    blue.classList.remove("selectedColor");
    white.classList.remove("selectedColor");
  }
});


// Выбор конфигурации памяти

const config128 = document.getElementById("128");
const config256 = document.getElementById("256");
const config512 = document.getElementById("512");
const configHeader = document.getElementById("configHeader");

config128.addEventListener("click", (e) => {
  e.preventDefault();

  config128.classList.toggle("selected");

  if (config128.classList.contains("selected")) {
    configHeader.innerHTML = "Конфигурация памяти: 128 ГБ";
  }
  if (
    config256.classList.contains("selected") ||
    config512.classList.contains("selected")
  ) {
    config256.classList.remove("selected");
    config512.classList.remove("selected");
  }
});

config256.addEventListener("click", (e) => {
  e.preventDefault();

  config256.classList.toggle("selected");

  if (config256.classList.contains("selected")) {
    configHeader.innerHTML = "Конфигурация памяти: 256 ГБ";
  }
 
  if (
    config128.classList.contains("selected") ||
    config512.classList.contains("selected")
  ) {
    config128.classList.remove("selected");
    config512.classList.remove("selected");
  }
});

config512.addEventListener("click", (e) => {
  e.preventDefault();

  config512.classList.toggle("selected");

  if (config512.classList.contains("selected")) {
    configHeader.innerHTML = "Конфигурация памяти: 512 ГБ";
  }

  if (
    config256.classList.contains("selected") ||
    config128.classList.contains("selected")
  ) {
    config256.classList.remove("selected");
    config128.classList.remove("selected");
  }
});

// Корзина и добавление в корзину

const addToCartBtn = document.getElementById("sidebar-button-buy");

const headerCount = document.querySelector(".header__cart-count");

const cartCount = document.getElementById("header-count");

cartCount.classList.add("header-count__first-visit");

localStorage.getItem("headerCount");

if (localStorage.getItem("headerCount") === "1") {
  headerCount.innerHTML = localStorage.getItem("headerCount");

  addToCartBtn.innerHTML = "Товар уже в корзине";
  addToCartBtn.style.background = "#888888";

  document
    .getElementById("header-count")
    .classList.remove("header-count__first-visit");
}

addToCartBtn.addEventListener("click", (event) => {
  event.preventDefault();

  if (headerCount.innerHTML === localStorage.getItem("headerCount")) {
    headerCount.innerHTML--;
    addToCartBtn.innerHTML = "Добавить в корзину";
    addToCartBtn.style.background = "";

    localStorage.removeItem("headerCount", headerCount.innerHTML);
  } else {
    headerCount.innerHTML++;

    document
      .getElementById("header-count")
      .classList.remove("header-count__first-visit");
    addToCartBtn.innerHTML = "Товар уже в корзине";
    addToCartBtn.style.background = "#888888";

    localStorage.setItem("headerCount", headerCount.innerHTML);
  }
});

// Форма добавления отзыва

const form = document.querySelector(".review-form");

const formName = document.querySelector(".review-form__name");
const formNameError = document.getElementById("review-form-name-error");

const formRaiting = document.querySelector(".review-form__raiting");
const formRaitingError = document.getElementById("review-form-raiting-error");

const formText = document.querySelector(".review-form__text");

let nameErrorStr = "";
let raitingErrorStr = "";

formName.value = localStorage.getItem("formName");
formName.oninput = () => {
  localStorage.setItem("formName", formName.value);
};

formRaiting.value = localStorage.getItem("formRaiting");
formRaiting.oninput = () => {
  localStorage.setItem("formRaiting", formRaiting.value);
};

formText.value = localStorage.getItem("formText");
formText.oninput = () => {
  localStorage.setItem("formText", formText.value);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formName.value) {
    nameErrorStr = "Поле не заполнено";
  } else if (formName.value.length < 2) {
    nameErrorStr = "Имя не может быть короче 2-х символов";
  } else {
    nameErrorStr = "";
    console.log("Имя и Фамилия: ", formName.value);
  }

  if (!formRaiting.value) {
    raitingErrorStr = "Оценка должна быть от 1 до 5";
  } else if (!formRaiting.value.match(/^\d+$/)) {
    raitingErrorStr = "Вы ввели не то число. Оценка должна быть от 1 до 5";
  } else if (!formRaiting.value.match(/^[1-5]$/)) {
    raitingErrorStr = "Оценка должна быть от 1 до 5";
  } else {
    raitingErrorStr = "";
    console.log("Оценка: ", formRaiting.value);
  }

  if (nameErrorStr) {
    formNameError.innerHTML = nameErrorStr;
    formName.style.border = "1px solid #f36223";
    formNameError.classList.add("review-form__error-active");
  } else {
    formNameError.innerHTML = "";
    formName.style.border = "";
    formNameError.classList.remove("review-form__error-active");
    localStorage.removeItem("formName");
    formName.value = "";
  }

  if (raitingErrorStr) {
    formRaitingError.innerHTML = raitingErrorStr;
    formRaiting.style.border = "1px solid #f36223";
    formRaitingError.classList.add("review-form__error-active");
  } else {
    formRaitingError.innerHTML = "";
    formRaiting.style.border = "";
    formRaitingError.classList.remove("review-form__error-active");
    localStorage.removeItem("formRaiting");
    formRaiting.value = "";
  }

  if (raitingErrorStr === "" && formNameError.innerHTML === "") {
    localStorage.removeItem("formText");
    formText.value = "";
  }
});
