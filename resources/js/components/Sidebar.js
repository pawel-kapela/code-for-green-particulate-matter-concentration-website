import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import * as paths from '../constants/RouterConstants';
import localisations from '../constants/Localisations';

import ThemeSwitch from './ThemeSwitch';
import LanguageSelectionSwitch from './LanguageSelectionSwitch';

function Sidebar({menuProps}) {
    return (
        <Menu {...menuProps}>
            <Link to={paths.DataPage} className='menuItem'>{localisations.data}</Link>
            <Link to={paths.ParticulateMatterInformation} className='menuItem'>{localisations.particulateMatterInformation}</Link>
            <Link to={paths.NormsPage} className='menuItem'>{localisations.norms}</Link>
            <Link to={paths.HowDoesItWork} className='menuItem'>{localisations.howDoesItWork}</Link>
            <Link to={paths.HomePage} className='menuItem'>{localisations.aboutTheProject}</Link>

            <hr/>

            <LanguageSelectionSwitch className='menuItem'/>

            <hr/>

            <ThemeSwitch className='menuItem'/>
        </Menu>
    );
}

export default Sidebar;
