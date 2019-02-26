import React from 'react';
import './LiveBroadcast.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import iconNeo from '../resources/Icons/PNG/icon_neo_green.png';
import iconUsd from '../resources/Icons/PNG/icon_usd_coin.png';

class LiveBroadcast extends React.Component {
    render() {
        return (
            <div className={"live-broadcast-content"}>
				<div className="live-boardcast-container">
					<h5>Day 1 Livestreaming</h5>
					<iframe className={"youtube-live"} src="https://www.youtube.com/embed/DjSSvE7OmOI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				<div className="live-boardcast-container">
					<h5>Day 2 Livestreaming</h5>
					<iframe className={"youtube-live"} src="https://www.youtube.com/embed/nao0bIXJTrY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
            </div>
        )
    }
}

export default LiveBroadcast;