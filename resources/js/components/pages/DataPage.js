import React, { Component } from 'react';
import { Switch, Route, NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as paths from '../../constants/RouterConstants';
import localisations from '../../constants/Localisations';

import RecordsView from '../RecordsView';
import ChartView from '../ChartView';
import ChooseOptionView from '../ChooseOptionView';

class DataPage extends Component {
    render() {
        const path = this.props.location.pathname;

        return (
            <React.Fragment>
                <div className="d-flex justify-content-center" style={{ fontSize: '1.5em' }}>
                    <Link to={paths.DataPageRecords} className="mr-3" style={ (path == '/data/records') ? { color: this.props.theme.negative } : { color: 'inherit'} }>{localisations.records}</Link>
                    |
                    <Link to={paths.DataPageChart} className="ml-3" style={ (path == '/data/chart') ? { color: this.props.theme.negative } : { color: 'inherit' } }>{localisations.chart}</Link>
                </div>

                <div className="m-5 p-3 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                    <Switch>
                        <Route path={paths.DataPageRecords} component={RecordsView}/>
                        <Route path={paths.DataPageChart} component={ChartView}/>
                        <Route component={ChooseOptionView}/>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    const { theme } = state.theme;

    return { theme };
}

export default connect(mapStateToProps, {})(DataPage);
