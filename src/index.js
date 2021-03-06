import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import speakers from './data/speakers';
import agenda from './data/agenda';
import Navigation from './components/Navigation';
import Countdown from './components/Countdown';
import BuyTicketsButtonGroup from './components/BuyTicketsButtonGroup';
import SpeakerContainer from './components/SpeakerContainer';
import AgendaContainer from './components/AgendaContainer';
import EmailNotifyContent from './components/EmailNotifyContent';
import LiveBroadcast from './components/LiveBroadcast';

const openingTime = new Date('2019/02/16 9:30:00-08');

ReactDOM.render(<Navigation />, document.getElementById('nav-header'));
ReactDOM.render(<Countdown finish={openingTime}/>, document.getElementById('count-down'));
ReactDOM.render(<BuyTicketsButtonGroup />, document.getElementById('buy-tickets'));
ReactDOM.render(<SpeakerContainer speakers={speakers} />, document.getElementById('speakers-container'));
ReactDOM.render(<AgendaContainer speakers={speakers} agenda={agenda} />, document.getElementById('agenda-container'));
ReactDOM.render(<EmailNotifyContent />, document.getElementById('email-notify-container'));
ReactDOM.render(<LiveBroadcast open={openingTime}/>, document.getElementById('live-broadcast-container'));
