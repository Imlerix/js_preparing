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
                    <li>var и свойства глобального объекта?</li>
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
                   <li>Контекст выполнения (execution context).?</li>
                   <li>(...args) остаточные параметры и arguments?</li>
                   <li>Отличия Array.from от оператора spread [...]?</li>
                   <li>() => {} и arguments?</li>
                   <li>(...someprops) –– оператор расширения?</li>
                   <li>immediately-invoked function expressions (IIFE) ?</li>
                   <li>Контекстное имя (.name) ?</li>
                   <li>length ?</li>
                   <li>Named Function Expression (NFE) ?</li>
                   <li>new Function([arg1, arg2, ...argN], functionBody)
                       <ul>
                           <li>Что передавать в body?</li>
                           <li>Что записывается в [[Environment]] для таких ф-й?</li>
                       </ul>
                   </li>
                   <li>Функции-декораторы(обертки)?</li>
                   <li>func.call(context, arg1, arg2, ...)?</li>
                   <li>func.call(context, ...arguments)?</li>
                   <li>func.apply(context, arguments)?</li>
                   <li>«Перенаправление вызова» (call forwarding)?</li>
                   <li>Заимствование метода –– [].join.call(arguments) ?</li>
                   <li>func.bind(context, [arg1], [arg2], ...) ?</li>
                   <li>console.log(f.bind(obj))?</li>
                   <li>Фиксация привязки контекста ?</li>
                </ol>
        </li>
        <li>
            <h4>Замыкания </h4>
                <ol>
                   <li>LexicalEnvironment:
                       <ul>
                           <li>Что это?</li>
                           <li>У чего оно есть?</li>
                           <li>Свойство [[Environment]]?</li>
                           <li>Каково LexicalEnvironment в начале выполнения скрипта?
                                <ol>
                                    <li>для переменных</li>
                                    <li>для FunctionDeclaration</li>
                                </ol>
                           </li>
                           <li>Внешнее и внутреннее?</li>
                           <li>Environment Record?</li>
                           <li>Ссылка на внешнее лексическое окружение? (outer) </li>
                           <li>Ссылка на внешнее окружение у глобального LexicalEnvironment?</li>
                       </ul>
                   </li>
                   <li>Блоки кода и циклы ?</li>
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
                   <li>Как сделать односторонний Связный Список?</li>
                   <li>Как сделать двусторонний Связный Список?</li>
                   <li>Дескриторы:
                       <ul>
                           <li>Какие флаги есть?</li>
                           <li>Как получить?</li>
                           <li>Как изменить?</li>
                           <li>Особенности оверрайтинга встроенных функций?</li>
                           <li>Как работает присваивание с дескрипторами?</li>
                       </ul>
                   </li>
                   <li>Свойства-аксессоры (get, set):
                      <ul>
                          <li>delete?</li>
                          <li>defineProperty?</li>
                          <li>свойства с _?</li>
                      </ul>
                   </li>
                </ol>
        </li>
        <li>
            <h4>Сборка мусора </h4>
                <ol>
                   <li>Что это?</li>
                   <li>Принцип достижимости?</li>
                   <li>Алгоритм сборки мусора mark-and-sweep?</li>
                   <li>В замыканиях?</li>
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
                   <li>В модулях?</li>
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
                   <li>spread operator?</li>
                   <li>"Суррогатная пара" -- смайлик, "красивенькая буковка"?</li>
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
                   <li>Все способы конвертировать псевдомассив в массив (5)? <a>https://habr.com/ru/post/336136/</a></li>
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
                   <li>timestamp для Date.parse?</li>
                   <li>С чего начинается отсчет в getDay() ?</li>
                   <li>Автоисправление даты: что делает JS когда в Date передаешь 32 число месяца?</li>
                   <li>Что такое Бенчмарки?</li>
                </ol>
        </li>
        <li>
            <h4>Формат JSON – JSON-форматированный или сериализованный объект</h4>
                <ol>
                   <li>Краткая история создания?</li>
                   <li>JSON.stringify(value, [replacer, space]) ?</li>
                   <li>replacer:
                        <ul>
                            <li>Что в него можно передавать?</li>
                            <li>Первый вызов функции – что в него передается?</li>
                        </ul>
                   </li>
                   <li>spacer:
                       <ul>
                           <li>Что в него можно передавать?</li>
                           <li>Что передать в replacer, если не хотим фильтровать, а только указать кол-во пробелов?</li>
                       </ul>
                  </li>
                   <li>JSON.parse(str, [reviver])?</li>
                   <li>Какие типы данных поддерживает, а какие пропускает?</li>
                   <li>Циклические ссылки?</li>
                   <li>toJSON?</li>
                   <li>Комментарии?</li>
                </ol>
        </li>
        <li>
            <h4>Интерпритатор </h4>
                <ol>
                   <li>Разогрев перед использованием функций-бенчмарок?</li>
                   <li>Максимальная глубина рекурсии?</li>
                </ol>
        </li>
        <li>
            <h4>Браузер </h4>
                <ol>
                   <li>globalThis?</li>
                   <li>Что такое полифил?</li>
                </ol>
        </li>
        <li>
            <h4>Прототипное наследование </h4>
                <ol>
                   <li>Свойство [[Prototype]]?</li>
                   <li>proto?</li>
                   <li>Чему может быть равен proto?</li>
                   <li>for..in / Object.keys?</li>
                   <li>Производительность поиска унаследованных свойств?</li>
                   <li>Как работает prototype для функций new?</li>
                   <li>F.prototype.constructor и f.constructor ?</li>
                   <li>Как изменить prototype, не удалив наследование от текущей функции?</li>
                   <li>Как клонировать объект вместе с дескриторами?</li>
                </ol>
        </li>
        <li>
            <h4>Классы <i>перечитать!!!</i></h4>
                <ol>
                   <li>Синтаксис?</li>
                   <li>Класс – разновидность функции?</li>
                   <li>Прототипный конструктор?</li>
                   <li>Где находятся методы в классе, по аналогии с функциями?</li>
                   <li>[[FunctionKind]]: "classConstructor" ?</li>
                   <li>Можно ли вызвать без new?</li>
                   <li>Enumerable методов класса?</li>
                   <li>Class Expression?</li>
                   <li>Class в return'e?</li>
                   <li>Геттеры / Сеттеры?</li>
                   <li>Свойства и методы в prototype?</li>
                   <li>Наследование?</li>
                   <li>После extends разрешены любые выражения?</li>
                   <li>Переопределение и вызов родительских методов в дочерних?</li>
                   <li>super и () => {}?</li>
                   <li>Особенность создания классов-потомков и super?</li>
                   <li>Наследующий класс и [[ConstructorKind]]: "derived"?</li>
                   <li>Зацикленное выполнение функции родителя в объекте с --proto-- с вызовом из дочерней?</li>
                   <li>Устройство super, [[HomeObject]]?</li>
                   <li>Привязка метода к объекту из-за [[HomeObject]]?</li>
                   <li>ПМетоды, а не свойства-функции в объекте и [[HomeObject]]?</li>
                   <li>Статические методы?</li>
                   <li>Статические свойства?</li>
                   <li>Чему аналогична статика?</li>
                   <li>Приватные поля # ?</li>
                   <li>Symbol.species ?</li>
                   <li>instanceof ?</li>
                   <li>Symbol.hasInstance ?</li>
                   <li>Symbol.toStringTag ?</li>
                   <li>Object.assign и примеси для классов ?</li>
                </ol>
        </li>
        <li>
            <h4>try..catch</h4>
                <ol>
                   <li>Ошибка парсинга?</li>
                   <li>Асинхронность?</li>
                   <li>Свойства объекта ошибки?</li>
                   <li>Catch без переменной?</li>
                   <li>throw?</li>
                   <li>Проброс ошибки?</li>
                   <li>finally?</li>
                   <li>finally и return?</li>
                </ol>
        </li>
        <li>
            <h4>Promise, async/await</h4>
                <ol>
                   <li>Что это?</li>
                   <li>Внутренние свойства?</li>
                   <li>Можно ли изменять состояние промиса дважды и более?</li>
                   <li>Что рекомендуется класть в reject()?</li>
                   <li>then, catch, finally(отличия от остальных)?</li>
                   <li>Thenable объекты/классы?</li>
                   <li>Невидимый try..catch вокруг промиса?</li>
                   <li>Какие ошибки обрабатывает catch?</li>
                   <li>Методы Promise?</li>
                   <li>Полифил для allSettled?</li>
                   <li>Микрозадачи?</li>
                   <li>Макрозадачи?</li>
                   <li>Async / Await?
                        <ol>
                            <li>что возвращает ф-я с async?</li>
                            <li>что делает await с интерпретатором?</li>
                            <li>Обработка ошибок?</li>
                            <li>await c for..of?</li>
                        </ol>
                   </li>
                </ol>
        </li>
        <li>
            <h4>Генераторы</h4>
                <ol>
                   <li>Что это?</li>
                   <li>Синтаксис?</li>
                   <li>Зачем?</li>
                </ol>
        </li>
        <li>
            <h4>Импорт/экспорт</h4>
                <ol>
                   <li>Что это?</li>
                   <li>Синтаксис?</li>
                   <li>Зачем?</li>
                   <li>Исполнение скрипта модуля?</li>
                   <li>This?</li>
                   <li>Точка с запятой после класса/функции?</li>
                </ol>
        </li>
        <li>
        <h4>MutationObserver</h4>
            <ol>
               <li>Что это?</li>
               <li>Синтаксис?</li>
               <li>Зачем?</li>
               <li>disconnect?</li>
            </ol>
        </li>
        <li>
        <h4>Proxy & Reflect</h4>
            <ol>
               <li>Что это Proxy?</li>
               <li>Синтаксис Proxy?</li>
               <li>Зачем?</li>
               <li>Ловушка get(target, prop, receiver)?</li>
               <li>Ловушка set(target, prop, value, receiver)?</li>
               <li>Инварианты для ловушек?</li>
               <li>Список ловушек
                    <table>
                        <tr>
                            <td>[[Get]]</td>
                            <td>get</td>
                            <td>чтение свойства</td>
                        </tr>
                        <tr>
                            <td>[[Set]]</td>
                            <td>set</td>
                            <td>запись свойства</td>
                        </tr>
                        <tr>
                            <td>[[HasProperty]]</td>
                            <td>has</td>
                            <td>оператор in</td>
                        </tr>
                        <tr>
                            <td>[[Delete]]</td>
                            <td>deleteProperty</td>
                            <td>оператор delete</td>
                        </tr>
                        <tr>
                            <td>[[Call]]</td>
                            <td>apply</td>
                            <td>вызов функции</td>
                        </tr>
                        <tr>
                            <td>[[Construct]]</td>
                            <td>construct</td>
                            <td>оператор new</td>
                        </tr>
                        <tr>
                            <td>[[GetPrototypeOf]]</td>
                            <td>getPrototypeOf</td>
                            <td>Object.getPrototypeOf</td>
                        </tr>
                        <tr>
                            <td>[[SetPrototypeOf]]</td>
                            <td>setPrototypeOf</td>
                            <td>Object.setPrototypeOf</td>
                        </tr>
                        <tr>
                            <td>[[IsExtensible]]</td>
                            <td>isExtensible</td>
                            <td>Object.isExtensible</td>
                        </tr>
                        <tr>
                            <td>[[PreventExtensions]]</td>
                            <td>preventExtensions</td>
                            <td>Object.preventExtensions</td>
                        </tr>
                        <tr>
                            <td>[[DefineOwnProperty]]</td>
                            <td>defineProperty</td>
                            <td>Object.defineProperty, Object.defineProperties</td>
                        </tr>
                        <tr>
                            <td>[[GetOwnProperty]]</td>
                            <td>getOwnPropertyDescriptor</td>
                            <td>Object.getOwnPropertyDescriptor, for..in, Object.keys/values/entries</td>
                        </tr>
                        <tr>
                            <td>[[OwnPropertyKeys]]</td>
                            <td>ownKeys</td>
                            <td>Object.getOwnPropertyNames, Object.getOwnPropertySymbols, for..in, Object.keys/values/entries</td>
                        </tr>
                    </table>   
               </li>
               <li>Reflect + правильный контекст + receiver</li>
               <li>Ограничения: Proxy и внутренние слоты Map, Set, Date, Promise, #field?</li>
               <li>Решение: Reflect.get(...arguments)</li>
               <li>Прокси != оригинальный объект</li>
               <li>Прокси и ===</li>
               <li>let {proxy, revoke} = Proxy.revocable(object, {})</li>
            </ol>
        </li>
        <li>
            <h4>setTimeout | setInterval</h4>
                <ol>
                   <li>setTimeout(func | code, [delay], [arg1], [arg2], ...) ?</li>
                   <li>setInterval(func | code, [delay], [arg1], [arg2], ...) ?</li>
                   <li>timerId и отмена?</li>
                   <li>Что можно передать вместо функции ?</li>
                   <li>Минимальная задержка вложенных таймеров в браузере?</li>
                   <li>По каким причинам таймер может замедлятся?</li>
                </ol>
        </li>
        <li>
            <h4>RegExp</h4>
                <ol>
                   <li>Синтаксис ?</li>
                   <li>Флаги i, g, (m, s, u, y) ?</li>
                   <li>str.match ?</li>
                   <li>str.replace ?</li>
                   <li>result[i], result.length, result.index, result.input ?</li>
                   <li>Что вернется если нет совпадения ?</li>
                   <li>regexp.test(str) ?</li>
                   <li>Символьные классы:
                        <ul>
                            <li>\d</li>
                            <li>\s</li>
                            <li>\w</li>
                            <li>. – если без флага "s", то не видит "\n"</li>
                        </ul>
                   </li>
                   <li>Обратные символьные классы:
                       <ul>
                           <li>\D</li>
                           <li>\S</li>
                           <li>\W - не буквы из латиницы, не знак подчёркивания и не цифра. В частности, 
                           русские буквы принадлежат этому классу.</li>
                       </ul>
                  </li>
                  <li>Юникодные свойства; в каких браузерах не работают пока что?
                      <ul>
                         <li>\p{Letter}</li>
                         <li>\p{Hex_Digit}</li>
                         <li>\p{sc=Cyrillic}</li>
                         <li>\p{Currency_Symbol} или \p{Sc}</li>
                     </ul>
                  </li>
                  <li>Якоря "^" и "$"</li>
                  <li>Якоря в многострочном режиме?</li>
                  <li>Граница слова \b ?</li>
                  <li>Экранированние символа \ ?</li>
                  <li>new RegExp и \ ?</li>
                  <li>Наборы [abc] ?</li>
                  <li>Диапазоны [a-z] ?</li>
                  <li>Исключающие диапазоны [^a-z] ?</li>
                  <li>Квантификаторы +, *, ? и {n} ?</li>
                  <li>Жадный режим(по умолчанию) и Ленивый "?"</li>
                  <li>Скобочная группа</li>
                  <li>Содержимое скобок в match если нет флага "g"</li>
                  <li>Именованные группы</li>
                  <li>Скобочные группы при замене</li>
                  <li>Исключение из запоминания через "?:"</li>
                  <li>Альтернация (или) |</li>
                  <li>Опережающая проверка X(?=Y)</li>
                  <li>Негативная опережающая проверка X(?!Y)</li>
                  <li>Ретроспективная проверка
                    <ul>
                         <li>(?<=Y)X</li>
                         <li>Негативная (?<!Y)X</li>
                     </ul>
                  </li>
                  <li>Поиск на заданной позиции, флаг "y" и regexp.lastIndex</li>
                </ol>
        </li>
        <li>
            <h4>Event loop </h4>
                <ol> 
                   <li>Что такое:
                     <ul>
                        <li>event loop</li>
                        <li>call stack</li>
                        <li>callback queue( macrotask queue)</li>
                        <li>microtask queue</li>
                        <li>heap</li>
                        <li>runtime</li>
                        <li>concurrency</li>
                        <li>render queue</li>
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
        <li>
            <h4>Разное </h4>
                <ol>
                   <li>eval()</li>
                   <li>Мутабельность данных и иммутабельность</li>
                </ol>
        </li>
    </ol>

