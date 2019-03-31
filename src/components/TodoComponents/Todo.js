import React from 'react';

const Todo = (props) => {
    return (
        <div>
            <li>{props.todo}</li>
            <button onClick={props.delete}>Remove</button>
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