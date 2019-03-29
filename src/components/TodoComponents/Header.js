import React from 'react';


class Header extends React.Component {
    
    render() {
//        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
            );
    }
}

export default Header;
