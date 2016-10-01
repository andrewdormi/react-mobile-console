import React, {Component, PropTypes} from 'react';
import {OpenButtonIcon} from '../icons';
import {OpenButtonStyles, OpenButtonIconStyles} from './styles';
import {hiddenElement} from '../../styles/main'
import _ from 'lodash';

export default class OpenButton extends Component {
    static propTypes = {
        handleClick: PropTypes.func,
        isHidden: PropTypes.bool
    };

    handleClick() {
        this.props.handleClick();
    }

    render() {
        let showenStyles = OpenButtonStyles;
        let hiddenStyles = _.assign({}, showenStyles, hiddenElement);
        const containerStyles = this.props.isHidden ? hiddenStyles : showenStyles;
        return (
            <div style={containerStyles}>
                <div style={OpenButtonIconStyles} onClick={this.handleClick.bind(this)}>
                    <OpenButtonIcon />
                </div>
            </div>
        );
    }
}
