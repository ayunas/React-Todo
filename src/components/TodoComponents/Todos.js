import React from 'react';
import Todo from './Todo';

const Todos = (props) => {
    console.log(props.todos, 'props.todos');
    return (
        <div>
            {
                props.todos.map((todo, i) => <Todo
                    todo={{ todo, index: i }}
                    key={i}
                    delete={props.deleteTodo}
                />)
            }
            <button onClick={props.deleteTodos}>Remove All</button>
        </div>
    );
}

// class Todos extends React.Component {

//     // constructor() {
//     //     super();   
//     // }

//     // removeAll() {
//     //     console.log('remove button has been clicked');
//     //     console.log(this.props.todos);
//     // }

//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <button onClick={this.props.deleteTodos}>Remove</button>
//                 {this.props.todos.map( todo => <Todo todo={todo} key={todo}/>
//                 )}
//             </div>
//         );
//     }

// }

export default Todos;

