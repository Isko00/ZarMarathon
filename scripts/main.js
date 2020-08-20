// возвращает колличество букв "а"
function numberOf_A_In(word) {
  let counterOf_A = 0;

  // пробегаясь по слову ищет буквы "а"
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == "а") {
      // увеличивает счетчик
      counterOf_A++;
    }
  }

  // возвращает счетчик
  return counterOf_A;
}

// возвращает строку с большим колличеством букв "а"
function getRow(firstRow, secondRow) {
  let answer = "";

  // сравнивает колличество букв "а"
  if (numberOf_A_In(firstRow) >= numberOf_A_In(secondRow)) {
    answer = firstRow;
  } else {
    answer = secondRow;
  }

  return answer;
}

// возвращает форматированный телефонный номер
function formattedPhone(phone) {
  let answer = "";

  for (let i = 0; i < phone.length; i++) {
    // расставляет значки перед определенными позициями
    if (i === 2) {
      answer += " (";
    } else if (i === 5) {
      answer += ") ";
    } else if (i === 8) {
      answer += "-";
    } else if (i === 10) {
      answer += "-";
    }

    // добавляет циферки
    answer += phone.charAt(i);
  }

  return answer;
}

// решение первой задачи
function firstTask(input) {
  // получаем значение от пользователя, если нет даем условное
  const firstRow = input != undefined ? input : "мама мыла раму";

  // получаем второй ввод слова от пользователя
  input = prompt();
  const secondRow = input != undefined ? input : "собака друг человека";

  // вывод ответа
  alert(getRow(firstRow, secondRow)); // мама мыла раму
}

// решение второй задачи
function secondTask(input) {
  // получаем значение от пользователя, если нет даем условное
  let phone = input != undefined ? input : "+71234567890";

  alert(formattedPhone(phone)); // +7 (123) 456-78-90
}

// распределяет функции взависимости от введенных данных
function taskMaster(temp) {
  // если первый символ "+" и 12 знаков - это телефонный номер
  if (temp.charAt(0) === "+" && temp.length == 12) {
    secondTask(temp);
    // иначе это просто слово
  } else {
    firstTask(temp);
  }
}

let input = prompt();
taskMaster(input);
