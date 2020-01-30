import React from 'react';
import {View, Image, Text} from 'react-native';

const ScrollableItem = (props) => {
	return (
		<View style={{marginRight: 16}}>
			<View style={{width: 150, height: 150}}>
				<Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} source={props.img}></Image>
			</View>
			<Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>{props.name}</Text>
		</View>
	)
}

export default ScrollableItem;