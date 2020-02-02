import React from 'react';
import {View, Image, Text} from 'react-native';
import {TouchableOpacity}  from 'react-native-gesture-handler';

const NavbarIcon = (props) => {
	return (
		<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<TouchableOpacity onPress={props.onPress} style={{alignItems: 'center'}}>
				<Image style={{height: 26, width: 26}} source={props.icon} />
				<Text style={{color: props.active ? '#43AB4A' : '#545454', fontSize: 10, marginTop: 4}}>{props.title}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default NavbarIcon;