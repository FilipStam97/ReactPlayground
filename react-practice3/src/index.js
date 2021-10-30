import React from 'react';
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

ReactDOM.render(
  <div>
 <LoginControl/>
  <Mailbox unreadMessages={messages}/>
  </div>,
  document.getElementById('root')
);


