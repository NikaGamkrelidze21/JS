import React from 'react';

const getSeason = (lat, month) =>{
    if (month > 2 && month < 9) {
        return lat < 0 ? 'summer' : 'winter';
    } else {
        return lat < 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, Date().getMonth);

    const text = season === 'winter' ? 'brr its chilly':'lets hit to beach';
    const icon = season === 'winter' ? 'sun' : 'snowflake';

    return (
    <div>
        <i classname={`${icon} icon`}></i>

        <h1>{text}</h1>
        <i className={`${icon} icon`}/>

    </div>
    )
};

export default SeasonDisplay;