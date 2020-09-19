import React, { Component } from 'react';

import localisations from '../../constants/Localisations';

class HowDoesItWorkPage extends Component {
    render() {
        return (
            <div className='container mt-5 mb-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='font-weight-bold'>{localisations.howDoesItWorkTitle}</h1>
    
                        <h3>{localisations.howDoesItWorkDescription}</h3>
    
                        <ul>
                            <li>{localisations.howDoesItWorkA}</li>
                            <li>{localisations.howDoesItWorkB}</li>
                        </ul>
    
                        <h3>{localisations.howDoesItWorkAfter}</h3>
                    </div>

                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <img src='img/scheme.png' className='mh-75'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default HowDoesItWorkPage;
