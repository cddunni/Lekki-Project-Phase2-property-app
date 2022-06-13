import React from 'react'

const InputField = ({label, showLabel=false, onChange, inputStyle, type, placeholder, isRequired=false, value, name}) => {

    return (
        <div className='w-50'>
            {
            showLabel && <label className="mb-2 text-sm font-medium">{label}</label>}
            <input
                type={type}
                className={`form-control ${inputStyle}`}
                placeholder={placeholder}
                required={isRequired}
                value={value}
                name={name}
                onChange={onChange}
              />
        </div>   
    )
  }

export default InputField