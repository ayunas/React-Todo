import React from 'react';
import Header from './components/TodoComponents/Header';
import Decide from './components/TodoComponents/Decide';
import Todos from './components/TodoComponents/Todos';
import TodoForm from './components/TodoComponents/TodoForm';
import VisibilityToggle from './components/TodoComponents/VisibilityToggle.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodos = this.deleteTodos.bind(this);
        this.decideTodo = this.decideTodo.bind(this);
        this.state = {
            todos: ['item1','item2','item4','item-5']
        }
    }

    deleteTodos() {
        this.setState( () => {
            return {
                todos : []
             }
        }
        )
    }

    decideTodo() {
        console.log('decide has been clicked');
        const choice = Math.floor(Math.random()*this.state.todos.length);
        console.log(choice);
        alert(this.state.todos[choice]);
    }

    
    render() {
        
        const title = 'Indecision To-Do';
        const subtitle = 'Put your life in the hands of a computer'
       
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Decide hasTodos={this.state.todos.length > 0}
            decideTodo={this.decideTodo}
            />
            <Todos todos={this.state.todos}
            deleteTodos={this.deleteTodos}
            />
            <TodoForm />
            <VisibilityToggle />
        </div>
        );
    }
}



export default App;
