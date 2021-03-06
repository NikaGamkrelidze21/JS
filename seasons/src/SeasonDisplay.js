import "./seasonsDisplay.css"
import React from 'react';

const seasonCongig = {
    summer: {
        text:"Let's go to Beach",
        iconName: 'sun'
    },
    winter: {
        text:"Brrr It's Chilly",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) =>{
    if (month > 2 && month < 9) {
        return lat < 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => { 
    const season = getSeason(props.lat, Date().getMonth);

    const {text, iconName} = seasonCongig[season]

    return (
        <div>
            <i classname={`${iconName} icon`}></i>
            <div className={`season-display ${season}`}>
                <i className={`icon-left massive ${iconName} icon`} />
                <h1>{text}</h1>
                <i className={`icon-right massive ${iconName} icon`} />
            </div>
        </div>

    )
};

export default SeasonDisplay;