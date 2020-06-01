import React from 'react';
import { connect } from 'react-redux';
import { setLanguage } from '../actions/LanguageActions';

import Flag from 'react-flags';

function LanguageSelectionSwitch({setLanguage}) {
    return (
        <div className='d-flex'>
            <a className='m-1' style={{cursor: 'pointer'}} onClick={() => setLanguage('pl')}>
                <Flag name='PL' format='png' basePath='/img/flags' pngSize={32} shiny={false}/>
            </a>

            <a className='m-1' style={{cursor: 'pointer'}} onClick={() => setLanguage('en')}>
                <Flag name='GB' format='png' basePath='/img/flags' pngSize={32} shiny={false}/>
            </a>
        </div>
    );
}

const mapStateToProp = state => {
    return {};
}

export default connect(mapStateToProp, {setLanguage})(LanguageSelectionSwitch);