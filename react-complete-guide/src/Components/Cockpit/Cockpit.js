import React, {useEffect} from 'react';
import style from './Cockpit.css'

const Cockpit = (props) => {
  //if ur using it as a functional component, it should start with a capital letter
  useEffect(() =>{
    console.log("[cockpit.js] userEffect")
    return () =>{  ////work for clean up
      console.log("[cockpit.js] cleaning work in cockpit")
    }
  })
  const classes = []
  let btnClass = ''
  if (props.show){
    btnClass = style.Red
  }

  if (props.personLength > 3) {
    classes.push(style.red)
  }
  if (props.personLength > 1) {
    classes.push(style.bold)
  }




  return (
    <div className= {style.Cockpit}>
    <h1> {props.title} </h1>

    <p className={classes.join(" ")}>This is really working </p>


    <button
      className={btnClass}
      onClick={
        props.clicked
      } > Toggle Content </button>

    </div>
  );
}

export default React.memo(Cockpit);  //only render this when Cockpit changes,not for other
