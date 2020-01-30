import React from 'react';
import {View, Image, Text} from 'react-native';

const MainFeature = (props) => {
	return (
		<View style={{width: '25%', alignItems: 'center', marginBottom: 18}}>
			<View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
				<Image style={{width: 40, height: 40}} source={props.img} />
			</View>
			<Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6, width: '100%', textAlign: 'center'}}>{props.title}</Text>
		</View>
	)
}

export default MainFeature;