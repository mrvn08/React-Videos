import React from 'react';
import ReactDOM from 'react-DOM';

export default class VideoDetails extends React.Component{
    render(){
        return (
            <div className="ui">
                <div className="row">
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/jFKAFj-GcXk" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <div class="ui card">
                    <div class="content">
                        <p>Eric butterbean 's greatest hits and highlights brought to you by boxing legends tv</p>
                        <p>This is an unreleased video from the boxing legends tv archives. The original was supposed to feature on the main channel late 2018 but was scrapped at last minute</p>
                    </div>
                </div>
            </div>
        )
    }
}