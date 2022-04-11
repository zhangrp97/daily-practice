// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Hook from './hook.jsx'
import Child from './class.jsx'
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0,
      count: 0,
      score: 10000,
    }
  }
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log('1>>', this.state.val);  // 0

    // this.setState({val: this.state.val + 1}); // 0
    // console.log('2>>', this.state.val);

    // setTimeout(() => {
    //   this.setState({val: this.state.val + 1}); // 2
    //   console.log('3>>', this.state.val);

    //   this.setState({val: this.state.val + 1}); // 3
    //   console.log('4>>', this.state.val);
    // }, 0)
  }
  handleCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  handleScore = () => {
    this.setState({
      score: this.state.score + 10000
    })
  }
  render() {
    const { count, score } = this.state;
    return (
      <div>
        <p>class:</p>
        <p>you click {count} times</p>
            <button onClick={this.handleCount}>Click me</button>
            <br/>
            <p>new score: {score}</p>
            <button onClick={this.handleScore}>Click score</button>

        <p>------------------------------</p>
        <p>children: </p>
        <Child />
        <p>------------------------------</p>
        <p>hook:</p>

        <Hook />
      </div>
    );
  };
}


export default Example;
