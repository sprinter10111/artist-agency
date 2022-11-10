import * as React from 'react'


const Greeting = (props) => {
    return (
      <p>Hi {props.name}!</p>
    )
  }


 //Renderen van de <Greeting> component

const SayHello = () => {
  return (
    <div>
      <Greeting name="Megan" />
      <Greeting name="Obinna" />
      <Greeting name="Generosa" />
    </div>
  )
}

  export default SayHello