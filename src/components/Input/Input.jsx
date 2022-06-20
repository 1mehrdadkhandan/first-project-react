import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
const InputE = ({ className, type, label, value, handelChage, name, error }) => {

  return (
    <div className={className}>

      <input
        type={type}
        id={name}
        value={value}
        onBlur={handelChage}
        onChange={handelChage} />

      <label htmlFor={name}>
        {error ? <BiErrorCircle /> : null} {label} :
      </label>
    </div>

  )
}

export default InputE