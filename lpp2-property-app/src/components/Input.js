import React from 'react'

const InputField = ({label, showLabel=false, onChange, inputStyle, type, placeholder, isRequired=false, value, name, others}) => {

    return (
      // <div className='row'>
        <div className='col-md-6 col-12 mt-3'>
            {
            showLabel && <label className="text-sm font-medium">{label}</label>}
            <input
                type={type}
                className={`form-control ${inputStyle}`}
                placeholder={placeholder}
                required={isRequired}
                value={value}
                {...others}
                name={name}
                onChange={onChange}
              />
        </div>   
      // </div>
    )
  }

export default InputField