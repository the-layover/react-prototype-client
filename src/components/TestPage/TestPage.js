import canUseDOM from 'can-use-dom';
import raf from 'raf';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../../actions';

import RaisedButton from 'material-ui/RaisedButton';

import {
  default as React,
  Component
} from 'react';

import {
  withGoogleMap,
  GoogleMap,
  Circle,
  InfoWindow,
  Marker
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
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    onDragEnd={props.onDragEnd}
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
    {props.markers.map(marker => (
          <Marker
            {...marker}
          />
        ))}
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
    this.state = {
      bounds: null,
      center: null,
      lat: null,
      lng: null,
      query: [],
      markers: []
    };

    this.isUnmounted = false;
  }

  handleMapMounted(map) {
  this._map = map;
  }

  handleBoundsChanged() {
    let bounds = this._map.getBounds();
    let center = this._map.getCenter();
    let lat = this._map.getCenter().lat();
    let lng = this._map.getCenter().lng();
    let query = this.props.query;
    this.setState({
      bounds: bounds,
      center: center,
      lat: lat,
      lng: lng,
      query: query
    });
  }

  geolocationRequest() {
    console.log('calling geolocationRequest: ', this.props.geolocationRequest);
    this.props.geolocationRequest(this.state.center, this.state.bounds, this.state.lat, this.state.lng, this.state.query);
  }

  handleSearch() {
    this.props.searchPlacesRequest(this.state.lat, this.state.lng, this.state.query);
    let localMarkers = (this.props.markers).map((option) => {
      return {
        position: {
          lat: option.location.lat,
          lng: option.location.lng
        },
        key: `${option.id}`,
        defaultAnimation: 2,
      }
    });
    console.log(localMarkers);
    this.setState({markers: localMarkers});
  }

  componentDidMount() {
    const tick = () => {
      if (this.isUnmounted) {
        return;
      }
      this.props.geolocationTick(Math.max(this.props.radius - 20, 0));
      if (this.props.radius > 200) {
        raf(tick);
      }
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
    });
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {
    return (
      <div>
        <RaisedButton
            label="Search for Markers"
          onClick={this.handleSearch.bind(this)}
        />
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
          bounds={this.props.bounds}
          markers={this.state.markers}
          onMapMounted={this.handleMapMounted.bind(this)}
          onBoundsChanged={this.handleBoundsChanged.bind(this)}
          onDragEnd={this.geolocationRequest.bind(this)}
          />
      </div>
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
    bounds: state.nav.bounds,
    center: state.nav.center,
    content: state.nav.content,
    radius: state.nav.radius,
    markers: state.nav.markers,
    query: state.nav.query
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
};

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GeolocationExample);

export default TestContainer;
