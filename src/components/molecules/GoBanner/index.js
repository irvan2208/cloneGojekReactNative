import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoBanner = (props) => {
	return (
		<View style={{padding: 16}}>
			<View style={{position: 'relative'}}>
				<Image style={{height: 170, width: '100%', borderRadius: 6}} source={props.bg}></Image>
				<View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6 }}></View>
				<View style={{position: 'absolute', top: 16, left: 16, height: 15, width: 55}}>
					<Image style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} source={require('../../../../assets/logo/white.png')}></Image>
				</View>
				<View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 10 }}>
					<View style={{}}>
						<Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 2}}>Free GO-FOOD voucher</Text>
						<Text style={{color: '#fff', fontSize: 12, fontWeight: 'normal'}}>Quick, before they run out!</Text>
					</View>
					<View style={{flex: 1, paddingLeft: 12}}>
						<TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf:'stretch', borderRadius: 4}}>
							<Text style={{fontSize: 10, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			
			<View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16}}></View>
		</View>
	)
}

export default GoBanner;