import React from 'react';
import VideoCard from './VideoCard';

const VideoList = (props) =>{
    return (
        <div className="ui cards">
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    );
}

export default VideoList;