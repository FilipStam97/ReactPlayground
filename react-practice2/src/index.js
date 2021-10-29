import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function WelcomeFun(props) {
  return <h1>Hello, {props.name} </h1>
}

class WelcomeClass extends React.Component {
  render() {
    return(
      <h1>Hello, {this.props.name}</h1>
    )
  }
}

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date : new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
     () => this.tick(),
     1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
     date: new Date() 
    });
  }

  render() {
    return (
      <div>
        <h1>Hello Clock</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );

  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((perviousState) => ({
      isToggleOn: !perviousState.isToggleOn
    }));
  }

  render() {
    return(
      <button onClick={this.handleClick}> 
          {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }

}

class LoggingButton extends React.Component {
  handleClick = () => {
    console.log("this is", this);
    //class fields syntax
  }

  handleClick2() {
    console.log("this is", this);
    // The problem with this syntax is that a different callback is created each time the LoggingButton renders. 
    // In most cases, this is fine. However, if this callback is passed as a prop to lower components, 
    // those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, 
    // to avoid this sort of performance problem.
  }

  deleteRow(id,e) {
    console.log(id, e);
  }


  render() {
    return(
      <>
      <button onClick={this.handleClick}>
        Click me
      </button>
      <button onClick={() => this.handleClick2()}>
        Click me 2
      </button>
      <button onClick={(e) => this.deleteRow(1122,e)}>
        DeleteRow
      </button>
      <button onClick={this.deleteRow.bind(this,3344)}>
      DeleteRow2
      </button>
      </>
    );
    //Inside a loop, it is common to want to pass an extra parameter to an event handler. For example, if id is the row ID, either of the following would work
    //The above two lines are equivalent, and use arrow functions and Function.prototype.bind respectively.
    //In both cases, the e argument representing the React event will be passed as a second argument after the ID.
    // With an arrow function, we have to pass it explicitly, but with bind any further arguments are automatically forwarded.
  }
}


const App =() => {
  return(
    <div>
      <Clock/>
      <Clock/>
      <Toggle/>
      <LoggingButton/>
    </div>
  )
 
}


ReactDOM.render(
  <App/>,
 document.getElementById('root')

);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

