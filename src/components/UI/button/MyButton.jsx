import React from 'react';
import classes from './MyButton.module.css'

// добавление класса через импорт, из модуля сиэсэс, вставляем в className название созданного нами класса(.myBtn),
// через {classes.myBtn} получаем стиль, как св-во объекта

const MyButton = ({children, ...props}) => {
    // т.к. мы будем в кнопку еще передавать различные пропсы, слушатели событий, то мы заберем children, a остальные передадим как есть через ...props
    // в баттон добавляем {...props} чтобы все пропсы улетали туда, которые мы будем передавать
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;