import React from 'react'

const Button = ({btnText, btnStyle, btnImageStyle, btnIcon, onClick, isDisabled=true, others}) => {
  return (
    <button 
      type="button"
      className={`btn btn-success ${btnStyle}`} 
      onClick={onClick} 
      {...others}
      disabled={isDisabled}
      >
        {btnText} {btnIcon}   
    </button>
  )
}

export default Button