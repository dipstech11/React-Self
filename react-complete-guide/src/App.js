import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [{
        name: "x",age: 33},
      {name: "y",age: 30},
    ],
    show: true
  }

  switchButtonHandler = (NewName) => {
    // console.log("was clicked")
    this.setState({
      person: [{
          name: NewName,
          age: 33
        },
        {
          name: "y",
          age: 50
        },
      ]
    })

  }

  onChangeHandler = (event) =>{
    this.setState({
      person: [{
          name: event.target.value,
          age: 33
        },
        {
          name: "y",
          age: 50
        },
      ]
    })


  }

  toggleContent = () => {
    const doesShow = this.state.show;
    this.setState({show : !doesShow});

  }


  render() {

    const buttonStyle ={
      backgroundColor:"white",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer",
      font:"bold"

    }


    //adding personToggle condition for toggle behavior
    let personToggle = null;

    if (this.state.show){
      //true condition
      personToggle = (
        <div>
          <Person name = {this.state.person[0].name}
          age = {this.state.person[0].age}
          changed = {this.onChangeHandler} />

          <Person name = {this.state.person[1].name}
          age = {this.state.person[1].age}
          click = {this.switchButtonHandler.bind(this,"mmm")}>
          My Hobbies: Racing </Person>

       </div>
     );
   }

    return (
      <div className = "App" >

      <h1> This is Header </h1>
      <button
      style={buttonStyle}
      onClick = {
        this.switchButtonHandler.bind(this, "newname")
      } > change name </button>

      <button
      style={buttonStyle}
      onClick = {
        this.toggleContent
      } > Toggle Content </button>

      {personToggle}
    {  //terniary method for toggle::
      // {this.state.show === true  ?
      //   <div>
      //       <Person name = {this.state.person[0].name}
      //       age = {this.state.person[0].age}
      //       changed = {this.onChangeHandler} />
      //
      //       <Person name = {this.state.person[1].name}
      //       age = {this.state.person[1].age}
      //       click = {this.switchButtonHandler.bind(this,"mmm")}>
      //       My Hobbies: Racing </Person>
      //
      //    </div>
      //    : null

      // }
}
      </div>
    );
  }
}
export default App;
