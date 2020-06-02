import React from 'react';
import { connect } from 'react-redux';

import App from '../components/App';

import { setLanguage } from '../actions/LanguageActions';

const AppContainer = props => {
    return <App {...props}/>
}

const mapStateToProps = state => {
    const { theme } = state.theme;
    const { language } = state.language;

    return {
        theme,
        language
    };
}

export default connect(mapStateToProps, {setLanguage})(AppContainer);
