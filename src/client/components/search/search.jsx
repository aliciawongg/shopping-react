import React from 'react';

class SearchInput extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ""
        };
    }

    changeHandler = e => {
        //console.log("change handler: ", e.target.value)
        const bana = e.target.value
        console.log(bana)
        this.setState({input: bana});
        console.log('search input: '+this.state.input);
        this.props.search(this.state.input)
    }

    render () {
        console.log(this.state.input)
        return (
            <div>Search products
                <input value={this.state.input} onChange={this.changeHandler}/>
            </div>
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
                <p>List</p>
                <ul>{results}</ul>
            </div>
            )
    }
}

class Search extends React.Component {
    render() {
        return (
            <div>
                <SearchInput search={this.props.search}/>
                <SearchResult searchresult={this.props.searchresult}/>
            </div>
        );
    }
}

export default Search;



// <button onClick={this.props.doReq}>Search</button>