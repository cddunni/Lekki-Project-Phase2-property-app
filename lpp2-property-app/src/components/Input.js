import React from 'react'

const InputField = ({label, showLabel=false, inputStyle, type, placeholder, isRequired=false, value}) => {

    return (
        <div className='w-50'>
            {
            showLabel && <label className="text-white mb-1.5 text-sm font-medium">{label}</label>}
            <input
                type={type}
                className={`form-control ${inputStyle}`}
                placeholder={placeholder}
                required={isRequired}
                value={value}
                // showLabel={showLabel}
              />
        </div>   
    )
  }

export default InputField