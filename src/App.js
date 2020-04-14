import React from 'react';
import './calc.css';
import Button from './numbers';
import Operators from './operators';
import Equals from './equals';
import Display from './display';
import Clear from './AC';
export class App extends React.Component {

  render() {
    return (
      <div className="row container"> 
        <div className="col s12">
          <Display />
          <div className="col s12">
            <Button data={7} />
            <Button data={8} />
            <Button data={9} />
            <Operators data={"+"} />
            
          </div>
          <div className="col s12">
            <Button data={4} />
            <Button data={5} />
            <Button data={6} />
            <Operators data={"-"} />
          </div>
          <div className="col s12">
            <Button data={1} />
            <Button data={2} />
            <Button data={3} />
            <Operators data={"*"} />
          </div>
          <div className="col s12">
            <Clear data={"AC"} />
            <Button data={0} />
            <Equals data={"="} />
            <Operators data={"/"} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
