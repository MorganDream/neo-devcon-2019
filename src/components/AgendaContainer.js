import React from 'react';
import './AgendaContainer.css';
import { Tabs, Tab, ListGroup, Badge } from 'react-bootstrap';
import AgendaEventItem from './AgendaEventItem';

class AgendaContainer extends React.Component {

  getAgendaEventType = by_id => {
    if (by_id[0] < 0) {
      return by_id[0];
    }

    return 0;
  }


  getBySpeakers = by_id => {
    if (by_id[0] < 0) {
      return null;
    };
    var self = this
    return by_id.map(id => {
      return self.props.speakers.find(speaker => speaker.id === id);
    });
  }

	render() {
		return (
			<div className="tab-container">
				<Tabs defaultActiveKey="day_1" className="tabs">
  					<Tab eventKey="day_1" title="Day 1 Conference" className="tab">
    					<ListGroup as="ul">
    						<ListGroup.Item as="li" className="list-title">
    							<span className="text-weighter">Day 1</span><span className="text-lighter">February 16th 2019</span>
  							</ListGroup.Item>
    						{
    							this.props.agenda["day_1"].map(agendaEvent => {
    								return (
    									<ListGroup.Item as="li" key={agendaEvent.id}>
    										<AgendaEventItem time={agendaEvent.time} content={agendaEvent.content}
                          type={this.getAgendaEventType(agendaEvent.by_id)}
    											by={this.getBySpeakers(agendaEvent.by_id)} />
  										</ListGroup.Item>
    									)
    							})
    						}  							
							</ListGroup>
  					</Tab>
  					<Tab eventKey="day_2" title="Day 2 Conference" className="tab">
    					<ListGroup as="ul">
    						<ListGroup.Item as="li" className="list-title">
    							<span className="text-weighter">Day 2</span><span className="text-lighter">February 17th 2019</span>
  							</ListGroup.Item>
    						{
                  this.props.agenda["day_2"].map(agendaEvent => {
                    return (
                      <ListGroup.Item as="li" key={agendaEvent.id}>
                        <AgendaEventItem time={agendaEvent.time} content={agendaEvent.content}
                          type={this.getAgendaEventType(agendaEvent.by_id)}
                          by={this.getBySpeakers(agendaEvent.by_id)} />
                      </ListGroup.Item>
                      )
                  })
                } 							
							</ListGroup>
  					</Tab>
  					<Tab id="rsvp-tag" eventKey="day_2_workshop" title={<div className="relative-tab-title">Day 2 Workshop<Badge>RSVP Now!</Badge></div>} className="tab">
    					<ListGroup as="ul">
    						<ListGroup.Item as="li" className="list-title">
    							<span className="text-weighter">Day 2</span><span className="text-lighter">February 17th 2019</span>
  							</ListGroup.Item>
								<div className="well well-lg">Due to limited seating, please email <a href="mailto:devcon@neo.org" className="email">devcon@neo.org</a> to RSVP for the workshop attendance.  Make sure you include the following information：name, email, and ticket confirmation number.</div>
    						{
                  this.props.agenda["day_2_workshop"].map(agendaEvent => {
                    return (
                      <ListGroup.Item as="li" key={agendaEvent.id}>
                        <AgendaEventItem time={agendaEvent.time} content={agendaEvent.content}
                          type={this.getAgendaEventType(agendaEvent.by_id)}
                          by={this.getBySpeakers(agendaEvent.by_id)} />
                      </ListGroup.Item>
                      )
                  })
                } 							
							</ListGroup>
  					</Tab>
				</Tabs>
				<p>All sessions in the agenda are tentative and subject to change.</p>
			</div>
			)
	}
}

export default AgendaContainer;