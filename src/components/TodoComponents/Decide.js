import React from 'react';


const Decide = (props) => {
    return (
        <div>
            <button onClick={props.decideTodo} disabled={!props.hasTodos}>
            What should I do?
            </button>
        </div>
    );
}


// class Decide extends React.Component {
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.decideTodo} disabled={!this.props.hasTodos}>
//                 What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

export default Decide;