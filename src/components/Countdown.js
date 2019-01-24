import React from 'react';
import './Countdown.css';

class Countdown extends React.Component {

	constructor(props) {
		super(props);
		this.tick = this.tick.bind(this);
		this.formatToDisplay = this.formatToDisplay.bind(this);

		this.state = {
			days: "00",
			hours: "00",
			minutes: "00",
			seconds: "00"
		}
	}

	componentDidMount() {
		this.tickInterval = setInterval(this.tick, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.tickInterval);
	}

	tick() {
		let remainingSeconds = Math.floor((this.props.finish.getTime()- new Date().getTime())/1000);
		if (remainingSeconds <= 0) {
			clearInterval(this.tickInterval);
			return;
		}

		var day = Math.floor(remainingSeconds / (24 * 60 * 60));
		var hour = Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60));
		var minute = Math.floor((remainingSeconds % (60 * 60)) / 60);
		var second = Math.floor(remainingSeconds % 60);

		var self = this;
		this.setState(prevState => {
			return {
				days: self.formatToDisplay(day),
				hours: self.formatToDisplay(hour),
				minutes: self.formatToDisplay(minute),
				seconds: self.formatToDisplay(second)
			}
		});
	}

	formatToDisplay(remain) {
		let cacheRemain = remain;
		if (isNaN(cacheRemain) || cacheRemain === undefined || cacheRemain === null) {
			cacheRemain = 0;
		}
		if (cacheRemain < 10) {
			return '0' + cacheRemain;
		}
		return '' + cacheRemain;
	}

	render() {
		return (
			<ul className="count-down">
                <li>
                    <p className="count-number" id="dayCount">{this.state.days}</p>
                    <div className="count-label">DAY(S)</div>
                </li>
                <li>
                    <p className="count-number" id="hourCount">{this.state.hours}</p>
                    <div className="count-label">HOUR(S)</div>
                </li>
                <li>
                    <p className="count-number" id="minCount">{this.state.minutes}</p>
                    <div className="count-label">MINUTE(S)</div>
                </li>
                <li>
                    <p className="count-number" id="secCount">{this.state.seconds}</p>
                    <div className="count-label">SECOND(S)</div>
                </li>
            </ul>
			)
	}
}

export default Countdown;