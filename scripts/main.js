/* Типо как 3 кнопки.
 * В каждой разброс урона
 * от половины макс урона персонажа
 * до макс урона.
 * Но "double" и "triple" это соответственно
 * двойной и тройной макс урон персонажа.
 * Весь азарт в том чтобы во-время выбрать
 * какую ставку сделать, при правильном расчете
 * шансы на победу должны расти,
 * но это чистый случайный разброс,
 * так что никакие расчеты мне
 * постоянно побеждать не помогли))
 * Но!!!
 * Возникла проблема с добавлением функции на клик!
 * При запуске страницы,
 * еще когда курсор от кнопок был далеко,
 * срабатывали хором все 3 функции.
 * Решил методом проб и ошибок,
 * и добавления констант на функции.
 * Не знаю от чего ошибка,
 * и не знаю что именно её решило,
 * но её не стало))
 */

const $btn1 = document.getElementById("btn-kick");
const $btn2 = document.getElementById("btn-double-kick");
const $btn3 = document.getElementById("btn-triple-kick");

const me = {
  name: "Pikachu",
  defaultHP: 100,
  remainingHP: 100,
  maxDamage: 20,
  healthBar: document.getElementById("health-character"),
  progressBar: document.getElementById("progressbar-character"),
};

const enemy = {
  name: "Charmander",
  defaultHP: 100,
  remainingHP: 100,
  maxDamage: 20,
  healthBar: document.getElementById("health-enemy"),
  progressBar: document.getElementById("progressbar-enemy"),
};

function init() {
  console.log("Start game!");

  $btn1.onclick = firstButtonClickType;
  $btn2.addEventListener("click", secondButtonClickType);
  $btn3.addEventListener("click", thirdButtonClickType);
  /* Вот пример объявления с ошибкой!
   * $btn3.addEventListener("click", thirdButtonClickType());
   */
}

const firstButtonClickType = () => {
  //console.log("1");
  attack(me, enemy, 1);
  attack(enemy, me, 1);
};

const secondButtonClickType = () => {
  //console.log("2");
  attack(me, enemy, 2);
  attack(enemy, me, 2);
};

function thirdButtonClickType() {
  console.log("3");
  attack(me, enemy, 3);
  attack(enemy, me, 3);
}

function attack(who, whom, powerCoef) {
  damage(getRandomInt(who.maxDamage * powerCoef), whom);
  changeHP(whom);
}

function getRandomInt(max) {
  let half = max / 2;
  return Math.floor(half + Math.random() * Math.floor(half));
}

function damage(hp, person) {
  if (person.remainingHP < hp) {
    person.remainingHP = 0;
    $btn1.disabled = true;
    $btn2.disabled = true;
    $btn3.disabled = true;
    alert("наш " + person.name + " проиграл");
  } else {
    person.remainingHP -= hp;
  }
}

function changeHP(person) {
  renderHP(person);
  renderProgressBar(person);
}

function renderHP(person) {
  person.healthBar.innerText = person.remainingHP + " / " + person.defaultHP;
}

function renderProgressBar(person) {
  person.progressBar.style.width = person.damageHP + "%";
}

init();
