import React from 'react';

import localisations from '../../constants/Localisations';

function ParticulateMatterInformationPage() {
    return (
        <div className='container mx-sm-2 my-sm-5'>
            <div className='row'>
                <h1 className='font-weight-bold'>{localisations.particulateMatterInformationTitle}</h1>

                <h3>{localisations.particulateMatterIntro}</h3>

                <br/>

                <h3>{localisations.particulateMatterSize}</h3>

                <br/>

                <h3>{localisations.particulateMatterDivision}</h3>

                <ul>
                    <li>{localisations.pm10}</li>
                    <li>{localisations.pm25}</li>
                    <li>{localisations.pm1}</li>
                </ul>
            </div>
        </div>
    );
}

export default ParticulateMatterInformationPage;
