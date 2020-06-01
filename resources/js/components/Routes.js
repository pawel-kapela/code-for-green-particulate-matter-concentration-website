import React, { useEffect } from "react"
import { Route, Switch, useLocation } from "react-router-dom"

import * as paths from '../constants/RouterConstants';

import DataPage from './pages/DataPage';
import ParticulateMatterInformationPage from './pages/ParticulateMatterInformationPage';
import NormsPage from './pages/NormsPage';
import HowDoesItWorkPage from './pages/HowDoesItWorkPage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function Routes({closeSidebar}) {
    const location = useLocation()

    useEffect(() => {
        closeSidebar();
    }, [location]);

    return (
        <Switch>
            <Route path={paths.DataPage} component={DataPage}/>
            <Route path={paths.ParticulateMatterInformation} component={ParticulateMatterInformationPage}/>
            <Route path={paths.NormsPage} component={NormsPage}/>
            <Route path={paths.HowDoesItWork} component={HowDoesItWorkPage}/>
            <Route exact path={paths.HomePage} component={HomePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    );
}

export default Routes;
