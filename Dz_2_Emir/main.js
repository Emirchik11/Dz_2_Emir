console.log('Задание 1')
const arrNumber = [10, 20, 30, 50, 235, 3000]

for (var i = 0; i < arrNumber.length; i++) {
    const arrNumberResult = arrNumber[i].toString()
    if (arrNumberResult[0] === '1'|| arrNumberResult[0] === '2' || arrNumberResult[0] === '5') {
        console.log(arrNumberResult)
    }
}
    console.log("Задание 2")
    console.log("Убывание:")
    for (var i = 20; i >= 0; i--) {
    console.log(i);
    }
    var colors = prompt(" Пиши с большой буквы!! Свет на светофоре:")
    if (colors === "Красный") {
    alert("Стоп");
    }  else if (colors === "Желтый") {
     alert("Готовься");
    }   else if (colors === "Зеленый") {
        alert("Вперед");
    }  else {
        alert("Введи цвет а не фигню");
    }
