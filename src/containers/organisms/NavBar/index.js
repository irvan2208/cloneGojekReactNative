import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';

import NavbarIcon from '../../../components/molecules/NavbarIcon';
import { withNavigation } from 'react-navigation';

class NavBar extends Component {
	render() {
		return (
			<View style={{height: 54, backgroundColor: 'white', flexDirection: 'row' }}>
				<NavbarIcon onPress={() => this.props.navigation.navigate('Home')} title="Home" icon={require('../../../../assets/icon/home.png')} active />
				<NavbarIcon onPress={() => this.props.navigation.navigate('Orders')} title="Orders" icon={require('../../../../assets/icon/order.png')} />
				<NavbarIcon onPress={() => this.props.navigation.navigate('')} title="Help" icon={require('../../../../assets/icon/help.png')} />
				<NavbarIcon onPress={() => this.props.navigation.navigate('')} title="Inbox" icon={require('../../../../assets/icon/inbox.png')} />
				<NavbarIcon onPress={() => this.props.navigation.navigate('')} title="Account" icon={require('../../../../assets/icon/account.png')} />
			</View>
		)
	}
}
console.log(this, 'asdfasdfasdf')


export default withNavigation(NavBar);