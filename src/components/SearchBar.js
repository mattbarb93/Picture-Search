import React from "react";

class SearchBar extends React.Component {
  //Controlled element
  state = { term: "" };

  /*
    BREAKDOWN

    1) Whenever user submits form, run onFormSubmit
    2) Take the event, and prevent form to automatically be submitted and the browser from reloading
    3) Look at the props object, and call the function that was passed as the onSubmit prop (from App.js) invoking this.state.term
    4) Inside App.js, the function onSearchSubmit (passed as the onSubmit prop) is invoked
    5) Ultimately, the onSearchSubmit is the function that will be invoked, and whatever you want to do (API call) comes from onSearchSubmit.
  */
  onFormSubmit = (event) => {
    event.preventDefault(); // 2)

    //This allows invoking callbacks from child. To get access to the callback, refer it as this.props, instead of just props.
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
