require('babel-polyfill');
import React, {Component, PropTypes} from 'react';
import {OpenButton} from '../../components';
import {MainView} from '..';
import {MainContainerStyles} from './styles';
import ConsoleDecorator from '../../controller/ConsoleDecorator';

export default class ReactMobileConsole extends Component {
    static propTypes = {};

    state = {
        mainViewOpened: false,
        messages: []
    };

    componentDidMount() {
        ConsoleDecorator.init().on('massage', (messages)=> {
            console.info(messages);
            this.setState({messages});
        });
    }

    toggleOpen() {
        this.setState({
            mainViewOpened: !this.state.mainViewOpened
        });
    }

    render() {
        return (
            <div style={MainContainerStyles}>
                <OpenButton handleClick={this.toggleOpen.bind(this)}
                            isHidden={this.state.mainViewOpened}/>
                <MainView isOpened={this.state.mainViewOpened}
                          messages={this.state.messages}
                          handleCloseClick={this.toggleOpen.bind(this)}/>
            </div>
        );
    }
}
