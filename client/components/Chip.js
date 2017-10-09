import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import '../components/css/Form.css';
var TextButtonOneJson = require("json!./textButtonOneJson.json");


class Chip extends React.Component{
  constructor(){
    super();
    const chip = [{name:"Data 1",id:0}];
    this.state = {
      chip:chip
    }
    this.handleChipPlus = this.handleChipPlus.bind(this);
    this.remove = this.remove.bind(this);
  }
  handleChipPlus(name,id){
    console.log('coming to parent');

    const chip = {
      name:name,
      id:id
    }

    var chipdata= this.state.chip.slice();
    chipdata.push(chip);
    this.setState({chip:chipdata});
    console.log(this.state.chip);
  }
  remove(id){
    console.log('coming to remove statement');
    const remove = this.state.chip.filter((remove)=>{if(remove.id != id){return remove;}});
    this.setState({chip:remove});
  }
  render(){
    return(
      <div>
        <hr className="mrr"></hr>
        <h4>Tcc</h4>
        <hr className="mrr"></hr>
        <div className="parent">
        {_.times(TextButtonOneJson.length, i =>
              <ChipPlus key={i} handleChipPlus={this.handleChipPlus}  name={TextButtonOneJson[i].name} id={TextButtonOneJson[i].id}/>
        )}
        </div>
        <div className="parent">
          <ChipMinus data={this.state.chip} remove={this.remove}/>
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
  }
  handleChipPlus(name,id){
    console.log("coming here to handlechipplis");
    console.log(name);
    console.log(id);
    this.props.handleChipPlus(name,id);
    this.setState({showReply: !this.state.showReply})
  }

  render(){
    return(
      <div className="chipplus" onClick={()=>this.handleChipPlus(this.props.name,this.props.id)}>
        <span>{this.props.name}</span>
        <span className="glyphicon glyphicon-plus-sign"></span>
        {this.state.ShowReply && <ChipMinus />}
      </div>
    );
  }
}

const ChipMinus = ({data,remove}) =>{
  var chipMinusData=[];
    console.log(data);
    chipMinusData = data.map((data,index)=>{return(<div key={index} className="chipminus" onClick={()=>remove(data.id)}><span>{data.name}</span><span className="glyphicon glyphicon-remove-sign"></span></div>);});
    console.log('chipMinusData-----------');
    console.log(chipMinusData);
    return(
      <div>
      {chipMinusData}
      </div>
    );
}


export default Chip;
