import React from 'react'

const Buttons = (props) => {
  return (
    <div>
    {props.children}
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

export default Buttons
