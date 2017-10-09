import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import '../components/css/Form.css';
var TextButtonOneJson = require("json!./TextButtonOneJson.json");

// https://stackoverflow.com/questions/44279355/reactjs-transferring-the-data-between-two-componen

class Chip extends React.Component{
  constructor(){
    super();
    const chip = [{}];
    this.state = {
    chip:chip
    }
    this.chipSelected = this.chipSelected.bind(this);
  }
  chipSelected(id,name){
    console.log("coming to parent");
    console.log(id);
    console.log(name);

    const chip = {
      id:id,
      name:name
    }
    console.log(chip);
    var chipplus = this.state.chip.slice();
    chipplus.push(chip);

    this.setState({chip:chipplus});
    console.log(this.state.chip);
  }
  render(){
    return(
      <div className="parent">
        <div>
            {_.times(TextButtonOneJson.length, i =>
              <ChipPlus  chipSelected={this.chipSelected} key={i} index={TextButtonOneJson[i].id} name={TextButtonOneJson[i].name}/>
            )}
        </div>
        <div>
          <ChipMinus name={this.state.chip}/>
        </div>
      </div>
    );
  }
}

class ChipPlus extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      ShowReply:false
    }
    // this.chipSelected = this.chipSelected.bind(this);
  }
  chipSelected(id, name){
    // e.preventDefault();
    console.log(name);
    console.log('coming here to chipselected'+ id);
    this.props.chipSelected(id,name);
  }
  render(){
    return(
      <div className="chipplus" onClick={ ()=> this.chipSelected(this.props.index,this.props.name)}>
        <span>{this.props.name}</span><span className="glyphicon glyphicon-plus-sign"></span>
        {this.state.ShowReply}
      </div>
    );
  }
}

class ChipMinus extends React.Component{
  constructor(props){
    super(props);
    let name=[];
     name  = this.props.name;
    console.log(name);
    this.state ={
      showReply:false
    }
  }
  render(){
    console.log("coming to child");
    console.log(this.name);
    return(
      <div className="chipminus">
        <span>1</span><span className="glyphicon glyphicon-minus-sign"></span>{this.state.showReply}
      </div>
    );
  }
}

export default Chip;
