import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({videos, onVideoSelect, passedClass}) =>{
    const renderedVideos = videos.map(video =>{
        return <VideoCard key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    });
    return (
        <div className={`ui cards ${passedClass}`}>
            {renderedVideos}
        </div>
    );
}

export default VideoList;