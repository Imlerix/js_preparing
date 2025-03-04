import React, { useState, useEffect, memo, useCallback, useMemo } from "react";
/*
GET https://swapi.dev/api/people?search=skywalker&page=1
{
  next: string | null                           // url
  results: Array({ name: string, url: string }) // max length 10, unique url
}
 
Создать приложение, с помощью которого можно искать по списку героев.
 
Требования:
 * Одно поле для ввода поискового запроса, запрашивать данные по вводу текста
 * После получения ответа вывести список полученных сущностей (только name)
 * Нужно запрашивать данные только когда юзер перестаёт печатать
 * Вынести запрос в кастомный хук с добавлением пагинации
*/
 
function getPeople(search, page = 1, options = {}) {
  return fetch(
    `https://swapi.dev/api/people?search=${search}&page=${page}`,
    options
  )
    .then((res) => res.json())
    .then((data) => data)
    .catch(console.error);
}
 
const Hero = memo(({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
});
 
const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      callback(...args);
    }, delay);
  };
};
 
const usePeopleQuery = (search) => {
  const [data, setData] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [page, setPage] = useState(1);
 
  const fetchMore = useCallback(() => {
    setPage((prevState) => (prevState += 1));
  }, []);
 
  useEffect(() => {
    const getHeroes = async () => {
      if (search) {
        const { results, next } = await getPeople(search, page);
        setData((prevState) => [...prevState, ...results]);
        setHasNextPage(Boolean(next));
      }
    };
 
    getHeroes();
  }, [search, page]);
 
  useEffect(() => {
    setData([]);
    setPage(1);
    setHasNextPage(false);
  }, [search]);
 
  return { data, fetchMore, hasNextPage };
};
 
export function App() {
  const [search, setSeach] = useState();
  const { data, fetchMore, hasNextPage } = usePeopleQuery(search);
  const onChangeInput = useCallback((e) => {
    setSeach(e.target.value);
  }, []);
 
  const debounceChangeInput = useMemo(() => debounce(onChangeInput, 500), [
    onChangeInput
  ]);
 
  return (
    <div>
      <h1>Heroes</h1>
      <input type="text" onChange={debounceChangeInput} name="search" />
      {data.map(({ url, name }) => (
        <Hero key={url} name={name} />
      ))}
      <div>
        <button disabled={!hasNextPage} onClick={fetchMore}>
          Fetch more
        </button>
      </div>
    </div>
  );
}