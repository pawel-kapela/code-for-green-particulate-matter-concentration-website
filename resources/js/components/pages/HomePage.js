import React from 'react';

import localisations from '../../constants/Localisations';

function HomePage() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <h1 className='font-weight-bold'>{localisations.homePageTitle}</h1>

                    <h3>{localisations.welcomeTitle}</h3>

                    <br/>

                    <h3>{localisations.createdInformation}</h3>

                    <ul>
                        <li><span className='text-weight-bold'>Paweł Kapela</span> - {localisations.softwareAndWebsite}</li>
                        <li><span className='text-weight-bold'>Wiktor Makowski</span> - {localisations.informationSections}</li>
                        <li><span className="text-weight-bold">Mateusz Lech, Grzegorz Ordan</span> - {localisations.case}</li>
                    </ul>
                </div>

                <div className='col-md-6 d-flex align-items-center justify-content-center'>
                    <img src='img/logo.png' className='mh-75'/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
