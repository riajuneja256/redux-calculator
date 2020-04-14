import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { onClickEqual } from './actions';
class Equals extends React.Component {
    handleKey = () => {
            
            let sum = eval(this.props.state).toString();
            console.log(sum);
            this.props.onClickEqual(sum);
    }
    render() {
        return (
            <div onClick={() => this.handleKey()} className="col s1 btn push-s3 button_style">{this.props.data}</div>
        );
    }
}

const mapStateToProps = (state) => {    
    console.log(state)
    return {
      state: state.Modal.display
    };
  }

export default connect(
    mapStateToProps,
    dispatch => ({
        onClickEqual: bindActionCreators(onClickEqual, dispatch)
    })
)(Equals);
