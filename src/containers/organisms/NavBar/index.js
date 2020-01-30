import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

import NavbarIcon from '../../../components/molecules/NavbarIcon';

class NavBar extends Component {
	render() {
		return (
			<View style={{height: 54, backgroundColor: 'white', flexDirection: 'row' }}>
				<NavbarIcon title="Home" icon={require('../../../../assets/icon/home-active.png')} active />
				<NavbarIcon title="Orders" icon={require('../../../../assets/icon/order.png')} />
				<NavbarIcon title="Help" icon={require('../../../../assets/icon/help.png')} />
				<NavbarIcon title="Inbox" icon={require('../../../../assets/icon/inbox.png')} />
				<NavbarIcon title="Account" icon={require('../../../../assets/icon/account.png')} />
			</View>
		)
	}
}

export default NavBar;