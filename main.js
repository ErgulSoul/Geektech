var rating = prompt('Please, rate our app from 1 to 10')

if (rating > 0 && rating < 5) {
    alert('Мы работаем над улучшением сервиса!')
} else if (rating >= 5 && rating <= 10) {
    alert('Спасибо за высокую оценку!')
} else {
    alert('Ошибка')
}

