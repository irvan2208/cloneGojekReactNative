import React from 'react';	
import { Text, View, Button } from 'react-native';

import NavBar from '../../../containers/organisms/NavBar';

const Orders = (props) => {
	return (
		<View style={{flex:1}}>
			<View style={{flex:1}}>
				<Text>Order page</Text>
				<Button title="Go to Detail" onPress={() => props.navigation.navigate('OrderDetail')} />
			</View>
			<NavBar />
		</View>
	)
}

export default Orders;