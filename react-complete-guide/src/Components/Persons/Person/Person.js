import React from 'react'
import style from "./Person.css"


const person = (props) => {
  return (
    <div className={style.Person} >
    <p onClick={props.click}> Hi my name is <b>{props.name}</b> and I 'M {props.age} years old</p>
    <p> {props.children} </p>
    <input type= "text" onChange = {props.changed} value={props.name} />
    </div>
  )

};

export default person;
