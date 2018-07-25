import React from 'react';
import ReactDOM from 'react-dom'

// This is exported from search_bar
import SearchBar from './components/search_bar'

// Run in command line: npm install --save youtube-api-search
// the save option is add this package info into package.json
const API_KEY = 'AIzaSyAEOy0aZysSmumESCMgelVxjQ1bnPQupD8';

// Create a new Component. This component should produce some html
// const App = function() {
//     return <div>Hi!</div>;
// }

// ES6 syntax
const App = () => {
    return (
    <div>
        <SearchBar/>
    </div>
    );
}

// DOM Document Object Model
// Take this component's generated html
// ReactDOM.render(<App/>)

// Take this component's generated html, and put it on the page (in the DOM)
ReactDOM.render(<App/>, document.querySelector('.container'));