import React from 'react';
import './Navigation.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Navigation extends React.Component {
  state = {
    lastScrollTop: 0,
    navbarHidden: false,
    scrolled: false
  }

  componentDidMount() {
    window.onscroll = () => {
      let scrollTop = this.getScrollTop();
      if (scrollTop > 0 && !this.state.scrolled) {
        this.setState({
          scrolled: true
        });
      } else if(scrollTop === 0 && this.state.scrolled){
        this.setState({
          scrolled: false
        });
      }
      
      if (scrollTop - this.state.lastScrollTop > 0) {
        this.setState({
          navbarHidden: true
        });
      } else if(this.state.lastScrollTop - scrollTop > 0) {
        this.setState({
          navbarHidden: false
        });
      }

      this.setState({
        lastScrollTop: scrollTop
      });
    }
  }

  onToggleClicked = () => {
    if (this.state.scrolled === true) {
      return ;
    }
    this.setState(prevState => {
      return {
        scrolled: !prevState.scrolled
      }
    });
  };

  getScrollTop = () => {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
    }
　　 if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　 }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
  }

	render() {
    let navbarClasses = this.state.scrolled? 'react-navigation' : 'react-navigation-transparent';
    navbarClasses += this.state.navbarHidden? ' hidden':'';
		return (
      <Navbar collapseOnSelect expand="lg" bg="dark" stick="top" variant="dark" className={navbarClasses}>
  				<Navbar.Brand>
  					<p className="coming-logo"><a href="https://neo.org/"><img src="Logos/neo-logo-white.svg" /></a></p>
  				</Navbar.Brand>
  				<Navbar.Toggle onClick={this.onToggleClicked} aria-controls="responsive-navbar-nav" />
  				<Navbar.Collapse id="responsive-navbar-nav">
    				<Nav className="mr-auto">
      					<Nav.Link href="#home">Home</Nav.Link>
      					<Nav.Link href="#about">About</Nav.Link>
      					<Nav.Link href="#speakers">Speakers</Nav.Link>
      					<Nav.Link href="#agenda">Agenda</Nav.Link>
      					<Nav.Link href="#venue_info">Venue</Nav.Link>
                <Nav.Link href="#partners">Partners</Nav.Link>
                {
                  (this.state.lastScrollTop > 700) && 
                  <Nav.Link className="special-link" href="#home">Buy Tickets</Nav.Link>
                }
    				</Nav>
  				</Navbar.Collapse>
			</Navbar>
			)
	}
}

export default Navigation;