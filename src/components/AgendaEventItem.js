import React from 'react';
import { Image } from 'react-bootstrap';

class PrivateImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            imageUrl: this.props.imageUrl
        };
    }

    handleImageLoaded() {
     
    }

    handleImageErrored() {
        this.setState({ 
            imageUrl: 'speakers/default.png'
        });
    }

    render() {
        return (
            <Image 
                src={this.state.imageUrl}
                className="image"
                onLoad={this.handleImageLoaded.bind(this)}
                onError={this.handleImageErrored.bind(this)}
                roundedCircle
            />
        );
    }
}

class AgendaEventItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			speakerImage: 'speakers/default.png'
		};
	}

	onImageError = () => {
		this.setState({
			speakerImage: 'speakers/default.png'
		});
	} 
	render() {
			return (
				<div className="agenda-event-container">
					<div className="image-container">

						{
							this.props.type === 0 &&
							!!this.props.by && this.props.by.length > 0 && 
							this.props.by.map(speaker => {
								return (
									<PrivateImage key={speaker.id} imageUrl={speaker.image} />
									)
							})
						}
						{
							this.props.type < 0 &&
							<Image className="image special-image" src={this.props.type === -1 ? 
								'Icons/PNG/coffee.png' : 
								(this.props.type === -10 ? 'Icons/mask.png' : 
								'Icons/PNG/dinner.png')} roundedCircle/>
						}
					</div>
					<div className="detail-container">
						<div className="time">{this.props.time}</div>
						<div className="content">{this.props.content}</div>
						{
							!!this.props.by && this.props.by.length > 0 && 
							this.props.by.map(speaker => {
								return (
									<div key={speaker.id} className="by">{this.props.by.indexOf(speaker) === 0? 'By':'&'}
										<span className="by-name">{speaker.name}</span> - 
										<span className="by-title">{speaker.title}</span>
									</div>
									)
							})
						}
					</div>
				</div>
				)
	}
}

export default AgendaEventItem;