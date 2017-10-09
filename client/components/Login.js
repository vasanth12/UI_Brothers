import React, {component} from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from "react-router";
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Validation from 'react-validation';
import DatePicker from 'react-bootstrap-date-picker';
import moment from 'moment';
import 'react-infinite-calendar/styles.css';
import '../components/css/login.css';
import TextFeild from './TextFeild';

class Login extends React.Component{
  render(){
    return(
      <div>{/*returncontent*/}
        <div className="header-wrap">{/*header*/}
          <Header />
        </div>{/*end header*/}
        <div className="content-wrap clearfix">{/*content-wrap*/}
          <div className="content-main center-page">
            <div className="content-left clearfix">{/*content-left*/}
              <div className="header-text textalign">
                <h4 className="textalign">Login</h4>
              </div>
              <div className="center clearfix">
                <Userenter />
              </div>
            </div> {/*end content-left*/}
            <div className="content-right"> {/*content-right*/}
            <div className="header-text">
              <h4 className="textalign">Register</h4>
            </div>
            <div className="center clearfix">
                <Userform />
            </div>
            </div>
          </div> {/*end content-right*/}
        </div> {/*end content-wrap*/}
        <div className="footer clearfix">{/*footer*/}
          <Footer />
        </div>{/*end footer*/}
      {/*end returncontent*/}</div>
    );
  }
}
class Userenter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      password:''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleNameChange(e){
    console.log('coming here to handlechangeName');
    this.setState({name:e.target.value});
    console.log(e.target.value);
  }

  handlePasswordChange(e){
    console.log('coming to handlepasswordchange');
    this.setState({password:e.target.value});
    console.log(e.target.value);
  }

  onSubmit(e){
    e.preventDefault();
    console.log(this.state);
  }
  login(e){
    console.log('coming here to login');
    e.preventDefault();
    console.log(this.state);
    console.log(this.state.name);
    console.log(this.state.password);
      // browserHistory.push("/Login");
  }

  render(){
    return(
      <div className="login">
        <form action="" method="">
          <div>
          <TextFeild
                 value={this.state.name}
                 type="text"
                 name="name"
                 placeholder="Username"
                 autoComplete="off"
                 onChange = {this.handleNameChange.bind(this)}
          />
          </div>
          <div>
          <TextFeild
                value={this.state.password}
                type="password"
                name="password"
                placeholder="password"
                autoComplete="off"
                onChange = {this.handlePasswordChange.bind(this)}
          />
          </div>
          <div>
            <button className="logreg" onClick = {this.login.bind(this)}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

class Userform extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        startDate: moment(this.props.value,"MM-DD-YYYY"),
        firstname:'',
        lastname:'',
        email:'',
        phone:'',
        password:'',
        repassword:''
    }

  }

  handleFirstName(e){
    console.log('coming to handleFirstName function');
    this.setState({firstname:e.target.value});
    console.log(e.target.value);
  }

  handleLastNameChange(e){
    console.log('coming to handleLastNameChange');
    this.setState({lastname:e.target.value});
    console.log(e.target.value);
  }
  handleEmailChange(e){
    console.log('coming to handleEmailChange');
    this.setState({email:e.target.value});
    console.log(e.target.value);
  }

  handlePhoneChange(e){
    console.log('coming here handlePhoneChange');
    this.setState({phone:e.target.value});
    console.log(e.target.value);
  }

  handleRegPasswordChange(e){
    console.log('coming to handleRegPasswordChange');
    this.setState({password:e.target.value});
    console.log(e.target.value);
  }
  
  handleChange(date){
    console.log(date);
  }

  handleRePassword(e){
    console.log('coming to handleRePassword');
    this.setState({repassword:e.target.value});
    console.log(e.target.value);
  }

  register(e){
    e.preventDefault();
    console.log(this.state);
    console.log(this.state.firstname);
    console.log(this.state.lastname);
    console.log(this.state.email);
    console.log(this.state.phone);

  }

  render(){
    return(
      <div className="register">
      <form action="" method="">
      <div>
        <TextFeild

          value={this.state.firstname}
          type="text"
          name="firstname"
          placeholder="Firstname"
          autoComplete="off"
          onChange = {this.handleFirstName.bind(this)}

        />
      </div>
      <div>
        <TextFeild

          value={this.state.lastname}
          type="text"
          name="lastname"
          placeholder="Lastname"
          onChange = {this.handleLastNameChange.bind(this)}
        />
      </div>
      <div>
        <DatePicker
          placeholderText="Click to select a date"
          showYearDropdown
          selected={this.state.startDate}
          onChange={this.handleChange}
          placeholder = "DOB"
          // onChange = {this.handleDateChange.bind(this)}
         />
      </div>
      <div>
        <TextFeild

          value={this.state.email}
          type="email"
          name="email"
          placeholder="Email"
          onChange = {this.handleEmailChange.bind(this)}
         />
      </div>
      <div>
        <TextFeild

          value={this.state.phone}
          type="tel"
          placeholder="Phone"
          name="phone"
          max="10"
          onChange = {this.handlePhoneChange.bind(this)}
        />
      </div>
      <div>
        <TextFeild

          value={this.state.password}
          type="password"
          name="password"
          placeholder="password"
          onChange = {this.handleRegPasswordChange.bind(this)}
        />
      </div>
      <div>
        <TextFeild

          value={this.state.repassword}
          type="password"
          name="repassword"
          placeholder="Re-password"
          onChange = {this.handleRePassword.bind(this)}
          />
      </div>
      <div>
        <button className="logreg" onClick = {this.register.bind(this)}>Register</button>{/*you need to use browserHistory.push function https://www.youtube.com/watch?v=5pt_igBTCsI(youtube link)*/}
      </div>
      </form>
      </div>
    );
  }
}

 Userform.PropTypes = {
   userSignupRequest: React.PropTypes.func.isRequired
 }

export default Login;
