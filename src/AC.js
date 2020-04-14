import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onClickAC } from './actions';

class Clear extends React.Component {
    render() {
        return (
            <div onClick={() => this.props.onClickAC(this.props.data)} className="col s1 btn push-s3 button_style" > {this.props.data}</div>
        );
    }
}


export default connect(
    state => ({}),
    dispatch => ({
        onClickAC: bindActionCreators(onClickAC, dispatch)
    })
)(Clear);
