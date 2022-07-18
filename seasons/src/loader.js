import "./seasonsDisplay.css"
import React from "react";

const Loader = (props)=> {
    return (
        // <div class="ui segment">
        
        // </div>
        <div class="ui active dimmer">
            <div class="ui indeterminate text loader"><h1>{props.textMessage}</h1></div>
        </div>
        // <p></p>
    )
}
Loader.defaultProps = {
    textMessage : "Loading.."
}

export default Loader;