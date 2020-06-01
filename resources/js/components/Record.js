import React from 'react';

function Record({record}) {
    const { datetime, pm1, pm25, pm10 } = record;

    return (
        // <div className='w-100 px-3 py-1 d-flex overflow-auto align-items-center'>
        //     <h3 className='mr-3 text-bold'>{datetime}</h3>
        //     <h4 className='mr-3'>PM1: {pm1}</h4>
        //     <h4 className='mr-3'>PM2.5: {pm25}</h4>
        //     <h4 className='mr-3'>PM10: {pm10}</h4>
        // </div>

        <tr className={(pm10 > 200) ? (pm10 > 300) ? 'table-danger' : 'table-warning' : '' }>
            <th scope='row'>{datetime}</th>
            <td>{pm1}</td>
            <td>{pm25}</td>
            <td>{pm10}</td>
        </tr>
    );
}

export default Record;
