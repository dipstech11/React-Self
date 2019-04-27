import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    userinput: ""
  }

  inputChangedHandler = (event) => {
    this.setState({userinput: event.target.value})

  }

  deleteContent = (index) => {
    const text = this.state.userinput.split("")
    text.splice(index, 1)
    const updated = text.join("")
    this.setState(
      {userinput:updated})


  }

  render(){

  const charList = this.state.userinput.split("").map((ch, index) =>{
    return <Char character = {ch}
    key= {index}
    clicked= {() => this.deleteContent(index)}
     />
  })


  return (
    <div className="App">

    <input type="text"
     onChange ={this.inputChangedHandler}
     value={this.state.userinput}  />

    <p> {this.state.userinput} </p>

    <Validation inputLength={this.state.userinput.length} />
    {charList}

    </div>
  );
}
}

export default App;
