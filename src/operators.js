import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onClickOperator } from './actions';

class Operators extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.onClickOperator(this.props.data)} className="col s1 btn push-s3 button_style">{this.props.data}</div>
        );
    }
}
export default connect(
    state => ({}),
    dispatch => ({
        onClickOperator: bindActionCreators(onClickOperator, dispatch)
    })
)(Operators);
