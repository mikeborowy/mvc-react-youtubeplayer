import * as React from 'react';
import * as ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//YoutUbe Components
import SearchBar from './components/youtubePlayer/search_bar';
import VideosList from './components/youtubePlayer/video_list';
import VideoDetails from './components/youtubePlayer/video_details';

//global vars
const API_KEY = 'AIzaSyD4UO4mm5j3jLFFapyCeR79sUV8hYORq64';
const DEBUG_MODE = true;

class App extends React.Component {

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

            if (DEBUG_MODE) console.log(this.state.st_videos);

            this.setState({
                st_videos: videos,
                st_selectedVideo: videos[0]
            });
        })
    }

    render() {

        return (
            <div>
                <SearchBar
                    onSearchTermChange={ term => this.videoSearchFn(term) } />
                <VideoDetails
                    dataSelectedVideo={this.state.st_selectedVideo} />
                <VideosList
                    dataVideos={this.state.st_videos}
                    onVideoSelect={ st_selectedVideo => this.selectVideoFn(st_selectedVideo) } /> 
            </div>//onVideoSelect={ st_selectedVideo => this.selectVideoFn(st_selectedVideo)  --> down way data binding
        )
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);