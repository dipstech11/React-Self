import React, {Component} from 'react';
import style from './App.css';
import Person from './Person/Person'
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';

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
    let personToggle = null;
    let btnClass ='';

    if (this.state.show) {
      //true condition
      personToggle = (

        <div>

          {this.state.person.map((p, index) => {
            return
            <ErrorBoundry key={person.id}>
            <Person
              name={p.name}
              age={p.age}
              key={p.id}
              click={() => this.toggleContent(index)}
              changed={(event) => this.onChangeHandler(event, p.id)} />

              </ErrorBoundry>
          }
          )}

        </div>

      );

      btnClass = style.Red

    }

    const classes = []
    if (this.state.person.length > 3) {
      classes.push(style.red)
    }
    if (this.state.person.length === 1) {
      classes.push(style.bold)
    }


    return (

      <div className={style.App} >

        <h1> This is Header </h1>

        <p className={classes.join(" ")}>This is really working </p>


        <button
          className={btnClass}
          onClick={
            this.toggleContent
          } > Toggle Content </button>

        {personToggle}

      </div>

    );
  }
}
export default App;
