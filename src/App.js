import React from 'react';
import Header from './components/TodoComponents/Header';
import Decide from './components/TodoComponents/Decide';
import Todos from './components/TodoComponents/Todos';


class App extends React.Component {
    
    render() {
        
        const title = 'Indecision To-Do';
        const subtitle = 'Put your life in the hands of a computer'
        const todos = ['item1','item2','item4'];
//         console.log(this.props);
        return (
        <div>
            <Header title={title} subtitle={subtitle} />
            <Decide />
            <Todos todos={todos}/>
        </div>
        );
    }
}



export default App;
