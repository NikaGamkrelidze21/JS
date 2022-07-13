import "./seasonsDisplay.css"
import React from "react";

const Loader = ()=> {
    return (
        <div class="ui segment">
        <div class="ui active dimmer">
            <div class="ui indeterminate text loader">Preparing Files</div>
        </div>
        <p></p>
        </div>

    )
}


export default Loader;