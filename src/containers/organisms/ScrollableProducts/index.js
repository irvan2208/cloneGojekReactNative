import React, {Component} from 'react';
import {View, Image, Text, ScrollView} from 'react-native';
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollableProducts extends Component {
	render() {
		return (
			<View>
				<View style={{height: 15, width: 60, marginBottom: 5, marginLeft: 16}}>
					<Image source={require('../../../../assets/logo/go-food.png')}></Image>
				</View>
				<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, marginHorizontal: 16}}>
					<Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', width: '50%'}}>Nearby Restaurant</Text>
					<Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756', width: '50%', textAlign: 'right'}}>See all</Text>
				</View>
				<ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
					<ScrollableItem name="KFC" img={require('../../../../assets/dummy/go-food-kfc.jpg')} />
					<ScrollableItem name="Bakmi GM" img={require('../../../../assets/dummy/go-food-gm.jpg')} />
					<ScrollableItem name="Orins" img={require('../../../../assets/dummy/go-food-orins.jpg')} />
					<ScrollableItem name="Pak boss" img={require('../../../../assets/dummy/go-food-pak-boss.jpg')} />
					<ScrollableItem name="Banka" img={require('../../../../assets/dummy/go-food-banka.jpg')} />
				</ScrollView>

				<View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginHorizontal: 16}}></View>
			</View>
		)
	}
}

export default ScrollableProducts;