import React from 'react';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';
import youtube from '../api/youtube';

export default class App extends React.Component{

    state = {
        videos: [],
        selectedVideo: null
    };

    onSearch = async (searchTerm) => {
        const response = await youtube.get('/search',{
            params: {
                q: searchTerm
            }
        })

        this.setState({videos: response.data.items});
    }

    onSelect = video => {
        this.setState({selectedVideo: video});
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onSearch={this.onSearch}/>
                <div className="ui hidden divider"></div>
                <div className="ui hidden divider"></div>
                <div className="ui grid">
                    <div className="ui row">
                        <VideoDetails 
                            selectedVideo={this.state.selectedVideo}
                            passedClass="ten wide column"
                        />
                        <VideoList 
                            videos={this.state.videos}
                            onVideoSelect={this.onSelect}
                            passedClass="six wide column"
                        />
                    </div>
                </div>
            </div>
        )
    }
}