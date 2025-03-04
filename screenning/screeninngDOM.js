// Реализуйте функцию, которая динамически добавляет новый элемент на страницу по клику с любым текстом

// <body>
// <button id="addElementBtn">Добавить элемент</button>
// <div id="container"></div>
// </body>
// <script>
//    ???
// </script>


// Ответ
{/* <script>
// Функция для добавления нового элемента
function addElement() {
    // Создаём новый div
    const newElement = document.createElement('div');
    // Добавляем текст в новый элемент
    newElement.textContent = 'Это новый элемент!';
    // Добавляем стили для нового элемента
    newElement.style.margin = '10px';
    newElement.style.padding = '10px';
    newElement.style.backgroundColor = '#f0f0f0';
    newElement.style.border = '1px solid #ccc';

    // Находим контейнер, куда будем добавлять новый элемент
    const container = document.getElementById('container');
    // Добавляем новый элемент в контейнер
    container.appendChild(newElement);
}

// Находим кнопку и добавляем обработчик события
const button = document.getElementById('addElementBtn');
button.addEventListener('click', addElement);
</script> */}