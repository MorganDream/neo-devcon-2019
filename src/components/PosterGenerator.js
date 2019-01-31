import React from 'react';
import { Button } from 'react-bootstrap';

class PosterGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShowing: false
        };
    }

    onClick = () => {
        this.setState({
            modalShowing: true
        });
    }

    render() {
        return (
            <div>
                <Button variant="primary" 
                    onClick={this.onClick} 
                    disabled={this.state.modalShowing}>
                    Generate Poster
                </Button>

                <Modal
                  show={this.state.modalShowing}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Modal heading
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                      Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                      dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                      ac consectetur ac, vestibulum at eros.
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                  </Modal.Footer>
                </Modal>
            </div>
        )
    }
}