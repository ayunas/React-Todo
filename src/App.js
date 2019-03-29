import React from 'react';
import Header from './components/TodoComponents/Header';
import Decide from './components/TodoComponents/Decide';
import Todos from './components/TodoComponents/Todos';


class App extends React.Component {
    
    render() {
        
        const title = 'Indecision To-Do'
        
        return (
        <div>
            <Header title={title} />
            <Decide />
            <Todos />
        </div>
        );
    }
}



export default App;
