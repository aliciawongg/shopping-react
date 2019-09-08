import React from 'react';
import { hot } from 'react-hot-loader';

// import Counter from './components/counter/counter';
// import Form from './components/form/form';
// import Cart from './components/cart/cart';
// import ProductDisplay from './components/productdisplay/productdisplay';
import Search from './components/search/search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      searchresult: []
    };
     console.log(this.state.searchresult)
  this.changeHandler=this.changeHandler.bind(this)
  this.doReq=this.doReq.bind(this)
  }


  changeHandler(event){
    console.log("change handler: ", event.target.value)
   // console.log(event.target.value)
    this.setState({input: event.target.value});
    console.log('search input: '+this.state.input);
  }

  //use componentdidmount here for ajax
  // doReq() {
  //   fetch("https://localhost:3000/products")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           isLoaded: true,
  //           searchresults: result.products
  //         });
  //         console.log(result)
  //       }

  //       // (error) => {
  //       //   this.setState({
  //       //     isLoaded: true,
  //       //     error
  //       //   });
  //       // }
  //     )

  // }

  doReq(text){

    console.log("request");

    console.log(this.state.input)
    const banana = this.state.input
    console.log(banana)
    const appobj = this;

      var responseHandler = function() {
        //console.log("response text", this.responseText);
        //console.log("status text", this.statusText);
        //console.log("status code", this.status);
        const result = JSON.parse( this.responseText);
        console.log(result)

        appobj.setState({searchresult: result.products});
    };

    var request = new XMLHttpRequest();

    request.addEventListener("load", responseHandler);

    request.open("GET", "http://localhost:3000/products/"+banana);

    request.send();


  }

  render() {
    //console.log(this.state.searchresult)
    return (
      <div>
        <Search changeHandler={this.changeHandler} doReq={this.doReq()} input={this.state.input} searchresult={this.state.searchresult} />
      </div>
    );
  }
}

export default hot(module)(App);