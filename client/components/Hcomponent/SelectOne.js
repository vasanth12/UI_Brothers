import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './SelectOne.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


class SelectOne extends React.Component{
  constructor(){
    super();
    this.state = {
      options:[
        { value: 'one', label: 'One' },
        { value: 'two', label: 'Two' }
      ],
      value:'',
    }
    this.logChange = this.logChange.bind(this);  
    this.logChange();

  }
  logChange(val){
    console.log('coming here');
    console.log("Selected: " + JSON.stringify(val));
  }
  render(){
    return(
      <div>
      <Select menuContainerStyle={{ zIndex: 5 }}
         name="form-field-name"
         value={this.state.value}
         options={this.state.options}
         onChange={this.logChange}

        />
      </div>
    );
  }
}

export default SelectOne;
