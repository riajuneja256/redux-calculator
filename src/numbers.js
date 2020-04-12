import React from 'react';

class Button extends React.Component
{
    render(){
        return(
            <div onClick={() =>this.props.handlekey(this.props.data)} className="col s1 btn push-s3 button_style">{this.props.data}</div>
        );
    }
}
export default Button;