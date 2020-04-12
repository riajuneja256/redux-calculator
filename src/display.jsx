import React, { Component } from "react";
import './calc.css';

class Display extends Component{
   
    render(){
        return(
            <React.Fragment>
                <div  id="display" className="common_style right-align padding_0 display col s5 push-s3">
                    <input
                        className="right-align display"
                        type="text"
                        placeholder="0"
                        />
                </div>
            </React.Fragment>
        );
    }

}
export default Display;
 