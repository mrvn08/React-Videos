import React from 'react';
import React from 'react-dom';
import SearchBar from './SearchBar';

export default class App extends React.Component{

    state = {video: []};

    onSearch = (searchTerm) => {
        const response = async () => {

        }

        this.setState({video: response});
    }

    render(){
        return (
            <div className="ui container">
                <div className="row">
                    <SearchBar onSearch={this.onSearch}/>
                </div>
                <div className="ui divided two column grid">
                    <VideoDetails className="seven wide column"/>
                    <VideoList className="three wide column"/>
                </div>
            </div>
        )
    }
}