import React from 'react';
import './SpeakerContainer.css';
import SpeakerCard from './SpeakerCard';

const INITIAL_LIMIT = document.body.clientWidth > 500 ? 12 : 8;
const LOAD_MORE_LIMIT_NUM = INITIAL_LIMIT;

class SpeakerContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			limit : INITIAL_LIMIT,
			speakers: JSON.parse(JSON.stringify(props.speakers))
		}
	}

	loadMore = () => {
		this.setState(prevState => {
			return {
				limit : prevState.limit + LOAD_MORE_LIMIT_NUM
			}
		});
	}

	onImageErrorCallback = speaker => {
		this.setState(prevState => {
			console.log(prevState);
			let speakers = prevState.speakers;
			speakers.splice(speakers.indexOf(speaker), 1);
			return {
				speakers: speakers
			}
		})
	}

	render() {
		return (
			<div>
				<div className={"speakers-container"}>
                	{this.state.speakers.slice(0, this.state.limit).map(speaker => (
                		<SpeakerCard key={speaker.id} name={speaker.name} 
                			title={speaker.title} image={speaker.image}
                			details={speaker.details}
                			hoverImage={speaker.hoverImage}
                			onImageErrorCallback={() => this.onImageErrorCallback(speaker)}/>
                		))}
            	</div>
            	<div className="load-more-container">
            		<div className="load-more-divider" />
            		{ this.state.limit < this.state.speakers.length &&
            		<div className="load-more" onClick={this.loadMore}>Show additional speakers</div> }
            		<div className="load-more-divider" />
            	</div>
            </div>
			)
	}
}

export default SpeakerContainer;