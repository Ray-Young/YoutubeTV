import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// This is exported from search_bar
import SearchBar from './components/search_bar'

// Run in command line: npm install --save youtube-api-search
// the save option is add this package info into package.json
const API_KEY = 'AIzaSyAEOy0aZysSmumESCMgelVxjQ1bnPQupD8';

// Call back function, function(data) is invoked once the first Search function is completed.


// Create a new Component. This component should produce some html
// const App = function() {
//     return <div>Hi!</div>;
// }

// ES6 syntax
class App extends Component {
    // constructor and render are executed at the same time, careful in first time
    // react tries to render as soon as possible, and sometimes it causes problem
    // setState will also cause re-render
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            // When parameter equals to the input
            // We can use a simplier one
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });

            // this.setState({videos : data});
        });
    }
    render() {
        return (
            // Pass videos={this.state.videos} as a prop
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        )

    }
}

// DOM Document Object Model
// Take this component's generated html
// ReactDOM.render(<App/>)

// Take this component's generated html, and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));