-------
<h3>Конспект</h3>

<h4>Event loop </h4>
    <ol>
       <li>Call stack - структура данных которая хранит инфу о том где мы сейчас в программе находимся</li>
       <li>Размер Call stack 2^14 (16384). После переполнения очищается</li>
       <li>Первая функция call stack - main() и она анонимная</li>
       <li>WebAPI(C++API для бекенд) - по сути потоки</li>
       <li>Когда какой-то WebAPI заканчивает работу, он помещает callback в callback queue</li>
       <li>Если call stack пуст, то event loop добавляет в него все задачи Microtask queue и одну очередную задачу из macrotask queue</li>
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

<h4>Функции</h4>
    <ol>
       <li>Контекст выполнения (execution context).
          <ul>
            <li>Специальная внутренняя структура данных, которая содержит информацию о вызове функции. 
            Она включает в себя конкретное место в коде, на котором находится интерпретатор, 
            локальные переменные функции, значение this (мы не используем его в данном примере) и прочую служебную информацию.</li>
            <li> Один вызов функции имеет ровно один контекст выполнения, связанный с ним. </li>
            <li>
                Когда функция производит вложенный вызов, происходит следующее:
                <ol>
                    <li>Выполнение текущей функции приостанавливается.</li>
                    <li>Контекст выполнения, связанный с ней, запоминается в специальной 
                    структуре данных – стеке контекстов выполнения.</li>
                    <li>Выполняются вложенные вызовы, для каждого из которых создаётся свой контекст выполнения.</li>
                    <li>После их завершения старый контекст достаётся из стека, и выполнение внешней функции 
                    возобновляется с того места, где она была остановлена.</li>
                </ol>
            </li>             
          </ul>
       </li>
       <li>
            <b>Замыкание</b> – это функция, которая запоминает свои внешние переменные и может получить к ним доступ. 
            В некоторых языках это невозможно, или функция должна быть написана специальным образом, чтобы получилось 
            замыкание. Но, как было описано выше, в JavaScript, все функции изначально являются замыканиями 
            (есть только одно исключение, про которое будет рассказано в Синтаксис "new Function").
            <br>То есть, они автоматически запоминают, где были созданы, с помощью скрытого свойства [[Environment]] 
            и все они могут получить доступ к внешним переменным.
            <br>Когда на собеседовании фронтенд-разработчик получает вопрос: «что такое замыкание?», – правильным 
            ответом будет определение замыкания и объяснения того факта, что все функции в JavaScript являются 
            замыканиями, и, может быть, несколько слов о технических деталях: свойстве [[Environment]] и о том, 
            как работает лексическое окружение.
       </li>
       <li>
           <b>Чистая функция</b> – На фундаментальном уровне, любая функция, которая не изменяет входные данные, 
           не зависит от внешнего состояния (базы данных, DOM или глобальной переменной) и возвращает один и тот 
           же результат для одинаковых входных данных является чистой функцией.
       </li>
    </ol>
<br>

<h4>Race conditions</h4>
    <ol>
       <li>Когда JS изменяет порядок вызова функций</li>
    </ol>
<br>

-------
<h3>Практические функции</h3>

<h4>Декораторы</h4>
    <ol>
       <li>Spy</li>
       <li>Delay</li>
       <li>Debounce</li>
       <li>Throttling</li>
       <li>Carrying (<a>https://learn.javascript.ru/currying-partials</a>)</li>
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
       <li>Решето Эратосфена для простых чисел</li>
    </ol>
<br>

--------

<h3>Принципы программирования</h2>
    <ol>
        <li>
            <h4>SOLID </h4>
                 <ol>
                    <li>S</li>
                    <li>O</li>
                    <li>L</li>
                    <li>I</li>
                    <li>D</li>
                 </ol>
        </li>
        <li>
            <h4>KISS </h4>
        </li>
        <li>
            <h4>DRY </h4>
        </li>
        <li>
            <h4>YAGNI </h4>
        </li>
    </ol>
<br>

--------

<h3>Парадигмы программирования</h2>
    <ol>
        <li>
            <h4>React</h4>
            <ul>
                <li>Container & Presentational components method</li>
                <li>Callback render</li>
            </ul>
        </li>
    </ol>
<br>
