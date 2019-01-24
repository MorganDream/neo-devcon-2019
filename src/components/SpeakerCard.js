import React from 'react';
import { Image, Modal, Button, CardGroup, Card } from 'react-bootstrap';
import iconGithub from '../resources/Icons/SVG/icon_github.svg';
import iconTwitter from '../resources/Icons/SVG/icon_twitter.svg';
import iconStar from '../resources/Icons/SVG/icon_star.svg';

class SpeakerCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isHovering: false,
			isDetailShowing: false,
		}
	}

	onImageError = () => {
		this.props.onImageErrorCallback();
	} 

	render() {
		return (
			<div>
			<div className={"speaker-card"} border="none">
  				<Image className={"image"} src={this.props.image} onError={this.onImageError} roundedCircle
  					onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onClick={this.onClick}/>
  				<div className={"text-container"}>
    				<div className={"name"}>{this.props.name}</div>
    				<div className={"title"}>{this.props.title}</div>
  				</div>
			</div>
			<Modal show={this.state.isDetailShowing} onHide={this.handleClose} size="lg">
				<div className={"modal-container"}>
				<div className={"image-container"}>
					<Image className={"image"} src={this.props.image} roundedCircle/>
					{/*<div className={"icon-container"}>
						<Image className={"icon"} src={iconGithub} roundedCircle/>
						<Image className={"icon"} src={iconTwitter} roundedCircle/>
						<Image className={"icon"} src={iconStar} roundedCircle/>
					</div>*/}
				</div>
				<div>
          			<Modal.Header className={"modal-header"}>
            			<Modal.Title>{this.props.name}</Modal.Title>
            			<div>{this.props.title}</div>
          			</Modal.Header>
          			<Modal.Body>{this.props.details}</Modal.Body>
          			{
          				/*
					<Modal.Footer className="agenda-container">
            			<Card className={"agenda-card"}>
    						<Card.Header>Header</Card.Header>
    						<Card.Body>
      							<Card.Title>Primary Card Title</Card.Title>
      							<Card.Text>
        							Some quick example text to build on the card title and make up the bulk
        							of the card's content.
      							</Card.Text>
    						</Card.Body>
  						</Card>
  						<Card className={"agenda-card"}>
    						<Card.Header>Header</Card.Header>
    						<Card.Body>
      							<Card.Title>Primary Card Title</Card.Title>
      							<Card.Text>
        							Some quick example text to build on the card title and make up the bulk
        							of the card's content.
      							</Card.Text>
    						</Card.Body>
  						</Card>
          			</Modal.Footer>
          				*/
          			}
          		</div>
          		</div>
        	</Modal>
			</div>
			)
	}

	onMouseEnter = () => {
		this.setState({
			isHovering: true
		})
	}

	onMouseLeave = () => {
		this.setState({
			isHovering: false
		})
	}

	onClick = () => {
		this.setState({
			isDetailShowing: true
		})
	}

	handleClose = () => {
		this.setState({
			isDetailShowing: false
		})
	}
}

export default SpeakerCard;