import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function UserGreeting(props){
  return <h1>Welocme back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign in</h1>
}


function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting/>;
  }
  return <GuestGreeting/>;
}



function LoginButton(props){
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

class LoginControl extends React.Component {
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

   handleLogoutClick =() => {
     this.setState({isLoggedIn: false});
   }

   render(){
      const isLoggedIn = this.state.isLoggedIn;
      return(
        <div>
          <Greeting isLoggedIn={isLoggedIn}/>
          {isLoggedIn
           ? <LogoutButton onClick={this.handleLogoutClick}/>
           : <LoginButton onClick={this.handleLoginClick}/>
          }
        </div>
      )
   }

}

function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
      <h2>
        U have {unreadMessages.length} unread messages.
      </h2>
      }
    </div>
  );
}


const messages = ['React', 'Re: React', 'Re:Re: React'];

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit = (event)=> {
    alert("A name was changed to" + this.state.value);
    event.preventDefault();
  } 

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
    );
  }

  
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  handleChange(e) {
    this.setState({temperature: e.target.value});
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

ReactDOM.render(
  <div>
 <LoginControl/>
  <Mailbox unreadMessages={messages}/>
  <Form/>
  <Calculator/>
  </div>,
  document.getElementById('root')
);


