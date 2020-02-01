import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

const GoNews = (props) => {
	return (
		<View style={{paddingTop: 16, paddingHorizontal: 16}}>
			<View style={{position: 'relative' }}>
				<Image style={{height: 170, width: '100%', borderRadius: 6}} source={props.bg}></Image>
				<View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
				<View style={{position: 'absolute', top: 16, left: 16, height: 15, width: 55}}>
					<Image style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} source={require('../../../../assets/logo/white.png')}></Image>
				</View>
			</View>
			<View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
				<Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>GO-NEWS</Text>
				<Text style={{fontSize: 14, color: '#7A7A7A', fontWeight: 'normal', marginBottom: 11}}>Some text here, and here, and here too, more more more text here.</Text>
				<TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf:'flex-end', borderRadius: 4, width: '25%'}} onPress={props.onPress}>
					<Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default GoNews