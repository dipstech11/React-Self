import React, {Component} from 'react';
import style from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'

class App extends Component {
  state = {
    person: [
      { id: '1', name: "w", age: 24 },
      { id: '2', name: "x", age: 33 },
      { id: '3', name: "y", age: 30 },
      { id: '4', name: "z", age: 20 },

    ],
    show: false
  }

  deleteContent = (PIndex) => {
    // const newPerson = this.state.person;
    const newPerson = [...this.state.person]
    newPerson.splice(PIndex, 1);
    this.setState({ person: newPerson })

  }

  onChangeHandler = (event, index) => {
    //finding the personid which need to be worked on
    const personIndex = this.state.person.findIndex((p) => {
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
      { person: allPerson }
    )

  }

  toggleContent = () => {
    const doesShow = this.state.show;
    this.setState({ show: !doesShow });

  }


  render() {

    //adding personToggle condition for toggle behavior
    let persons = null;


    if (this.state.show) {
      //true condition
      persons = (
        <div>
        <Persons
        persons = {this.state.person}
        clicked = {this.deleteContent}
        changed = {this.onChangeHandler}
        />
        </div>
      );
    }

    return (

      <div className={style.App} >

        <Cockpit  show = {this.state.show}
        person = {this.state.person}
        clicked= {this.toggleContent}
        />

        {persons}

      </div>

    );
  }
}
export default App;
