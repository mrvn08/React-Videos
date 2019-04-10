import React from 'react';
import './VideoCard.css';

const VideoCard = ({video, onVideoSelect}) => {
    return (
        <div className="video-card item" onClick={() => onVideoSelect}>
            <img className='ui image' src={video.snippet.thumbnails.medium.url}/>
            <div className="content">
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoCard;