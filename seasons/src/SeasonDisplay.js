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
    <div className={`season-dipslay ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}/>
        <h1>{text}</h1>
        <i className={`icon-rigth massive ${iconName} icon`}/>

    </div>
    )
};

export default SeasonDisplay;