import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Bind methods
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.incrementAndGreet = this.incrementAndGreet.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleSyntheticEvent = this.handleSyntheticEvent.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello() {
    console.log("Hello! This is a static message.");
    alert("Hello! This is a static message.");
  }

  incrementAndGreet() {
    this.increment();
    this.sayHello();
  }

  sayWelcome(message) {
    alert(message);
  }

  handleSyntheticEvent(e) {
    alert("I was clicked");
    console.log("Synthetic event object:", e);
  }

  render() {
    return (
      <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "20px" }}>
        <h2>Counter Example</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementAndGreet}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome!")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleSyntheticEvent}>OnPress</button>
      </div>
    );
  }
}

export default Counter;
