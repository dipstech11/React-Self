import React, { Component } from 'react';
import './App.css';
import Output from './UserOutput/UserOutput';
import InputU from './UserInput/UserInput';


class  App extends Component{
  state = {
    name : [
      "FIRST",
      "SECOND",
      'THIRD'

    ]
  }

  changeNameHandler = (event) => {
    this.setState(
      {
          name : [
            event.target.value,
            "SECOND",
            'THIRD'

          ]
        }


    )

  }


  render(){
  return (
    <div className="App">
      <h3>Change the author Name</h3>
      <InputU  changed={this.changeNameHandler}
        currentuser = {this.state.name}/>
      <Output  name={this.state.name[0]}/>

      <InputU  changed={this.changeNameHandler} />
      <Output name= {this.state.name[1]}/>

      <InputU  changed={this.changeNameHandler} />
      <Output name={this.state.name[2]} />


    </div>
  );
}
}

export default App;
