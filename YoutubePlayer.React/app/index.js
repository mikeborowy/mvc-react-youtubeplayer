import * as React from 'react';
import * as ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import YoutTubePlayer from './components/youtubePlayer/index.js';

//global vars
const API_KEY = 'AIzaSyD4UO4mm5j3jLFFapyCeR79sUV8hYORq64';
const DEBUG_MODE = true;

class App extends React.Component {

    render() {

        return (
            <div>
                <YoutTubePlayer debugMode={DEBUG_MODE}/>
            </div>
        )
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);