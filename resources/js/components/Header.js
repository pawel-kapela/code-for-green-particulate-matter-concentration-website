import React from 'react';

import localisations from '../constants/Localisations';

function Header({toggleSidebar}) {
    return (
        <div className='w-100 p-3 d-flex align-items-center justify-content-center'>
            <button type='button' style={{ color: 'inherit', fontSize: '2em' }} className='btn mr-3' onClick={() => toggleSidebar()}>☰</button>

            <div>
                <h4 className='font-weight-bold'>{localisations.pageTitle}</h4>
                <h5 className='font-weight-bold'>{localisations.schoolName}</h5>
            </div>

            <img src='/img/logo2.png' alt='Code for Green logo' className='mh-25 ml-auto mr-3'/>
        </div>
    );
}

export default Header;
