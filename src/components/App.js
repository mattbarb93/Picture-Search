import React from "react";
import unsplash from "../api/unsplash";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

/*
    BREAKDOWN OF API CALL

    1) Using Axios, use axios.get('[API URL]', {
    })
     - params refer to the query string parameters we will use. we'll add query, and the value will be the term that was passed into the onSearchSubmit function. That will add a string to the API URL, making a request.
     - headers object allows us to add headers to the request to the API 
    2) add async to the front of the method, then make a variable (ex: response) equals to await and the axios.get call
    3) created State object with an images property, eventually will contain an array, so we initialize it with an empty array
    4) to setState, we need to bind the onSearchSubmit method
*/

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      //Pass onSearchSubmit to SearchBar child component as a prop
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
