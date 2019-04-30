import React, {Component} from 'react';
import style from './App.css';
import Persons from '../Components/Persons/Persons'
import Cockpit from '../Components/Cockpit/Cockpit'
import WithClass from '../hoc/withClassForApp_js'


class App extends Component {
  constructor(props){
    super(props)
    console.log('[App.js] constructor called')
    this.state =  {
      person: [
        { id: '1', name: "w", age: 24 },
        { id: '2', name: "x", age: 33 },
        { id: '3', name: "y", age: 30 },
        { id: '4', name: "z", age: 20 },
      ],
      show: false,
      // counter:0
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log("[App.js] getDerivedStateFromPops")
    return state;
  }

  shouldComponentUpdate(nextprops, nextstate){
    console.log("[App.js] shouldComponentUpdate")
    //optimise the code by making the person render only if it change,not all the time
  //   if (nextprops.persons !== this.props.persons){
  //     return true
  //   }
  //   else{
  //   return false
  // }
  return true
}

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate")
  }

  componentWillUnmount(){
    console.log("[App.js] componentWillUnMount")
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
      { person: allPerson ,
        // counter:this.state.counter+1 //wrong way

      }
    )

//setting state using prevstate and updating it on the go
    // this.setState((prevState, props) => {
    //   return
    //   { person: allPerson,
    //     counter:prevState.counter+1   //right way
    //
    //   }

  }

  toggleContent = () => {
    const doesShow = this.state.show;
    this.setState({ show: !doesShow });

  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  render() {
    console.log("inside render fun")
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

      // <div className={style.App} >
      <WithClass classes={style.App}>
        <Cockpit
        title = {this.props.title}
        show = {this.state.show}
        personLength = {this.state.person.length}   //passing length not the person,for
        //optimization purpose  ...React.memo(Cocktail)
        clicked= {this.toggleContent}
        />
        {persons}

      </WithClass>
    );
  }
}
export default App;
