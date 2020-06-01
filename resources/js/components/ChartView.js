import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

import DataControls from './DataControls';
import EmptyRequestResult from './EmptyRequestResult';

function ChartView({data, error, theme}) {    
    const chartData = data ? data.length ? {
        labels: data.map(record => { return record.datetime; }),
        datasets: [
            {
                label: 'PM1',
                data: data.map(record => { return record.pm1 }),
                backgroundColor: 'rgb(204, 224, 255, 0.25)'
            },
            {
                label: 'PM2.5',
                data: data.map(record => { return record.pm25 }),
                backgroundColor: 'rgb(128, 179, 255, 0.25)'
            },
            {
                label: 'PM10',
                data: data.map(record => { return record.pm10 }),
                backgroundColor: 'rgba(0, 102, 255, 0.25)'
            }
        ]
    } : null : null;

    const chartOptions = {
        legend: {
            labels: {
                fontColor: theme.color
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: theme.color
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: theme.color
                }
            }]
        },
        tooltips: {
            mode: 'x'
        }
    };
    
    return (
        <div>
            <DataControls/>

            { data.length ? null : <EmptyRequestResult/> }
            
            <div>
                { chartData ? <Line data={chartData} options={chartOptions}/> : null }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    const { data, error } = state.data;
    const { theme } = state.theme;

    return { data, error, theme };
}

export default connect(mapStateToProps, {})(ChartView);
