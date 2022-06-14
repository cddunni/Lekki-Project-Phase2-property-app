import React from 'react'

const Button = ({btnText, btnStyle, btnImageStyle, btnIcon, onClick, others}) => {
  return (
    <button 
      type="button"
      className={`btn btn-success ${btnStyle}`} 
      onClick={onClick} 
      {...others}
      >
        {btnText} {btnIcon}   
    </button>
  )
}

export default Button