
### Summary
This is a YoutubeTV web app, a learning project using React. I particularly practiced some React core concepts like class, state, callback, and some ES6 syntax in the project.

***As most frontend framework do, React can save you a lot of work in building a web app. This project has less than 200 lines***

### Important
***Remember to add your Youtube API Key at the beginning of index.js. To get one, Search 'Get Youtube API key' in Google. It east and free to get one.***

### How to run
* Install dependency: npm install
* Start server: npm start
* Go to localhost and see: http://localhost:8080/webpack-dev-server/

### What things this project can do:
Instead of showing a butch of videos, this web app only shows 5 videos from the search result, it saves you from too many videos

Functionality

* Search and watch youtube videos
* Unbounce search feature as Google search do

### What tech stack
* React
* JavaScript
* CSS
* Google API

### What React concepts are learned in this project
* Class component vs Functional Component
* State
* Call back function

### Learning note

#### Component
There are class component and function component in React. They are kind similar to JS functions.

#### State
Whenever we change the state, the corresponding component instance get re-rendered

One special case is, when we call component method setState, we must use a curly brace for the parameter. Some thing happens when using JS in HTML and CSS

#### Callback function
Callback function is invoked once the first function is done.
In this project, there are a few callback function example.

For example,

```javascript
YTSearch({key: API_KEY, term: term}, (videos) => {
            // When parameter equals to the input
            // We can use a simplier one
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });
        })
```

#### ES6, JSX, Vanilla JS
ES6 is ECMA6, which is a convention of JS. Both ES6 and JSX can greatly accelerate and simplify
the coding part. However, since not all browser supports them for now, compiler will translate it
to Vanilla JS before browser executing it.

For example,
(param) => {} is equal to function(param) {}. The former is a ES6 syntax






