import React from 'react'

const FormField = ({ label, value, onChange, name, type }) => {
  return (
    <div>
      <label>
        {label}:
        {type === 'textArea' ?
          <textarea
            name={name}
            value={value}
            onChange={onChange}
          />
          :
          <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
          />}
      </label>
    </div>
  )
}

export default FormField