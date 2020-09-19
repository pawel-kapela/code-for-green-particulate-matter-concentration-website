import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import { setDatePointer, setTimespan, switchToTheNextTimespan, switchToThePreviousTimespan, fetch } from '../actions/DataActions';

import localisations from '../constants/Localisations';

import { Icon } from '@iconify/react';
import chevronLeft from '@iconify/icons-bi/chevron-left';
import chevronRight from '@iconify/icons-bi/chevron-right';

class DataControls extends Component {
    constructor(props) {
        super(props);

        this.handleTimespanChange = this.handleTimespanChange.bind(this);
    }

    handleTimespanChange(timespan) {
        this.props.setTimespan(timespan);

        this.props.fetch();
    }

    handleSwitchToTheOtherTimespan(forward) {
        if (forward) {
            if (this.props.timespan == 1 || moment().startOf('d').subtract(this.props.timespan, 'd').isSameOrBefore(moment().startOf('d'))) {
                this.props.switchToTheNextTimespan();
            }
            else {
                this.props.setDatePointer(moment().startOf('d').subtract(this.props.timespan, 'd').toDate());
            }
        } else {
            this.props.switchToThePreviousTimespan();
        }

        this.props.fetch();
    }

    render() {
        const { color } = this.props.theme;
        const { datePointer, timespan } = this.props;
        const { language } = this.props;

        const rangeEnd = (timespan == 1) ? moment(datePointer) : moment(datePointer).add(timespan, 'd');

        const iconSize = '1.5em';

        return (
            <div className='d-flex mb-2 align-items-center justify-content-center'>
                <button className='btn' style={{color}} onClick={() => this.handleSwitchToTheOtherTimespan(false)}>
                    <Icon icon={chevronLeft} width={iconSize} height={iconSize}/>
                </button>

                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='d-flex flex-column flex-md-row pb-3'>
                        <div className='d-flex flex-column align-items-center'>
                            <label>{localisations.start}</label>
                            <DatePicker selected={datePointer} dateFormat='dd/MM/yyyy' maxDate={(timespan == 1) ? moment().startOf('d').toDate() : moment().startOf('d').subtract(timespan, 'd').toDate()} onChange={(date, event) => this.props.setDatePointer(date)}/>
                        </div>
                        <div className='d-flex flex-column align-items-center'>
                            <label>{localisations.end}</label>
                            <DatePicker selected={rangeEnd.toDate()} dateFormat='dd/MM/yyyy' disabled/>
                        </div>
                    </div>

                    <div className='d-flex'>
                        <div className='form-check form-check-inline'>
                            <input className='form-check-input' type='radio' value={1} checked={timespan == 1} onChange={(changeEvent) => this.handleTimespanChange(changeEvent.target.value)}/>
                            <label className='form-check-label'>{localisations.day}</label>
                        </div>
    
                        <div className='form-check form-check-inline'>
                            <input className='form-check-input' type='radio' value={7} checked={this.props.timespan == 7} onChange={(changeEvent) => this.handleTimespanChange(changeEvent.target.value)}/>
                            <label className='form-check-label'>{localisations.week}</label>
                        </div>
    
                        <div className='form-check form-check-inline'>
                                <input className='form-check-input' type='radio' value={31} checked={this.props.timespan == 31} onChange={(changeEvent) => this.handleTimespanChange(changeEvent.target.value)}/>
                                <label className='form-check-label'>{localisations.month}</label>
                        </div>
                    </div>
                </div>

                <button className='btn' style={{color}} onClick={() => this.handleSwitchToTheOtherTimespan(true)} disabled={!rangeEnd.isBefore(moment().startOf('d'))}>
                    <Icon icon={chevronRight} width={iconSize} height={iconSize}/>
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { theme } = state.theme;
    const { datePointer, timespan } = state.data;
    const { language } = state.language;

    return { theme, datePointer, timespan, language };
}

export default connect(mapStateToProps, { setDatePointer, setTimespan, switchToTheNextTimespan, switchToThePreviousTimespan, fetch })(DataControls);
