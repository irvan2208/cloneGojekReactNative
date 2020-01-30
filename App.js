import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';
import SearchFeature from './src/components/molecules/SearchFeature';
import GoNews from './src/components/molecules/GoNews';
import GoBanner from './src/components/molecules/GoBanner';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';
import NavBar from './src/containers/organisms/NavBar';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import HomeGoPay from './src/containers/organisms/HomeGoPay';

export default function App() {
	return (
		<View style={{flex: 1}}>
			<SearchFeature />
			<ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>

				<HomeGoPay />

				<HomeMainFeature />

				<View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>

				<GoNews bg={require('./assets/dummy/sepak-bola.jpg')} />
				<GoBanner bg={require('./assets/dummy/food-banner.jpg')} />

				<ScrollableProducts />

			</ScrollView>
			<NavBar />
		</View>
		);
}

const styles = StyleSheet.create({

});
