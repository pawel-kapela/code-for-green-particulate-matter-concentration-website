import React, { Component } from 'react';
import FullHeight from 'react-full-height';

import Root from './Root';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FullHeight canExceed style={{
                color: this.props.theme.color,
                backgroundColor: this.props.theme.backgroundColor,
                backgroundImage: this.props.theme.backgroundImage,
                backgroundSize: 'cover',
                height: '100%',
                transition: 'color 0.5s ease, background-color 0.5s ease, background-image 0.5s ease',
                willChange: 'color, background-color, background-image'
            }}>
                <Root/>
            </FullHeight>
        );
    }
}

export default App;
