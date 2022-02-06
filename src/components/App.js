import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

/*
    BREAKDOWN OF API CALL

    1) Using Axios, use axios.get('[API URL]', {
        params refer to the query string parameters we will use. we'll add query, and the value will be the term that was passed into the onSearchSubmit function. That will add a string to the API URL, making a request.
        headers object allows us to add headers to the request to the API 
    })
*/

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization:
          "Client-ID 8ec0d1939461028706d51f288feb8dde7c68ad9a45fbb7b4ad1c1f9d5e1da8dc",
      },
    });
  }

  render() {
    return (
      //Pass onSearchSubmit to SearchBar child component as a prop
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
