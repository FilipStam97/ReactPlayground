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

const App =() => {
  return(
    <div>
    <h2>Hello App</h2>
    <WelcomeFun name="Functional component"/>
    <WelcomeFun name="Functional component2"/>
    <WelcomeClass name="Class component"/>
    <WelcomeClass name="Class component2"/>

    </div>
  );
}

ReactDOM.render(
   <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

