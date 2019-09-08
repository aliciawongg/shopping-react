import React from 'react';

class SearchInput extends React.Component {
     render () {
        console.log(this.props.input)
        return (
            <form>
                <input onChange={this.props.changeHandler} value={this.props.input}/>
                <button onClick={this.props.doReq}>Search</button>
            </form>
        )
    }

}

class SearchResult extends React.Component {
    render() {
        console.log(this.props.searchresult)
        const results = this.props.searchresult.map((item, index) => {
            return (
                <li key={index}>{item.name} - {item.price}
                </li>
                )
        })
        return(
            <div>
                <ul>{results}</ul>
            </div>
            )
    }
}

class Search extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //       input : "",
  //       searchresult : []
  //   };
  // }

   render() {
    return (
      <div>
        <SearchInput changeHandler={this.props.changeHandler} input={this.props.input} doReq={this.props.doReq}/>
        <SearchResult searchresult={this.props.searchresult}/>
      </div>
    );
  }
}

export default Search;