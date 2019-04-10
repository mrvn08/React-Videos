import React from 'react';

const VideoDetails = ({selectedVideo, passedClass}) => {
    if (!selectedVideo) {
        return <div>Loading...</div>
    }

    return (
        <div className={`ui ${passedClass}`}>
            <div className="ui embed">
                <iframe 
                    src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </div>
            <div className="ui segment">
                <div className="content">
                    <h4 className="ui header">{selectedVideo.snippet.title}</h4>
                    <p>{selectedVideo.snippet.description}</p>
                </div>
            </div>
        </div>
    );
}

export default VideoDetails;