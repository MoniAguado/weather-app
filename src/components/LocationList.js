import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';

const srtToComponents = cities => (
    cities.map( city => <WeatherLocation city ={city} />)
);

const LocationList = ({ cities }) => {
    console.log(cities);
    return (
    <div>
        {srtToComponents(cities)}
    </div>
    );
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;