import React from 'react'

const Button = ({btnText, btnStyle, btnImageStyle }) => {
  return (
    <button type="button" className={`btn btn-success ${btnStyle}`} >
        {btnText}    
    </button>
  )
}

export default Button