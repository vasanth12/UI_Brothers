import React from 'react';
import PropTypes from 'prop-types';

const TextFeild = ({value, type, name, placeholder,onChange}) =>{
  return(
    <div>
      <input
        value = {value}
        type = {type}
        name={name}
        placeholder = {placeholder}
        onChange= {onChange}
      />
    </div>
  );
}
TextFeild.PropTypes = {
   value: React.PropTypes.string.isRequired,
   name: React.PropTypes.string.isRequired,
   type: React.PropTypes.string.isRequired,
   placeholder:React.PropTypes.string.isRequired,
   onChange:React.PropTypes.func.isRequired
}
TextFeild.defaultProps = {
  type:"text"
}

export default TextFeild;
