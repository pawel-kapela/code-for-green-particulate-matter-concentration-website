import React from 'react';
import { Icon } from '@iconify/react';
import bxErrorCircle from '@iconify/icons-bx/bx-error-circle';

function Error() {
    const iconSize = '5em';

    return (
        <div className='d-flex flex-column align-items-center justify-content-center overflow-auto'>
            <Icon icon={bxErrorCircle} width={iconSize} height={iconSize}/>
            <h1 className='pt-3 text-center'>Wystąpił błąd przy wczytywaniu danych, spróbuj ponownie</h1>
        </div>
    );
}

export default Error;