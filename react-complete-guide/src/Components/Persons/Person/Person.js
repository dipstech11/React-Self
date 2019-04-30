import React, {Component} from 'react'
import style from "./Person.css"


class Person extends Component {
  render(){
  console.log("inside person")
  return (
    <div className={style.Person} >
    <p onClick={this.props.click}> Hi my name is <b>{this.props.name}</b> and I 'M {this.props.age} years old</p>
    <p> {this.props.children} </p>
    <input type= "text" onChange = {this.props.changed} value={this.props.name} />
    </div>
  )

};
}
export default Person;
