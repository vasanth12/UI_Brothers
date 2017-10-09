import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import '../components/css/Form.css';


class Container extends React.Component{
  constructor(props){
    super(props);
    const chipjson = [
      {
          id:-3,
          name:"Data1"
      },
      {
        id:-2,
        name:"Data2"
      },
      {
        id:-1,
        name:"Data3"
      }
    ];

    const localData = localStorage.todos && JSON.parse(localStorage.todos);
    this.state = {
      data:chipjson || localData
    }
    this.handleChange = this.handleChange.bind(this);
    this.removeTodo  = this.removeTodo.bind(this);
  }
  handleChange(value){
    console.log("coming to form parent");
    console.log(value);
    let id;
    if(typeof(Storage) !== "undefined"){
      // console.log('coming to storage');
      id = Number(localStorage.count);
      localStorage.count = Number(localStorage.count)+1;
    }else{
      // console.log('coming to default');
      id = window.id++;
    }
    const todo = {
      id:id,
      name:value
    }
    console.log(todo);
    // this.state.chipjson.push(todo);
    // console.log(this.state.chipjson.name);

    //correct way
    var chipjsonone = this.state.data.slice();
    chipjsonone.push(todo);
    this.setState({ data: chipjsonone }, () =>{this.updateLocalStorage()})
    // console.log(this.state.data);
  }

  updateLocalStorage(){
    console.log('coming to updatelocalstorage function');
    if(typeof(Storage) !== "undefined"){
      localStorage.todos = JSON.stringify(this.state.data);
    }
  }

  componentDidMount(){
    localStorage.clear();
    if(typeof(Storage)!== "undefined"){
        if(!localStorage.todos){
          localStorage.todos = JSON.stringify(this.state.data);
        }
        if(!localStorage.count){
          localStorage.count = 0;
        }
    }
    else{
      window.id=0;
    }
  }

  removeTodo(id){
    console.log('coming to removeTodo');
    console.log(id);
    const chipplus = this.state.data.filter(
      (todo)=>{
        if(todo.id !== id){
          return todo;
        }
      });

      this.setState({data:chipplus},() =>{this.updateLocalStorage()});
  }

  render(){
    return(
      <div className="parent">
        <div className="search-wrap">
          <Form handleChange={this.handleChange}/>
        </div>
        <div className="Chipplus-wrap">
          <ChipPlus todos={this.state.data} remove={this.removeTodo}/>
        </div>
      </div>
    );
  }
}

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }
  handleSearchChange(e){
    console.log('coming here to handlechange');
    this.setState({value:e.target.value});
    console.log(this.state.value);
  }
  buttonClick(e){
    e.preventDefault();
    if(this.state.value !== ""){
      this.props.handleChange(this.state.value);
      this.setState({value:""});
      this.placeholder = "Search";
    }
  }

  render(){
    return(
      <div>
        <input className="fosearch"
         type="search"
         placeholder="Search"
         autoComplete="off"
         value={this.state.value}
         onChange={this.handleSearchChange.bind(this)}
         />
        <button className="fosrhbutton" onClick={this.buttonClick.bind(this)}>+</button>
      </div>
    );
  }
}

const ChipPlus = ({todos,remove}) =>{
  console.log(todos);
  console.log(remove);
  if(todos.length > 0){
    console.log('coming to if condition');
    var allTodo = todos.map( (todo,id) => {return(<div key={id} onClick={()=>remove(todo.id)} className="chipplus"><span>{todo.name}</span><span className="glyphicon glyphicon-plus-sign"></span></div>); });
  }
  console.log("alltodos");
  console.log(allTodo);
    return(
        <div>
          {allTodo}
        </div>
      );
}

const handleRemoveKey = (id) => (e)=>{
  e.preventDefault();
  console.log('coming to handleremovekey');
  console.log(id);
  remove(alltodo.id);
}

// https://stackoverflow.com/questions/39260595/event-handlers-in-react-stateless-components
// https://stackoverflow.com/questions/41447123/how-to-pass-an-object-as-props-in-a-map-function-in-react


export default Container;
