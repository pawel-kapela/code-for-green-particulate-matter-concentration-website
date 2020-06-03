import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';

import { setLanguage } from '../actions/LanguageActions';

const AppContainer = props => {
    return <App {...props}/>;
}

const mapStateToProps = state => {
    const { theme } = state.theme;

    return { theme };
}

export default connect(mapStateToProps, {setLanguage})(AppContainer);
