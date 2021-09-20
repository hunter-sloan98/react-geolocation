//*Class Component(Parent)
import React from 'react';
import { Button } from 'reactstrap';
import WeatherAPI from './WeatherAPI';

type StateType = {
  lat: any
  lng: any
}

export default class GeoLocation extends React.Component<{}, StateType> {
  constructor(props: any){
    super(props)
    this.state = {
      lat: undefined,
      lng: undefined,
    }
    // this.getCoords = this.getCoords.bind(this);
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      // console.log( "Lat: ", position.coords.latitude);
      // console.log( "Lng: ", position.coords.longitude);
      this.setState({lat: position.coords.latitude});
      this.setState({lng: position.coords.longitude})
    })
  }

  render(){
    return(
      <div>
        <h1>Geo Location</h1>
        {/* <Button onClick={this.getCoords}>Locate</Button> */}
        <WeatherAPI lat={this.state.lat} lng={this.state.lng}/>
      </div>
    )
  }
}