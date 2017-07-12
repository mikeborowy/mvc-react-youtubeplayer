import * as React from 'react';
import VideoListItem from './video_list_item';

/**
* propsObj:
* @param dataVideos
* @param onVideoSelect
*/
const VideosList = (props) => {

    //destruct propsObj param
    const { dataVideos, onVideoSelect } = props;

    //return HTML
    return (
        <ul className="col-md-4 list-group">

            {dataVideos.map(function (videoDataItem, i) {

                return <VideoListItem
                    key={videoDataItem.etag}
                    dataId={i}
                    dataVideo={videoDataItem}
                    onVideoSelect={ onVideoSelect } // --> downway data binding
                />
            })}

        </ul>
    );
}

export default VideosList;