import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flag from 'react-flags';

import { darkTheme } from '../../constants/Themes';
import localisations from '../../constants/Localisations';

function NormsPage({theme}) {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <h1 className="font-weight-bold">{localisations.normsTitle}</h1>

                <h3>{localisations.normsIntro}</h3>

                <br/>

                <h3>{localisations.normsForOtherSubstances}</h3>

                <br/>

                <h3 className='pt-3 pb-2 font-weight-bold'>{localisations.comparisonTitle}</h3>

                <table className={`table table-hover rounded ${(theme.color == darkTheme.color) ? 'table-dark' : ''}`} style={{color: 'inherit'}}>
                    <thead>
                        <tr style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                            <th scope='col'>{localisations.country}</th>
                            <th scope='col'>{localisations.allowedDailyLevel}</th>
                            <th scope='col'>{localisations.informingDailyLevel}</th>
                            <th scope='col'>{localisations.alertDailyLevel}</th>
                            <th scope='col'>{localisations.highLevel}</th>
                            <th scope='col'>{localisations.averageYearlyAllowedLevel}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope='row'><Flag name='PL' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.pl}</th>
                            <td>50 µg/m³ (PM10)</td>
                            <td>200 µg/m³ (PM10)</td>
                            <td>300 µg/m³ (PM10)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                        <th scope='row'><Flag name='EU' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.eu}</th>
                            <td>50 µg/m³ (PM10)</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>25 µg/m³ (PM10&PM2.5)</td>
                        </tr>
                        <tr>
                            <th scope='row'><Flag name='CZ' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.cz}</th>
                            <td></td>
                            <td></td>
                            <td>100 µg/m³</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'><Flag name='SK' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.sk}</th>
                            <td></td>
                            <td>100 µg/m³</td>
                            <td>150 µg/m³</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'><Flag name='HU' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.hu}</th>
                            <td></td>
                            <td>75 µg/m³</td>
                            <td>100 µg/m³</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'><Flag name='FR' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.fr}</th>
                            <td></td>
                            <td></td>
                            <td>80 µg/m³</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'><Flag name='CH' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.ch}</th>
                            <td></td>
                            <td>75 µg/m³</td>
                            <td>100 µg/m³</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'><Flag name='IT' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.it}</th>
                            <td></td>
                            <td>50-75 µg/m³</td>
                            <td>75 µg/m³</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'><Flag name='BE' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.be}</th>
                            <td></td>
                            <td></td>
                            <td>70 µg/m³</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'><Flag name='GB' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.gb}</th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>101 µg/m³</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'><Flag name='FI' format='png' basePath='/img/flags' pngSize={32} shiny={false}/> {localisations.fi}</th>
                            <td></td>
                            <td>50 µg/m³</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    const { theme } = state.theme;

    return { theme };
}

export default connect(mapStateToProps, {})(NormsPage);
