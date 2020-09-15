import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Sidebar from './Sidebar';
import Routes from './Routes';

class Root extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }
    }

    handleSidebarStateChange(state) {
        this.setState({ menuOpen: state.isOpen });
    }

    toggleSidebar() {
        this.setState(state => ({ menuOpen: !state.menuOpen }));
    }

    closeSidebar() {
        this.setState({ menuOpen: false });
    }

    render() {
        return (
            <Router basename='/powietrze'>
                <div className='d-flex'>
                    <Sidebar
                        menuProps={{
                            customBurgerIcon: false,
                            isOpen: this.state.menuOpen,
                            onStateChange: state => this.handleSidebarStateChange(state),
                            pageWrapId: "page-wrap",
                            outerContainerId: "app-container",
                        }}
                        closeSidebar={() => this.closeSidebar()}
                    />

                    <Header id="header" toggleSidebar={() => this.toggleSidebar()}/>
                </div>

                <div id="page-wrap">
                    <Routes closeSidebar={() => this.closeSidebar()}/>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    const { language } = state.language;

    return { language };
};

export default connect(mapStateToProps, {})(Root);
