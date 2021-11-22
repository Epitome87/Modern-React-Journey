import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: 'sun',
  },
  winter: {
    text: "Burr, it's cold!",
    iconName: 'snowflake',
  },
};

function getSeason(lat, month) {
  if (month > 2 && month < 9) {
    // Northern Hemi is when lat > 0.
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

function SeasonDisplay(props) {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  );
}

export default SeasonDisplay;
