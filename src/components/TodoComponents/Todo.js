import React from 'react';

const Todo = (props) => {
    return <li>{props.todo}</li>;
}

// class Todo extends React.Component {
    
//     render() {
//         console.log(this.props);
//         return <li>{this.props.todo}</li>;
//     }
// }

export default Todo;