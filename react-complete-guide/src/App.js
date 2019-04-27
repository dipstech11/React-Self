import React, {
  Component
} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person: [
      {id: '1', name: "w",age: 24},
      {id: '2', name: "x",age: 33},
      {id: '3', name: "y",age: 30},
      {id: '4', name: "z",age: 20},

    ],
    show: true
  }

  deleteContent = (PIndex) => {
    // const newPerson = this.state.person;
    const newPerson = [...this.state.person]
    newPerson.splice(PIndex, 1);
    this.setState({person:newPerson})

  }

    onChangeHandler = (event, index) =>{
    //finding the personid which need to be worked on
    const personIndex = this.state.person.findIndex( (p) =>{
      return p.id === index
    })

    //getting the person on the respective personIndex
    const selectedPerson = {
      ...this.state.person[personIndex]
    }

    //updating the name of the selectedPerson
    selectedPerson.name = event.target.value;

    //need to update thw whole person with the updated selectedPerson
    const allPerson = [...this.state.person]
    allPerson[personIndex] = selectedPerson

    //finally setting the person with the updatedperson
    this.setState(
      {person: allPerson}
    )

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

        {this.state.person.map((p, index) =>{
          return <Person
          name={p.name}
          age={p.age}
          key= {p.id}
          click ={() => this.dsseleteContent(index)}
          changed = {(event) => this.onChangeHandler(event, p.id)}/>
        }
        )}

  {
          // <Person name = {this.state.person[0].name}
          // age = {this.state.person[0].age}
          // changed = {this.onChangeHandler} />
          //
          // <Person name = {this.state.person[1].name}
          // age = {this.state.person[1].age}
          // click = {this.switchButtonHandler.bind(this,"mmm")}>
          // My Hobbies: Racing </Person>
        }

       </div>
     );
   }

    return (
      <div className = "App" >

      <h1> This is Header </h1>


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
