import React, {useState} from 'react'
import {Select} from 'grommet'

const SelectOptions = ({placeholder, id, name, value, options}, rest, onChange) => {

    return(
        <Select
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        options={options}
        onChange={({ option }) => onChange(option)}
        {...rest}
      />
    )
}

export default SelectOptions