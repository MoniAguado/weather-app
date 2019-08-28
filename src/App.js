import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Col, Row } from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForescastExtended from './components/ForecastExtended';
import { MuiThemeProvider } from '@material-ui/core';
import './App.css';

const cities = [
  'San Francisco, us',
  'Ibiza, es',
  'Tarragona, es',
  'Buenos Aires, ar',
  'Madrid, es',
];

class App extends Component {

  constructor () {
    super();

    this.state = {
      city: null
    }
  }

  handleSelectedLocation = city => {
  this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar className="appbar">
                <Typography variant='title' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList 
                cities={cities}
                onSelectedLocation={this.handleSelectedLocation}>
              </LocationList>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className="details">
                {
                  city &&
                  <ForescastExtended city={city}></ForescastExtended> 
                }
                </div>

              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>

    );
  }
}

export default App;
