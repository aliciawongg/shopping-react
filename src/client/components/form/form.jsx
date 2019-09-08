import React from 'react';

import styles from './style.scss';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      monkey: 'haha',
      counter: 0
    };
  }

    doReq(){

    console.log("request");
    this.setState({counter: this.state.counter+1});

    const banana = this;

    var responseHandler = function() {
        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);
        const result = JSON.parse( this.responseText);

        banana.setState({products: result});
    };

    var request = new XMLHttpRequest();

    request.addEventListener("load", responseHandler);

    request.open("GET", "http://localhost:3000/products");

    request.send();
  }

  render() {
    return (
      <div>
        <h3>{this.state.counter}</h3>
        <p>
            <button onClick={() => {this.doReq()}}>make AJAX request</button>
        </p>
        <p>{this.state.monkey}</p>
        <input className={styles.name} />
      </div>
    );
  }
}

export default Form;