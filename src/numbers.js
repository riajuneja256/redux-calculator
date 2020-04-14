import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onClickNumber } from './actions';

class Button extends React.Component {
    
    render() {
        return (
            <div onClick={() => this.props.onClickNumber(this.props.data)} className="col s1 btn push-s3 button_style" > {this.props.data}</div>
        );
    }
}



export default connect(
    state => ({}),
    dispatch => ({
        onClickNumber: bindActionCreators(onClickNumber, dispatch)
    })
)(Button);
