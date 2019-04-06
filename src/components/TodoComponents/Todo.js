import React from 'react';
import '../../styles/styles.css';


const Todo = (props) => {
    return (
        <div class='list'>
            <li>{props.todo}</li>
            <button onClick={() => props.delete(props.todo)}>Remove</button>
        </div>
    )
}

// class Todo extends React.Component {
    
//     render() {
//         console.log(this.props);
//         return <li>{this.props.todo}</li>;
//     }
// }

export default Todo;