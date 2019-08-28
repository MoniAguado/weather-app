import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtrainfo = ({humidity, wind}) => (
    <div className="weatherExtraInfoCont">
        <span className="ExtraInfoText">{`Humedad: ${humidity}%`}</span>
        <span className="ExtraInfoText">{`Vientos: ${wind}`}</span>
    </div>
);

WeatherExtrainfo.PropTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtrainfo;