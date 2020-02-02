import React from 'react';
import {View, Text, Image} from 'react-native';

const IconWithText = (props) => {
	return (
		<View>
			<View style={{width: 60, height: 60, backgroundColor: '#61A756', borderRadius: 60}} />
			<Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>{props.title}</Text>
		</View>
	)
}

const IconAction = () => {
	return (
		<View style={{width: 35, height: 35, backgroundColor: 'white', borderRadius: 35}} />
	)
}

const ScanQRCode = () => {
	return (
		<View style={{flex: 1}}>
			<View style={{flex: 1, backgroundColor: 'grey', marginTop: 24}}>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, marginTop: 16}}>
					<IconAction />
					<View style={{flexDirection: 'row', justifyContent: 'space-between', width: 80}} >
						<IconAction />
						<IconAction />
					</View>
				</View>
			</View>
			<View style={{height: 200, backgroundColor: 'white', paddingHorizontal: 16}}>
				<View style={{alignItems: 'center', marginTop: 8, marginBottom: 18}}>
					<View style={{width: 40, height: 3, backgroundColor: 'gray', marginVertical: 1}} />
					<View style={{width: 40, height: 3, backgroundColor: 'gray', marginVertical: 1}} />
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
					<Text style={{fontSize: 20, fontWeight: 'bold', color: 'gray'}}>More Options</Text>
					<Text style={{fontSize: 14, fontWeight: 'bold', color: '#61A756'}}>Shortcut</Text>
				</View>
				<View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%' }}>
					<View style={{flexDirection: 'row', alignItems: 'flex-start', width: 160, justifyContent: 'space-between', paddingRight: 12}}>
						<IconWithText title="Phone Number" />
						<IconWithText title="GoPay Code" />
					</View>
					<View style={{width: 1, height: 60, backgroundColor: 'grey'}} />
					<View style={{flex:1, paddingLeft: 12}}>
						<Text>You recently gopay receivers will show here. no admin fees</Text>
					</View>
				</View>
			</View>
		</View>
	)
}

export default ScanQRCode;