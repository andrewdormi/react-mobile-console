import React, {Component, PropTypes} from 'react';

export default class ErrorIcon extends Component {
    render() {
        return (
            <svg x="0px" y="0px" viewBox="0 0 50 50">
                <circle style={{fill:'#D75A4A'}} cx="25" cy="25" r="25"/>
                <polyline
                    style={{fill:'none',stroke:'#FFFFFF',strokeWidth:'2',strokeLinecap:'round',strokeMiterlimit:'10'}}
                    points="16,34 25,25 34,16"/>
                <polyline
                    style={{fill:'none',stroke:'#FFFFFF',strokeWidth:'2',strokeLinecap:'round',strokeMiterlimit:'10'}}
                    points="16,16 25,25 34,34"/>
            </svg>

        );
    }
}