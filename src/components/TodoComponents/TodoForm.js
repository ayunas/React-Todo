import React from 'react';
import './Todos.css';

class TodoForm extends React.Component {
    
    
    addTodo() {
        alert('addTodo has been clicked');
    }
    
    render() {
        
        return (<form>
                    <input></input>
                    <button onClick={this.addTodo}>Add Todo</button>        
                </form>
               );
        
    }
    
}

export default TodoForm; 