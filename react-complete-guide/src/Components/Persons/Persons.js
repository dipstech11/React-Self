import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent{
  static getUpdatedStateFromPops(pops, state){
    console.log("inside getUpdatedStateFromProps")
    return state
    }

//No need of this because we r extending pureComponent, which by default define 
//the shouldComponentUpdate for us
  // shouldComponentUpdate(nextprops, nextstate){
  //   console.log("inside shouldComponentUpdate")
  //   return true
  //   }

  getSnapshotBeforeUpdate(prevprops, prevstate){
    console.log("inside getSnapshotBeforeUpdate")
    return {message:"Snapshot"}
  }

  componentDidUpdate(props, state, snapshot){
    console.log('inside ComponentWillUpdate')
    console.log(snapshot)
  }




render(){
  console.log("inside Persons.js")
  return this.props.persons.map((p, index) => {
    return <Person
      name={p.name}
      age={p.age}
      key={p.id}
      click={() => this.props.clicked(index)}
      changed={(event) => this.props.changed(event, p.id)} /> }
)
}
}

export default Persons;
