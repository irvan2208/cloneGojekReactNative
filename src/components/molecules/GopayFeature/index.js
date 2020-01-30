import React from 'react';
import {Image, View, Text} from 'react-native';

const GopayFeature = (props) => {
	return (
		<View style={{flex: 1, alignItems: 'center'}}>
			<Image source={props.img} style={{width: 26, height: 26 }} />
			<Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15, width: '100%', textAlign: 'center' }}>{props.title}</Text>
		</View>
	)
}

export default GopayFeature;