import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';

import SearchFeature from '../../../components/molecules/SearchFeature';
import GoNews from '../../../components/molecules/GoNews';
import GoBanner from '../../../components/molecules/GoBanner';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';
import NavBar from '../../../containers/organisms/NavBar';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';

class Home extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<SearchFeature />
				<ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>

					<HomeGoPay />

					<HomeMainFeature />

					<View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>

					<GoNews bg={require('../../../../assets/dummy/sepak-bola.jpg')} onPress={() => this.props.navigation.navigate('NewsDetail')}/>
					<GoBanner bg={require('../../../../assets/dummy/food-banner.jpg')} />

					<ScrollableProducts />

				</ScrollView>
				<NavBar />
			</View>
		)
	}
}

export default Home;