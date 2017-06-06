import canUseDOM from 'can-use-dom';
import raf from 'raf';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';

import {
  default as React,
  Component
} from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Circle,
  InfoWindow
} from 'react-google-maps';

const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation :
  ({
    getCurrentPosition(success, failure) {
      failure(`Your browser doesn't support geolocation.`);
    },
  })
);

const GeolocationExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={14}
    center={props.center}
  >
    {props.center && (
      <InfoWindow position={props.center}>
        <div>{props.content}</div>
      </InfoWindow>
    )}
    {props.center && (
      <Circle
        center={props.center}
        radius={props.radius}
        options={{
          fillColor: `red`,
          fillOpacity: 0.20,
          strokeColor: `red`,
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
      />
    )}
  </GoogleMap>
));

/*
 * https://developers.google.com/maps/documentation/javascript/examples/map-geolocation
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
class GeolocationExample extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   center: null,
    //   content: null,
    //   radius: 6000,
    // };

    this.isUnmounted = false;
  }

  componentDidMount() {
    const tick = () => {
      if (this.isUnmounted) {
        return;
      }
      this.props.geolocationTick(Math.max(this.props.radius - 20, 0));
      // this.setState({ radius: Math.max(this.state.radius - 20, 0) });
      if (this.props.radius > 200) {
        raf(tick);
      }
      // if (this.state.radius > 200) {
      //   raf(tick);
      // }
    };

    geolocation.getCurrentPosition((position) => {
      if (this.isUnmounted) {
        return;
      }
      let center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
      this.props.geolocationSuccess(center);
      // this.setState({
      //   center: {
      //     lat: position.coords.latitude,
      //     lng: position.coords.longitude,
      //   },
      //   content: `Location found using HTML5.`,
      // });

      raf(tick);
    }, (reason) => {
      if (this.isUnmounted) {
        return;
      }
      let center = {
        lat: 60,
        lng: 105
      }
      this.props.geolocationError(center, `Error: The Geolocation service failed (${reason}).`);
      // this.setState({
      //   center: {
      //     lat: 60,
      //     lng: 105,
      //   },
      //   content: `Error: The Geolocation service failed (${reason}).`,
      // });
    });
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {
    return (
      <GeolocationExampleGoogleMap
        containerElement={
          <div style={{ height: `500px` }} />
        }
        mapElement={
          <div style={{ height: `500px` }} />
        }
        center={this.props.center}
        content={this.props.content}
        radius={this.props.radius}
      />
    );
  }
}

const mapStateToProps = (state) => {
  // reducer functions
  // const { isAuthenticated, profile, error } = state.auth
  // return {
  //   isAuthenticated,
  //   profile,
  //   error
  // }
  return {
    center: state.nav.center,
    content: state.nav.content,
    radius: state.nav.radius,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
};

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GeolocationExample);

export default MapContainer;
