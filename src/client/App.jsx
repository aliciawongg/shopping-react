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
            //input: "",
            isLoaded: false,
            searchresult: []
            // selectedproduct: "",
            //cart: []
        };
    //this.changeHandler=this.changeHandler.bind(this)
        //this.doReq=this.doReq.bind(this)
        //this.getSearch=this.getSearch.bind(this)
    }




  //use componentdidmount here for ajax
    //getSearch = (text) => {
      componentDidMount() {
        fetch('http://localhost:3000/products/')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        searchresult: result.products
                    });
                }
                // (error) => {
                //     this.setState({
                //         isLoaded: true,
                //         error
                //     });
                // }
            )
    };

  // doReq(text){

  //   console.log("request");

  //   console.log(this.state.input)
  //   const banana = this.state.input
  //   console.log(banana)
  //   const appobj = this;

  //     var responseHandler = function() {
  //       //console.log("response text", this.responseText);
  //       //console.log("status text", this.statusText);
  //       //console.log("status code", this.status);
  //       const result = JSON.parse( this.responseText);
  //       console.log(result)

  //       appobj.setState({searchresult: result.products});
  //   };

  //   var request = new XMLHttpRequest();

  //   request.addEventListener("load", responseHandler);

  //   request.open("GET", "http://localhost:3000/products/"+banana);

  //   request.send();


  // }

    render() {
        //var {isLoaded, searchresult} = this.state;
            return (
                <div>
                    <Search

                        searchresult={this.state.searchresult} />
                </div>
            );

    }
}

export default hot(module)(App);

//getSearch={this.getSearch}