import React from "react";

class SearchBar extends React.Component {
  //Controlled element
  state = { term: "" };

  //To solve "this" undefined issue, make the object into an arrow funtion
  onFormSubmit = (event) => {
    event.preventDefault(); //Prevents form to automatically be submitted and the browser from reloading

    console.log(this.state.term);
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
