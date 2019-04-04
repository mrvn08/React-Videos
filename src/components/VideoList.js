import React from 'react';
import VideoCard from './VideoCard';

const VideoList = (props) =>{
    return (
        <div className={`ui cards ${props.passedClass}`}>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
        </div>
    );
}

export default VideoList;