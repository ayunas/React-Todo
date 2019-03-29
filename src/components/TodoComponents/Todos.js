import React from 'react';
import Todo from './Todo';


class Todos extends React.Component {
    
    constructor() {
        super();   
    }
    
    
    
    render() {
        console.log(this.props.todos);
        
        return (
            <div>
                <button>Remove</button>
                {this.props.todos.map( todo => <Todo todo={todo} key={todo}/>
                )}
            </div>
        );
    }
    
}

export default Todos;

