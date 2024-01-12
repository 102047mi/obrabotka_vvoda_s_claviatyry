const phone = document.getElementById('phone');

phone.addEventListener('keydown', function (event) {
    let isDigit = false;
    if (event.key >= 0 && event.key <= 9) {
        isDigit = true;
    }
    if (isDigit == true) {
        console.log('цифра')
    } else {
        console.log('другой символ')
    }
    console.log(event.key);       // keydown- нажатие клавы
})