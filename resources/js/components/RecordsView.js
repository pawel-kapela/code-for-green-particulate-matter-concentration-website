import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { v4 as uuid_v4 } from 'uuid';

import DataControls from './DataControls';
import Record from './Record';
import EmptyRequestResult from './EmptyRequestResult';
import Error from './Error';

import { darkTheme } from '../constants/Themes';
import localisations from '../constants/Localisations';

function RecordsView({data, error, theme, language}) {
    let day;
    
    moment.locale(language);

    return (
        <div>
            <DataControls/>

            { data.length ? null : <EmptyRequestResult/> }

            {/* <div className='d-flex flex-wrap'> */}
            { data ? data.length ?
                <table className={`table table-hover rounded ${(theme.color == darkTheme.color) ? 'table-dark' : ''}`} style={{color: 'inherit'}}>
                    <thead>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <th scope='col'>{localisations.datetime}</th>
                            <th scope='col'>PM1</th>
                            <th scope='col'>PM2.5</th>
                            <th scope='col'>PM10</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(record => {
                                if (!moment(record.datetime).startOf('d').isSame(day)) {
                                    day = moment(record.datetime).startOf('d');
                                    return (
                                        <tr className='table-active' key={uuid_v4()}>
                                            {/* <h3 className='w-100 p-3 rounded' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>{moment(record.datetime).format('LL')}</h3> */}
                                            <th scope='col'>{moment(record.datetime).format('LL')}</th>
                                            <th scope='col'></th>
                                            <th scope='col'></th>
                                            <th scope='col'></th>
                                        </tr>
                                    );
                                }

                                return <Record key={uuid_v4()} record={record}/>;
                            })
                        }
                    </tbody>
                </table>
            : null : null}
        </div>
    );
}


const mapStateToProps = state => {
    const { data, error } = state.data;
    const { theme } = state.theme;
    const { language } = state.language;

    return { data, error, theme, language };
}

export default connect(mapStateToProps, {})(RecordsView);
