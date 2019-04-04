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
                <SearchBar onSearch={this.onSearch}/>
                <div class="ui hidden divider"></div>
                <div class="ui hidden divider"></div>
                <div className="ui divided two column grid">
                    <VideoDetails passedClass="ten wide column"/>
                    <VideoList passedClass="six wide column"/>
                </div>
            </div>
        )
    }
}