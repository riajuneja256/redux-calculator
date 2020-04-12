import React from 'react';

class Equals extends React.Component
{
    render(){
        return(
            <div onClick={() => this.props.onClickEqual(this.props.data)} className="col s1 btn push-s3 button_style">{this.props.data}</div>
        );
    }
}
export default Equals;