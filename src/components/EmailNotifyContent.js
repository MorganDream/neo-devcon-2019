import React from 'react';
import './EmailNotifyContent.css';
import { Form, Button, Modal } from 'react-bootstrap';
import NeoTeamPng from '../resources/Logos/neo_team.png';

const EMAIL_SUBMIT_STATUS = {
	IDLE: 0,
	SENDING: 1,
	SUCCESS: 2,
	FAILURE: 3 
}

class EmailNotifyContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			emailRegisterStatus: EMAIL_SUBMIT_STATUS.IDLE,
			info: null
		};
	}

	onUserInput = event	 => {
		this.setState({value: event.target.value});
	}

	onSubmit = event => {
		this.setState({
			emailRegisterStatus: EMAIL_SUBMIT_STATUS.SENDING,
		});

		var self = this;
		fetch(`https://neo.org/subscription/add?email=${this.state.value}`)
			.then(response => response.text())
			.then(responseText => {
				console.log(responseText);
				if(responseText.indexOf('sucessfully') >= 0) {
					self.setState({
    					emailRegisterStatus: EMAIL_SUBMIT_STATUS.SUCCESS,
    					info: responseText
    				});
				} else {
					self.setState({
    					emailRegisterStatus: EMAIL_SUBMIT_STATUS.FAILURE,
    					info: responseText
    				});
				}
			})
    		.catch(error => {
    			console.log(error);
    			self.setState({
    				emailRegisterStatus: EMAIL_SUBMIT_STATUS.FAILURE,
    				error: error,
    			});
    		});
    	event.preventDefault();
	}

	refresh = () => {
		window.location.reload();
	}

	handleCloseModal = () => {
		if (this.state.emailRegisterStatus === EMAIL_SUBMIT_STATUS.SUCCESS) {
			this.setState({
				value: "",
				emailRegisterStatus: EMAIL_SUBMIT_STATUS.IDLE,
				error: null
			})
		} else {
			this.setState({
				emailRegisterStatus: EMAIL_SUBMIT_STATUS.IDLE,
				error: null
			})
		}
		
	}

	render() {
		return (
			<div className={"email-notify-content"}>
				<p>Sign up to our mail list and get updates for NEO DevCon info and upcoming events.</p>
				<Form className={"react-email-form"} onSubmit={this.onSubmit}>
  					<Form.Control type="email" placeholder="Your Email Address" required={true}
  					value={this.state.value} onChange={this.onUserInput}/>
  					<Button variant="primary" type="submit" disabled={this.state.emailRegisterStatus !== EMAIL_SUBMIT_STATUS.IDLE}>
    					{this.state.emailRegisterStatus === EMAIL_SUBMIT_STATUS.IDLE ? 'Keep me updated!' : 'Processing...'}
  					</Button>
  				</Form>
  				<img className="team-image" src={NeoTeamPng} />

  				<Modal size="lg" centered
  					show={this.state.emailRegisterStatus !== EMAIL_SUBMIT_STATUS.IDLE && this.state.emailRegisterStatus !== EMAIL_SUBMIT_STATUS.SENDING} onHide={this.handleCloseModal}>
  					<Modal.Header>
    					<Modal.Title>
    						{this.state.emailRegisterStatus === EMAIL_SUBMIT_STATUS.SUCCESS ? 
    							'Thank you!' : 'Sorry!'}
    					</Modal.Title>
  					</Modal.Header>
          			<Modal.Body className="modal-body-email-info">
          				{ !!this.state.info ? this.state.info : 'Server Error Happens.' }
          			</Modal.Body>
          			{
          				this.state.emailRegisterStatus === EMAIL_SUBMIT_STATUS.FAILURE && !this.state.info &&
          				<Modal.Footer>
            				<Button variant="primary" onClick={this.refresh}>
              					Refresh Now
            				</Button>
          				</Modal.Footer>
          			}
        		</Modal>
  			</div>
			)
	}
}

export default EmailNotifyContent;