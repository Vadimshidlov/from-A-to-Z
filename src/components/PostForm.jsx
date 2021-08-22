import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: '', })

    const addNewPost = (e) => {
        e.preventDefault();  // убираем автообновление страницы
            const newPost = {
                ...post, id: Date.now(),
            }
            create(newPost);
        setPost({title: '', body: '', });
    }

    return (
        <form>
            <MyInput
                value={post.title} //привязываем значение инпута к значению title хука  useState( к состоянию )
                onChange={e => setPost({...post, title: e.target.value})} // запускаем обработчик события, колбэк, которы принимает e(event), далее передаем функцию
                // которая изменяет это значение хука, т.е. функцию setTitle и в нее уже передаем код, который забирает значение из ивента через таргет
                type="text"
                placeholder="Название поста"
            />
            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"

            />

            <MyButton onClick={addNewPost}> Создать пост </MyButton>
        </form>
    );
};

export default PostForm;