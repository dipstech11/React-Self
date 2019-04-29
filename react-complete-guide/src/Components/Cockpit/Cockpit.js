import React, {Component} from 'react';
import style from './Cockpit.css'

const cockpit = (props) => {
  const classes = []
  let btnClass = ''
  if (props.show){
    btnClass = style.Red
  }

  if (props.person.length > 3) {
    classes.push(style.red)
  }
  if (props.person.length > 1) {
    classes.push(style.bold)
  }




  return (
    <div className= {style.Cockpit}>
    <h1> This is Header </h1>

    <p className={classes.join(" ")}>This is really working </p>


    <button
      className={btnClass}
      onClick={
        props.clicked
      } > Toggle Content </button>

    </div>
  );
}

export default cockpit;
