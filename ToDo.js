import React, { useState } from "react";

const ToDo = () => {

    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);

    const handleClick = () => {
        const arr = [...todos, {id : Date.now(), value : text, isCompleted : false}];
        setTodos(arr);
        setText('');
    }

    const hanldeCompleteToDo = (index) => {
        const allTodos = [...todos];
        allTodos[index].isCompleted = !allTodos[index].isCompleted;
        setTodos(allTodos);
    }

    return (
        <div>
            <input type="text" 
            placeholder="Enter your todo"
            onChange={(e) => setText(e.target.value)}
            value={text}
            />
            <button
            onClick={handleClick}
            >Add</button>
            <ul>
                {
                    todos.map((todo , index) => 
                    <li style={{listStyle: 'none' , textDecoration: todo.isCompleted ? 'line-through' : ''}} key={todo.id}>
                        <input onChange={e => hanldeCompleteToDo(index)} type="checkbox" />
                        <span>{todo.value}</span>
                    </li>
                    )
                }
            </ul>
            
        </div>
    )
}

export default ToDo;
