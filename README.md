<h1>JS Docs</h1>
<b>Js (ECMAScript)</b> - объектно-ориентированный язык с функциями первого класса
<br>
<br>

<h3>Вопросы</h2>
    <ol>
        <li>
            <h4>Переменные </h4>
                 <ol>
                    <li>Какие существуют?</li>
                    <li>В чем их отличие?</li>
                    <li>Где какие применять?</li>
                    <li>Нейминг переменных?</li>
                 </ol>
        </li>
        <li>
            <h4>Типы данных </h4>
                <ol>
                 <li>Сколько их?</li>
                 <li>Как называются?</li>
                 <li>Какие из них примитивные?</li>
                 <li>Объекты-обертки для примитивов?</li>
                 <li>Чем отличаются непримитивные?</li>
                 <li>Преобразование(приведение) типов данных?
                    <ol>
                        <li>HINT'ы объекта</li>
                    </ol>
                 </li>
                </ol>
        </li>
        <li>
            <h4>Операторы </h4>
                <ol>
                   <li>Какие есть (логические и арифметические)?</li>
                   <li>Чем отличаются декремент от инкремента?</li>
                </ol>
        </li>
        <li>
            <h4>Циклы</h4>
                <ol>
                   <li>Какие есть?</li>
                   <li>Возможные синтаксические конструкции?</li>
                   <li>continue & break ?</li>
                </ol>
        </li>
        <li>
            <h4>Функции </h4>
                <ol>
                   <li>Отличия и сходства Expression, Declaration, Arrow, new Function?</li>
                   <li>Все о return?</li>
                   <li>Параметры по умолчанию?</li>
                   <li>Декомпозиция пропсов?</li>
                   <li>Конструкторы и new?</li>
                   <li>new.target?</li>
                </ol>
        </li>
        <li>
            <h4>Объекты </h4>
                <ol>
                   <li>Как можно создать?</li>
                   <li>Если хочется создать свойство с 2-мя словами: "длина хобота" , что делать?</li>
                   <li>Как проверить существование свойства? (Все варианты)</li>
                   <li>Зарезервированные слова?</li>
                   <li>Порядок свойств в объекте?</li>
                   <li>Копирование по ссылке?</li>
                   <li>Копирование объектов? (Все варианты)</li>
                   <li>Глубокое клонирование?</li>
                   <li>Итерируемые объекты (Symbol.iterator)?</li>
                   <li>Псевдомассивы?</li>
                   <li>Object.entries/values/keys/fromEntries?</li>
                   <li>?</li>
                </ol>
        </li>
        <li>
            <h4>Сборка мусора </h4>
                <ol>
                   <li>Что это?</li>
                   <li>Принцип достижимости?</li>
                   <li>Алгоритм сборки мусора mark-and-sweep?</li>
                </ol>
        </li>
        <li>
            <h4>Symbol</h4>
                <ol>
                   <li>Что это?</li>
                   <li>Зачем нужны?</li>
                   <li>Преобразование в другие типы?</li>
                   <li>Перебор свойств?</li>
                   <li>Копирование объектов, содержащие Symbol поля?</li>
                   <li>Глобальные символы?</li>
                </ol>
        </li>
        <li>
            <h4>this </h4>
                <ol>
                   <li>Reference type?</li>
                   <li>Стрелочные функции?</li>
                   <li>?</li>
                </ol>
        </li>
        <li>
            <h4>Число </h4>
                <ol>
                   <li>Краткое представление больших чисел?</li>
                   <li>Округление?</li>
                   <li>Внутреннее представление?</li>
                   <li>Перечисли все методы</li>
                </ol>
        </li>
        <li>
            <h4>Строка </h4>
                <ol>
                   <li>Трюк с indexOf и побитовым НЕ ?</li>
                   <li>Перечисли все методы</li>
                   <li>Symbol.iterator?</li>
                   <li>Array.from?</li>
                   <li>?</li>
                </ol>
        </li>
        <li>
            <h4>Массивы </h4>
                <ol>
                   <li>Методы массива и их "О Большое"?</li>
                   <li>Внутренняя оптимизация массива?</li>
                   <li>Отличие for..in от for..of?</li>
                   <li>length?</li>
                   <li>toString?</li>
                   <li>Проверка на массив?</li>
                   <li>thisArg?</li>
                   <li>Array.from?</li>
                </ol>
        </li>
        <li>
            <h4>Map </h4>
                <ol>
                   <li>Отличие от объекта?</li>
                   <li>Методы?</li>
                   <li>Хранение ключей?</li>
                   <li>Порядок вставки и чтения элементов?</li>
                   <li>объект <-> Map (преобразование)?</li>
                   <li>WeakMap?</li>
                </ol>
        </li>
        <li>
            <h4>Set </h4>
                <ol>
                    <li>Отличие от объекта?</li>
                   <li>Методы?</li>
                   <li>WeakSet?</li>
                </ol>
        </li>
        <li>
            <h4>Деструкруризация </h4>
                <ol>
                   <li>В массиве?</li>
                   <li>В объекте?</li>
                   <li>В пропсах?</li>
                   <li>В пропсах если не передан пропс?</li>
                </ol>
        </li>
        <li>
            <h4>Date </h4>
                <ol>
                   <li>timestamp?</li>
                </ol>
        </li>
        <li>
            <h4>Event loop </h4>
                <ol> 
                   <li>Что такое:
                     <ul>
                        <li>call stack</li>
                        <li>event loop</li>
                        <li>callback queue(task queue)</li>
                        <li>heap</li>
                        <li>runtime</li>
                        <li>concurrency</li>
                        <li>render queue</li>
                        <li>microtasks</li>
                     </ul>
                   </li>
                   <li>?</li>
                </ol>
        </li>
        <li>
            <h4>Race conditions </h4>
                <ol>
                   <li>Что это?</li>
                </ol>
        </li>
    </ol>

-------
<h3>Конспект</h3>

<h4>Event loop (#11)</h4>
    <ol>
       <li>Call stack - структура данных которая хранит инфу о том где мы сейчас в программе находимся</li>
       <li>Размер Call stack 2^14 (16384). После переполнения очищается</li>
       <li>Первая функция call stack - main() и она анонимная</li>
       <li>WebAPI(C++API для бекенд) - по сути потоки</li>
       <li>Когда какой-то WebAPI заканчивает работу, он помещает callback в callback queue</li>
       <li>Если call stack пуст, то event loop добавляет в него очередную задачу из task queue</li>
       <li>setTimeout(cb, 0) - здесь ноль не равен нулю, а 4.7 миллисекундам</li>
       <li></li>
    </ol>
<br>

<h4>Render queue</h4>
    <ol>
       <li>Алгоритм
          <ol>
            <li>requestAnimationFrame (safari - пидорас и ставит rAF последним)</li>
            <li>Style calculation</li>
            <li>Layout calculation</li>
            <li>Block painting (отрисовка пикселей)</li>
          </ol>
       </li>
    </ol>
<br>

<h4>Race conditions</h4>
    <ol>
       <li>Когда JS изменяет порядок вызова функций</li>
    </ol>
<br>

-------
<h3>Алгоритмы</h3>

<h4>Рандомизация</h4>
    <ol>
       <li>Фишера-Йетса</li>
    </ol>
<br>
<h4>Множества</h4>
    <ol>
       <li>Число сочетаний</li>
    </ol>
<br>
