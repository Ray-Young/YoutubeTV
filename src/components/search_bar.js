// Import React.Component and name it as Component, es6 syntax
import React, { Component }from 'react';

// Functional component: Component only has a function
// const SearchBar = () => {
//     // whenever translate JSX to Vanilla JS, it will call this method -> React.createElement. Therefore we need import React
//     return <input />
// }

// Refactor the above functional component to class Component

// Allow SearchBar class to access all components inside React
class SearchBar extends Component {

    // Define state
    constructor(props) {
        super(props);

        this.state = {term: ''}
    }

    // render function is a convention of using Class Component
    // render function must return a JSX
    render() {
        // this.onInputChange is a event handler. The event handler will be triggered whenever an event occurred
        return (
            // Here it's pretty tricky
            // 1. the value was set to state at first
            // 2. User start typing something, which updates the value of the state
            // 3. Once the setState is called, the component start re-render, and it will set the value of the input
            <div className="search-bar">
                <input
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)}/>
            </div>
            )
    }

    // Event Handler
    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;


