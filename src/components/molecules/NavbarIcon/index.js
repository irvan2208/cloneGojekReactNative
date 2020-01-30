import React from 'react';
import {View, Image, Text} from 'react-native';

const NavbarIcon = (props) => {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Image style={{height: 26, width: 26}} source={props.icon} />
			<Text style={{color: props.active ? '#43AB4A' : '#545454', fontSize: 10, marginTop: 4}}>{props.title}</Text>
		</View>
	)
}

export default NavbarIcon;