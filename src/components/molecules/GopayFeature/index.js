import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';

const GopayFeature = (props) => {
	return (
		<View style={{flex: 1, alignItems: 'center'}}>
			<TouchableOpacity onPress={props.onPress} style={{alignItems: 'center'}}>
				<Image source={props.img} style={{width: 26, height: 26 }} />
				<Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15, width: '100%', textAlign: 'center' }}>{props.title}</Text>
			</TouchableOpacity>
		</View>
	)
}

export default GopayFeature;