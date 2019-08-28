import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';
/*
const days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
];

const data = {
    temperature: 10,
    hunmidity: 10,
    weatherState: 'normal',
    wind: 'normal'
}*/

class ForecastExtended extends Component {

    constructor () {
        super();

        this.state = { forecastData: null}
    }


    renderForecastItemDays() {
        return "Render items";
        //return days.map( day =>(<ForecastItem weekDay={day} hour={10} data={data}/>))

    }
    render() {
        const {city} = this.props;
        
        return (
            <div>
                <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
                {this.renderForecastItemDays()}
            </div>
        )
    }
}

ForecastExtended.propTypes= {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;