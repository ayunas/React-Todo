import React from 'react';
import Todo from './Todo';


class Todos extends React.Component {
    
    constructor() {
        super();   
    }
    
    removeAll() {
        console.log('remove button has been clicked');
    }
    
    render() {
        console.log(this.props.todos);
        
        return (
            <div>
                <button onClick={this.removeAll}>Remove</button>
                {this.props.todos.map( todo => <Todo todo={todo} key={todo}/>
                )}
            </div>
        );
    }
    
}

export default Todos;

