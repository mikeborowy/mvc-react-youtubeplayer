import * as React from 'react';

const VideoDetails = (propsObj) => {

    const { dataSelectedVideo } = propsObj;

    if (!dataSelectedVideo)
    {
        return <div>Loading...</div>
    }

    const videoId = dataSelectedVideo.id.videoId; 
    const title = dataSelectedVideo.snippet.title; 
    const desc = dataSelectedVideo.snippet.description;
    const videoURL = `http://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoURL}></iframe>
            </div>
            <div className="details">
                <div>{title}</div>
                <div>{desc}</div>
            </div>
        </div>
    )
}

export default VideoDetails