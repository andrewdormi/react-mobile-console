import React, {Component, PropTypes} from 'react';
import Header from '../Header/Header';
import {Console, EvalConsole} from '../../components';
import {MainViewStyles} from './styles';
import {hiddenElement} from '../../styles/main';
import _ from 'lodash';

export default class MainView extends Component {
    static propTypes = {
        handleCloseClick: PropTypes.func,
        isOpened: PropTypes.bool,
        messages: PropTypes.array
    };

    componentDidMount() {
        this.scrollBottom();
    }


    componentDidUpdate() {
        this.scrollBottom();
    }

    scrollBottom() {
        const consoleRef = this.refs.console;
        consoleRef.scrollTop = consoleRef.scrollHeight;
        console.info(consoleRef.scrollHeight);
    }

    render() {
        let showenStyles = MainViewStyles;
        let hiddenStyles = _.assign({}, showenStyles, hiddenElement);
        const containerStyles = this.props.isOpened ? showenStyles : hiddenStyles;
        return (
            <div style={containerStyles} ref="console">
                <Header handleCloseClick={this.props.handleCloseClick}/>
                <Console messages={this.props.messages}/>
                <EvalConsole />
            </div>
        );
    }
}
