import React from "react";
import SearchBar from "./searchbar";
import unsplash from "../api/unsplash";
import ImageList from "./imageList";
class App extends React.Component {
    state = {images : [] };
    onSearchSubmit = async (term) => {
        const response = await unsplash.get("https://api.unsplash.com/search/photos", {
            params: { query: term }
        });
        console.log(response);

        this.setState({images: response.data.results})
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images = {this.state.images}/>
            </div>
        );
    }
}
export default App;