import React, {Component, PropTypes} from 'react';
import {CloseIcon} from '../../components/icons';
import {HeaderContainerStyles, HeaderCloseButtonStyles} from './styles';

export default class Header extends Component {
    static propsTypes = {
        handleCloseClick: PropTypes.func
    };

    render() {
        return (
            <div style={HeaderContainerStyles}>
                <div style={HeaderCloseButtonStyles}
                     onClick={this.props.handleCloseClick}>
                    <CloseIcon />
                </div>
            </div>
        );
    }
}