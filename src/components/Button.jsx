import React from 'react'

const Button = (props) => {
  return (
    <button >{props.title}</button>
  )
}
Button.defaultProps = {
    title:'Button',
}

export default Button