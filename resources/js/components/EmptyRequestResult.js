import React from 'react';
import { Icon } from '@iconify/react';
import fileEmpty from '@iconify/icons-icomoon-free/file-empty';

import localisations from '../constants/Localisations';

function EmptyRequestResult() {
    const iconSize = '5em';

    return (
        <div className="d-flex flex-column align-items-center justify-content-center overflow-auto">
            <Icon icon={fileEmpty} width={iconSize} height={iconSize}/>
            <h1 className="pt-3 text-center">{localisations.emptyRequestResult}</h1>
        </div>
    );
}

export default EmptyRequestResult;