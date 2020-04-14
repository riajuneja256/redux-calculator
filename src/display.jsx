import React, { Component } from "react";
import './calc.css';
import { connect } from 'react-redux';

class Display extends Component {

    render() {
        return (
            <React.Fragment>
                <div id="display" className="common_style right-align padding_0 display col s5 push-s3">
                    <input
                        className="right-align display"
                        type="text"
                        value={this.props.expression.display}
                        readOnly
                    />
                </div>
            </React.Fragment>
        );
    }

}
export default connect(
    state => ({ expression: state.Modal }),
    dispatch => ({})
)(Display);
