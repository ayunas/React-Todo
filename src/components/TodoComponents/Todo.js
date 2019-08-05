import React from 'react';
import '../../styles/styles.css';


const Todo = (props) => {
    const { todo } = props;
    return (
        <div className='list'>
            <li>{todo.todo}</li>
            <button onClick={() => props.delete(props.todo)}>Remove</button>
        </div>
    )
}

export default Todo;