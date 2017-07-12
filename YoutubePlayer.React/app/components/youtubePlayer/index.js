import * as React from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
//YoutUbe Components
import SearchBar from './search_bar';
import VideosList from './video_list';
import VideoDetails from './video_details';

//global vars
const API_KEY = 'AIzaSyD4UO4mm5j3jLFFapyCeR79sUV8hYORq64';
const DEBUG_MODE = true;

class YouTubePlayer extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            st_videos: [],
            st_selectedVideo: null
        }

        //component functions bindings
        this.selectVideoFn = this.selectVideoFn.bind(this);
        this.videoSearchFn = this.videoSearchFn.bind(this);

        this.videoSearchFn('terminator');
    }


    selectVideoFn(selectedVideo) {
        this.setState({ st_selectedVideo: selectedVideo })
    }

    videoSearchFn(term) {

        //yt ajax call
        YTSearch({ key: API_KEY, term: term }, (videos) => {

            if (this.props.debugMode) console.log(this.state.st_videos);

            this.setState({
                st_videos: videos,
                st_selectedVideo: videos[0]
            });
        })
    }

    render() {

        const videoSearch = _.debounce(term => this.videoSearchFn(term), 300);

        return (
            <div>
                <SearchBar
                    onSearchTermChange={videoSearch} />
                <VideoDetails
                    dataSelectedVideo={this.state.st_selectedVideo} />
                <VideosList
                    dataVideos={this.state.st_videos}
                    onVideoSelect={st_selectedVideo => this.selectVideoFn(st_selectedVideo)} />
            </div>//onVideoSelect={ st_selectedVideo => this.selectVideoFn(st_selectedVideo)  --> down way data binding
        )
    }
}

export default YouTubePlayer;
