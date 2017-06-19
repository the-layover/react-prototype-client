import {
  default as React,
  Component
} from 'react';

import eon from 'eon-map'
import PubNub from 'pubnub';
import config from '../../utils/config.js'

// var pn = new PubNub({
//   publishKey:   config.PUBNUB_PUBKEY, // replace with your own pub-key
//   subscribeKey: config.PUBNUB_SUBKEY  // replace with your own sub-key
// });

// var pubnub  = PubNub({ subscribe_key : config.PUBNUB_SUBKEY, ssl : true });
// var channel = 'my-map';
// eon.map({
//   pubnub   : pubnub,  // < - - - here < - - - //
//   channel  : channel,
//   id       : 'map',
//   mb_id    : 'mapbox.streets',
//   mb_token : 'pk.ey31IjoiaWRtc3giLCJhIjoiZZ1zMGI2ZjBlNTMxZjk5YTEwNjM5WNJlOWI4MmJiZGIifQ.U1jMQo2QVeuUtt85oD7hkQ'
// });

const HomePage = () =>
  <div>
    <h2>Homepage</h2>
    <div id="chart"></div>
  </div>

// class FlightsNear extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//
//     }
//   }
//   componentDidMount(){
//
//   }
//   componentWillUnmount(){
//
//   }
// }

export default HomePage
