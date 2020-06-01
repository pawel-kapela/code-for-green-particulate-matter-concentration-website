import React, { Component } from 'react';
import { connect } from 'react-redux';
import Switch from "react-switch";
import { Icon, InlineIcon } from '@iconify/react';

import { setLightTheme, setDarkTheme } from '../actions/ThemeActions';
import * as themes from '../constants/Themes';

import sunSolid from '@iconify/icons-clarity/sun-solid';
import moonSolid from '@iconify/icons-clarity/moon-solid';


class ThemeSwitch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: (this.props.theme.color == undefined || this.props.theme.color == themes.lightTheme.color) ? false : true
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({checked});

        if (checked) {
            this.props.setDarkTheme();
        } else {
            this.props.setLightTheme();
        }
    }

    render() {
        const light = '#bdd1c8';
        const dark = '#373a47';

        return (
            <div style={{fontSize: '18px'}}>
                <Switch
                    checked={this.state.checked}
                    onChange={this.handleChange}
                    handleDiameter={28}
                    offColor={light}
                    onColor={dark}
                    offHandleColor={dark}
                    onHandleColor={light}
                    uncheckedIcon={<Icon icon={sunSolid} color={dark} width='1.25em' height='1.25em' style={{marginTop: '0.4em', marginLeft: '0.3em'}}/>}
                    checkedIcon={<Icon icon={moonSolid} color={light} width='1.5em' height='1.5em' style={{marginTop: '0.3em', marginLeft: '0.3em'}}/>}
                    height={40}
                    width={70}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { theme } = state.theme;
    
    return { theme };
}

export default connect(mapStateToProps, {setLightTheme, setDarkTheme})(ThemeSwitch);
