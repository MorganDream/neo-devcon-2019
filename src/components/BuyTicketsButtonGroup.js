import React from 'react';
import './BuyTicketsButtonGroup.css';
import { Button, ButtonToolbar } from 'react-bootstrap';
import iconNeo from '../resources/Icons/PNG/icon_neo_green.png';
import iconUsd from '../resources/Icons/PNG/icon_usd_coin.png';

class BuyTicketsButtonGroup extends React.Component {
	render() {
		return (
			<ButtonToolbar className={"button-group"}>
  				<Button className={"button-buy"} onClick={this.buyTicketsWithNeo}>
  					<span>Buy tickets with NEO</span>
  					<img className="icon-buy" src={iconNeo} />
  				</Button>
  				<Button className={"button-buy"} onClick={this.buyTicketsWithUSD}>
  					<span>Buy tickets with USD</span>
  					<img className="icon-buy" src={iconUsd} />
  				</Button>
					<form action="https://www.coinpayments.net/index.php" method="post" className="buy-with-neo-form"
						id="buy-with-neo-form">
                <input type="hidden" name="cmd" value="_pay_simple"/>
                <input type="hidden" name="reset" value="1"/>
                <input type="hidden" name="merchant" value="7008a29980d2140caf348ffa74613b45"/>
                <input type="hidden" name="item_name" value="NEO DevCon Ticket Promo Code"/>
                <input type="hidden" name="item_desc" value="You will receive confirmation email from devcon@neo.org within 24 hours, with instructions to redeem tickets with Promo Code."/>
                <input type="hidden" name="currency" value="USD"/>
                <input type="hidden" name="amountf" value="149.00000000"/>
                <input type="hidden" name="want_shipping" value="0"/>
            </form>
			</ButtonToolbar>
			)
	}

  buyTicketsWithUSD = () => {
    window.location.href = "https://www.eventbrite.co.uk/e/neo-devcon-2019-tickets-52953372964";
  };

  buyTicketsWithNeo = () => {
    document.forms[0].submit();
  };
}

export default BuyTicketsButtonGroup;