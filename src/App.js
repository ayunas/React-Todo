import React from 'react';
import './styles/app.scss';
import Header from './components/TodoComponents/Header';
import Decide from './components/TodoComponents/Decide';
import Todos from './components/TodoComponents/Todos';
import AddTodo from './components/TodoComponents/AddTodo';
import VisibilityToggle from './components/TodoComponents/VisibilityToggle.js';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodos = this.deleteTodos.bind(this);
        this.decideTodo = this.decideTodo.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.state = {
            todos: []
        }
    }

    deleteTodos() {
        this.setState( () => ( { todos: [] } ) )
    }

    deleteTodo(todoToRemove) {
        // console.log(todoToRemove);
        this.setState( prevState => {
            return {
                todos : prevState.todos.filter( todo => todoToRemove !== todo )
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

    handleAddTodo(todo) {
        this.setState( (prevState) => {
            return {
               todos: prevState.todos.concat(todo)
            }
        })
    }
    
    render() {
        
        const title = 'What To Do?';
        const subtitle = 'Organize Your Life, One Todo at a Time'
       
        return (
        <div id='app'>
            <Header title={title} subtitle={subtitle} />
            <Decide hasTodos={this.state.todos.length > 0}
            decideTodo={this.decideTodo}
            />
            <Todos todos={this.state.todos}
            deleteTodos={this.deleteTodos}
            deleteTodo={this.deleteTodo}
            />
            <AddTodo 
            handleAddTodo={this.handleAddTodo} />
            {/* <VisibilityToggle /> */}
        </div>
        );
    }
}



export default App;
