import React from 'react'

const Button = ({btnText, btnStyle, btnImageStyle, onClick }) => {
  return (
    <button type="button" className={`btn btn-success ${btnStyle}`} onClick={onClick}>
        {btnText}    
    </button>
  )
}

export default Button