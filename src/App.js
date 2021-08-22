import React, {useMemo, useRef, useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JS1123', body: 'Description'},
        {id: 2, title: 'Jadfa', body: 'Descsadfiption'},
        {id: 3, title: 'JS3', body: 'Descrisafion'},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''});

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    // получаем post из дочернего компонента
    const removePost = (post) => { // создаем функцию, которая принимает на вход пост из дочернего компонента и удаляет его, логика --> ниже
        setPosts(posts.filter(p => p.id !== post.id)) // для массива posts через функцию filter мы для каждого элемента сравниваем айдишник
        // с айдишником поста, который придёт в функцию, и если айдишник поста, который мы передали, равен какому-то айдишнику из постов массива,
        // мы его удаляем
    }

    // Для передачи данных из инпута, мы связываем в инпуте его значение value с tittle
    /*const [title, setTitle] = useState('');
    const [body, setBody] = useState('');*/
    // const bodyInputRef = useRef(); // используется, для получения данных из неуправляемого инпута. При помощи этого хука мы можем получить доступ
    // к домэлементу и уже у этого домэлемента забрать value ... Делать это не сильно рекомендуется, но иногда необходимо.


    /* Массив простых элементов преобразовываем в массив реактэлементов при помощи функции мап.
    Она на фоне старого массиво создает новый используя каждый элемент.
    * */
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}/>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS"/>
        </div>
        // запись выше называется условной отрисовкой, благодаря тернарному выражению
    );
}

export default App;
