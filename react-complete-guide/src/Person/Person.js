import React from 'react'
import "./Person.css"
import Radium from 'radium'

const style = {
  '@media (min-width: 500px)':{
    width : "450px"
  }
}


const person = (props) => {
  return (
    <div className="Person" style={style}>
    <p onClick={props.click}> Hi my name is <b>{props.name}</b> and I 'M {props.age} years old</p>
    <p> {props.children} </p>
    <input type= "text" onChange = {props.changed} value={props.name} />
    </div>
  )

};

export default Radium(person);
