import React from 'react';

export default class SearchBar extends React.Component {
    state = { searchTerm: '' };

    textChange = (event) => {
        this.setState({searchTerm: event.target.value});
    }

    searchSubmit = event => {
        event.preventDefault();
        this.props.onSearch(this.state.searchTerm);
    }

    render(){
        return (
            <div className="ui segment"> 
                <form className="ui form search" onSubmit={this.searchSubmit}> 
                    <h1>Video Search</h1>
                    <div className="field">
                        <div className="ui icon input">
                            <input onChange={this.textChange} className="prompt" type="text" placeholder="Search..."/>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form> 
            </div>
        );
    }
}