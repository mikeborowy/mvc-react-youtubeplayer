import * as React from 'react';

/**
* props:
* @param dataId
* @param dataVideo
* @param onVideoSelect
*/
const VideoListItem = (props) => {

    //destruct propsObj param
    const { dataId, dataVideo, onVideoSelect } = props;

    //local vars
    let title = dataVideo.snippet.title;
    let imgURL = dataVideo.snippet.thumbnails.default.url;

    function videoSelectCallbackFn(evt) {

        console.log(evt);
        onVideoSelect(dataVideo);
    }

    //return HTML
    return (
        <li className="list-group-item"
            onClick={(evt) => { videoSelectCallbackFn(evt) } }>
            <div className="video-item media">
                <div className="media-left">
                    <img className="media-object" src={imgURL} />
                </div>
                <div className="media-right">
                    <div className="media-heading">
                        {dataId}.{title}
                    </div>
                </div>
            </div>
        </li>//() => onVideoSelect(dataVideo);
    );
}

export default VideoListItem;