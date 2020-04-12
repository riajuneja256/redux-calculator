import React from 'react';
import { connect } from 'react-redux';
import { onClickNumber, onClickOperator,onClickEqual } from './actions';
import './calc.css'
import Button from './numbers';
import Operators from './operators';
import Equals from './equals';
import Display from './display';

export class App extends React.Component {

  render() {
    return (
      <div className="row container">
        <div className="col s12">
          <Display expression = {this.props.state}/>
          <div className="col s12">
            <Button handlekey = {this.props.onClickNumber(1)} data = {1}/>
            <Button handlekey = {this.props.onClickNumber(2)} data = {2} />
            <Button handlekey = {this.props.onClickNumber(3)} data = {3} />
            <Operators handlekey = {this.props.onClickOperator("+")} data = {"+"} />
          </div>
          <div className="col s12">
            <Button handlekey = {this.props.onClickNumber(4)} data = {4} />
            <Button handlekey = {this.props.onClickNumber(5)} data = {5} />
            <Button handlekey = {this.props.onClickNumber(6)} data = {6} />
            <Operators handlekey = {this.props.onClickOperator("-")} data = {"-"} />
          </div>
          <div className="col s12">
            <Button handlekey = {this.props.onClickNumber(7)} data = {7} />
            <Button handlekey = {this.props.onClickNumber(8)} data = {8} />
            <Button handlekey = {this.props.onClickNumber(9)} data = {9} />
            <Operators handlekey = {this.props.onClickOperator("X")} data = {"X"} />
          </div>
          <div className="col s12">
            <Button handlekey = {this.props.onClickNumber(0)} data = {0} />
            <Button handlekey = {this.props.onClickNumber(".")} data = {"."} />
            <Equals handlekey = {this.props.onClickEqual("=")} data = {"="} />
            <Operators handlekey = {this.props.onClickOperator("/")} data = {"/"} />
          </div>



          {/* <div className="col s12">
            <div className="btn col s2 push-s4" onClick={()=>this.props.activateModal()}>open Modal</div>
          </div>
          { //if this.props.modalVisibility == true then the modal will be showed!
            this.props.modalVisibility && 
            <div>
              <div className="col s12">
                <div className="col s6 push-s3 modal_style padding_0">
                  <div className="col s12 center modal_body">Modal Content</div>
                  <div className="col s12 btn-flat right-align"  onClick={()=>this.props.closeModal()}>close</div>
                </div>
              </div>
            </div>
          } */}
        </div>
      </div>
    );

    
  }

}

// AppContainer.js

const mapStateToProps = (state) => {     //It is called every time the store state changes.
  return {
    state: state.Modal.display
  };
}

const mapDispatchToProps = {
  onClickNumber,
  onClickOperator,
  onClickEqual
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;