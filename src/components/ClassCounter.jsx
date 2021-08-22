import React from "react";

class ClassCounter extends React.Component {

    constructor(props) { // создаем конструктор, которое принимает пропсы
        super(props);
        this.state = {  // cоздаем состояние, в классах есть зарезервированый стейт
            count: 0,
        }
        this.increment = this.increment.bind(this); // контекст компоненты теряется и в эти функции его надо забиндить
        this.decrement = this.decrement.bind(this); // контекст компоненты теряется и в эти функции его надо забиндить
    }

    increment() {  // внутри классов функции объявляются как методы, без слово function
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    render() {  // В классовых компонентах необходимо организовать метод рендер, который будет отрисовывать jsx
        // внутри класса обращаемся к элементам через this.
        return (
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
        </div>
        )
    }
}

export default ClassCounter;