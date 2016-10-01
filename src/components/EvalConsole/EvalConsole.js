import React, {Component, PropTypes} from 'react';
import {
    EvalConsoleButtonStyle,
    EvalConsoleInputStyles
} from './styles';

export default class EvalConsole extends Component {
    onEvalClick() {
        const value = this.refs.codeinput.value;
        const result = eval(value);
        console.log(result);
        this.refs.codeinput.value = '';
    }

    render() {
        return (
            <div>
                <input style={EvalConsoleInputStyles}
                       type="text"
                       ref="codeinput"/>
                <div style={EvalConsoleButtonStyle}
                     onClick={this.onEvalClick.bind(this)}>
                    RUN
                </div>
            </div>
        );
    }
}