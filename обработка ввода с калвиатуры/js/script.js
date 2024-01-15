const phone = document.getElementById('phone');
// проверка ввода цифр
phone.addEventListener('keydown', function (event) {
    let isDigit = false;
    let isDash = false;
    let isDush = false;
    if (event.key >= 0 && event.key <= 9) {
        isDigit = true;
    }
    // проверка ввода '-'
    if (event.key == '-') {
        isDash = true;
    }
    // првверка нажатия на клавиши управления курсором или Backspace
    if (event.key == 'Backspace' || event.key == 'ArrowLeft' || event.key == 'ArrowRight') {
        isDush = true;
    }
    // если нажата не цифра, клавиши управления или Backspace то отменить ввод  
    if (!isDigit && !isDash && !isDush) {
        event.preventDefault()
    }

})

//preventDefault - отмена действия по умолчанию