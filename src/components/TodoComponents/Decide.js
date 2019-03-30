import React from 'react';


class Decide extends React.Component {
    
    handleDecide() {
        console.log('What should I do has been clicked!');
    }
    
    render() {        
        return (
            <div>
                <button onClick={this.handleDecide}>What should I do?</button>
            </div>
        );
    }
}

export default Decide;