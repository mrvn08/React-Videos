import React from 'react';

const VideoDetails = ({selectedVideo, passedClass}) => {
    if (!selectedVideo) {
        return <div>Loading...</div>
    }

    return (
        <div className={`ui ${passedClass}`}>
            <div className="row">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/jFKAFj-GcXk" 
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