import React, {Component, PropTypes} from 'react';
import {ConsoleContainerStyles} from './styles';
import Message from './Message';

export default class Console extends Component {
    static propTypes = {
        messages: PropTypes.array
    };

    mapMessages(el, i) {
        return (<Message message={el} key={`index_${i}`}/>)
    }

    render() {
        const messages = this.props.messages || [];
        return (
            <div style={ConsoleContainerStyles}>
                {messages.map(this.mapMessages)}
            </div>
        );
    }
}
