// Компонент - функция, которая возвращает какой-то jsx
// Называется так же, как и файл, в котором он расположен, всегда с большой буквы

import React, {useState} from "react";

const Counter = function () {
    const [count, setCount] = useState(0);

    let increment = () => {
        setCount(count + 1); // передаем в эту функцию значение, которое отличкается от начального(тем самым изменяем его)
    }

    let decrement = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )


}

export default Counter;