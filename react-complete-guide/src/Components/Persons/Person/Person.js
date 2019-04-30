import React, {Component} from 'react'
import style from "./Person.css"
import PropTypes from 'prop-types'


class Person extends Component {
  constructor(){
    super()
    this.inputElementRef = React.createRef()
  }

  componentDidMount(){
    this.inputElementRef.current.focus()
  }




  render(){
  console.log("inside person")
  return (
    <div className={style.Person} >
    <p onClick={this.props.click}> Hi my name is <b>{this.props.name}</b> and I 'M {this.props.age} years old</p>
    <p> {this.props.children} </p>
    <input type= "text" 
    ref ={this.inputElementRef}
    onChange = {this.props.changed}
    value={this.props.name} />
    </div>
  )

};
}

Person.propTypes = {
  click:PropTypes.func,
  age : PropTypes.number,
  name : PropTypes.string,
  changed: PropTypes.func

}
export default Person;
