import React from 'react';
import { Icon } from '@iconify/react';
import arrowUp from '@iconify/icons-bi/arrow-up';

import localisations from '../constants/Localisations';

function ChooseOptionView() {
    const iconSize = '5em';

    return (
        <div className="d-flex flex-column align-items-center justify-content-center overflow-auto">
            <Icon icon={arrowUp} width={iconSize} height={iconSize}/>
            <h1 className="pt-3 text-center">{localisations.chooseAnOptionToContinue}</h1>
        </div>
    );
}

export default ChooseOptionView;
