import React, {Component, PropTypes} from 'react';
import {
    ConsoleMessageStyles,
    ConsoleMessageIconStyles,
    ConsoleStackTraceContainer
} from './styles';
var stackTrace = require('stack-trace');

import {ErrorIcon, WarningIcon} from '../icons';

const _IconMap = {
    log: <div></div>,
    warn: <WarningIcon />,
    error: <ErrorIcon />,
    winError: <ErrorIcon />
};

export default class Console extends Component {
    static propTypes = {
        message: PropTypes.object
    };

    resolveIcon() {
        return _IconMap[this.props.message.type];
    }

    resolveErrorText() {
        const type = this.props.message.type;

        console.info(this.props.message.args[0]);

        if (type == 'error' || type == 'log' || type == 'warn') {
            return this.props.message.args[0];
        }

        if (type == 'winError') {
            const args = this.props.message.args;
            const message = args[0];
            const fileName = args[1].split('/').slice(-1)[0];
            return `${message} (${fileName} line:${args[2]} symbol:${args[3]})`;
        }
    }

    getTrace() {
        const error = this.props.message.args[4];
        if (this.props.message.type != 'winError' || !error) {
            return false;
        }
        const parsedTrace = stackTrace.parse(error);
        let traceString;

        function mapTrace(el, i) {
            const functionName = el.functionName || '(anonymous function)';
            const fileName = el.fileName ? el.fileName.split('/').slice(-1)[0] : '';
            const lineNumber = el.lineNumber || '';
            return (
                <div key={`index_${i}`}>
                    {`${functionName} @ ${fileName}:${lineNumber}`}
                </div>
            );
        }

        if (parsedTrace.length) {
            traceString = (
                <div style={ConsoleStackTraceContainer}>
                    {parsedTrace.map(mapTrace)}
                </div>
            );
        }
        return traceString;
    }

    render() {
        const messageText = this.resolveErrorText();
        const messageIcon = this.resolveIcon();
        const trace = this.getTrace();
        return (
            <div style={ConsoleMessageStyles}>
                <div style={ConsoleMessageIconStyles}>
                    {messageIcon}
                </div>
                <span>{messageText}</span>
                {trace}
            </div>
        );
    }
}
