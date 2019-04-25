import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {

  return (

    <div className="UserOutput">

    <p> <b> {props.name} 1</b> The apps you are building with React Native aren't mobile web apps because React
    Native uses the same fundamental UI building blocks as regular iOS and Android apps.
    Instead of using Swift, Kotlin or Java, you are putting those building blocks together
    using JavaScript and React.</p>

    <p> <b> {props.name} 2</b> The apps you are building with React Native aren't mobile web apps because React
    Native uses the same fundamental UI building blocks as regular iOS and Android apps.
    Instead of using Swift, Kotlin or Java, you are putting those building blocks together
    using JavaScript and React.</p>


 </div>
  )


}

export default userOutput
