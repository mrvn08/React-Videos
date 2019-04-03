import React from 'react';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

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