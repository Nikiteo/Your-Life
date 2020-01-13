// Описание домашнего задания доступно по ссылке
// https://github.com/netology-code/sd-homeworks/tree/new-hw/meet

function calcWeeks(birthday) {
  let today = new Date(); 
  let birthDate = new Date(birthday); 
  let minuteHour = 60;
  let hourDay = 24;
  // Задачи 1 и 2.
  // 1. Создайте переменную, в которой хранится количество минут в часе.
  // 2. Создайте переменную, в которой хранится количество часов в сутках.
  // Пишите код ниже:



  // Задача 3.
  // В коде ниже замените нули в строке ниже на переменную минут и переменную часов:
  livedWeeks = Math.floor((today - birthDate) / 1000 / 60 / minuteHour / hourDay / 7); 

  return livedWeeks; 
}

// calcWeeks — это функция вычисления прожитых недель, в качестве аргумента передаём дату рождения (birthday).
// В ней:
// today — переменная, хранящая сегодняшний день в миллисекундах,
// birthDate — переменная, хранящая дату рождения в миллисекундах.

// Как вычисляется значение livedWeeks (прожитые недели):
// 1. Из сегодняшней даты вычитаем дату рождения. Эти значения в миллисекундах.
// 2. Делим на 1000 чтобы получить секунды.
// 3. Делим на 60 чтобы получить минуты.
// 4. Делим на 60 чтобы получить часы.
// 5. Делим на 24 чтобы получить дни.
// 6. Делим на 7 чтобы получить недели.
// 7. Округляем до целого значения в нижнюю сторону (пример: 24.8 будет округлено до 24).

// Когда значение livedWeeks вычислено, возвращаем его в глобальную область видимости с помощью ключевого слова return.