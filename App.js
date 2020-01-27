import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';

const GopayFeature = (props) => {
	return (
		<View style={{flex: 1, alignItems: 'center'}}>
			<Image source={props.img} style={{width: 26, height: 26 }} />
			<Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15, width: '100%', textAlign: 'center' }}>{props.title}</Text>
		</View>
	)
}

export default function App() {
	return (
		<View style={{flex: 1}}>
			<View style={{marginHorizontal: 17, flexDirection: 'row', marginTop: 35, height: 54 }}>
				<View style={{position: 'relative', flex: 1 }}>
					<TextInput placeholder="What do you want to eat?" style={{borderWidth: 1, borderColor: '#e8e8e8', borderRadius: 25, height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 18 }} />
					<Image source={require('./assets/icon/search.png')} style={{position: 'absolute', top: 5, left: 12, width: 27, height: 27 }} />
				</View>
				<View style={{width: 35, alignItems: 'center', justifyContent: 'center', height: 40}}>
					<Image source={require('./assets/icon/promo.png')} style={{width: 26, height: 26}}/>
				</View>
			</View>
			<ScrollView contentContainerStyle={{flexGrow: 1, backgroundColor: 'white'}}>

				<View style={{marginHorizontal: 17, marginTop: 8 }}>
					<View style={{flexDirection: 'row', justifyContent:  'space-between', backgroundColor: '#2C5FB8', padding: 14, borderTopLeftRadius: 4, borderTopRightRadius: 4 }}>
						<Image source={require('./assets/icon/gopay.png')} style={{width: 82, height: 23}} />
						<Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp. 50.000</Text>
					</View>
					<View style={{flexDirection: 'row' , aligItems: 'center', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
						<GopayFeature title="Pay" img={require('./assets/icon/pay.png')}/>
						<GopayFeature title="Nearby" img={require('./assets/icon/nearby.png')}/>
						<GopayFeature title="Top Up" img={require('./assets/icon/topup.png')}/>
						<GopayFeature title="More" img={require('./assets/icon/more.png')}/>
					</View>
				</View>

				<View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18 }}>
					<View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
						<View style={{width: '25%', alignItems: 'center'}}>
							<View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
								<Image style={{width: 40, height: 40}} source={require('./assets/icon/go-ride.png')} />
							</View>
							<Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6, width: '100%', textAlign: 'center'}}>GO-RIDE</Text>
						</View>
						<View style={{width: '25%', alignItems: 'center'}}>
							<View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
								<Image style={{width: 40, height: 40}} source={require('./assets/icon/go-car.png')} />
							</View>
							<Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6, width: '100%', textAlign: 'center'}}>GO-CAR</Text>
						</View>
						<View style={{width: '25%', alignItems: 'center'}}>
							<View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
								<Image style={{width: 40, height: 40}} source={require('./assets/icon/go-bluebird.png')} />
							</View>
							<Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6, width: '100%', textAlign: 'center'}}>GO-BLUEBIRD</Text>
						</View>
						<View style={{width: '25%', alignItems: 'center'}}>
							<View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
								<Image style={{width: 40, height: 40}} source={require('./assets/icon/go-send.png')} />
							</View>
							<Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6, width: '100%', textAlign: 'center'}}>GO-SEND</Text>
						</View>
					</View>
					<View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
						<View style={{width: '25%', alignItems: 'center'}}>
							<View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
								<Image style={{width: 40, height: 40}} source={require('./assets/icon/go-deals.png')} />
							</View>
							<Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6, width: '100%', textAlign: 'center'}}>GO-DEALS</Text>
						</View>
						<View style={{width: '25%', alignItems: 'center'}}>
							<View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
								<Image style={{width: 40, height: 40}} source={require('./assets/icon/go-pulsa.png')} />
							</View>
							<Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6, width: '100%', textAlign: 'center'}}>GO-PULSA</Text>
						</View>
						<View style={{width: '25%', alignItems: 'center'}}>
							<View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
								<Image style={{width: 40, height: 40}} source={require('./assets/icon/go-food.png')} />
							</View>
							<Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6, width: '100%', textAlign: 'center'}}>GO-FOOD</Text>
						</View>
						<View style={{width: '25%', alignItems: 'center'}}>
							<View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center'}}>
								<Image style={{width: 40, height: 40}} source={require('./assets/icon/go-more.png')} />
							</View>
							<Text style={{fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6, width: '100%', textAlign: 'center'}}>GO-MORE</Text>
						</View>
					</View>
				</View>

				<View style={{height: 17, backgroundColor: '#F2F2F4', marginTop: 20}}></View>

				<View style={{paddingTop: 16, paddingHorizontal: 16}}>
					<View style={{position: 'relative' }}>
						<Image style={{height: 170, width: '100%', borderRadius: 6}} source={require('./assets/dummy/sepak-bola.jpg')}></Image>
						<View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
						<View style={{position: 'absolute', top: 16, left: 16, height: 15, width: 55}}>
							<Image style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} source={require('./assets/logo/white.png')}></Image>
						</View>
					</View>
					<View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
						<Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c'}}>GO-NEWS</Text>
						<Text style={{fontSize: 14, color: '#7A7A7A', fontWeight: 'normal', marginBottom: 11}}>Some text here, and here, and here too, more more more text here.</Text>
						<TouchableOpacity style={{backgroundColor: '#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf:'flex-end', borderRadius: 4, width: '25%'}}>
							<Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={{padding: 16}}>
					<View style={{position: 'relative'}}>
						<Image style={{height: 170, width: '100%', borderRadius: 6}} source={require('./assets/dummy/food-banner.jpg')}></Image>
						<View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6 }}></View>
						<View style={{position: 'absolute', top: 16, left: 16, height: 15, width: 55}}>
							<Image style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}} source={require('./assets/logo/white.png')}></Image>
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


				<View>
					<View style={{height: 15, width: 60, marginBottom: 5, marginLeft: 16}}>
						<Image source={require('./assets/logo/go-food.png')}></Image>
					</View>
					<View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, marginHorizontal: 16}}>
						<Text style={{fontSize: 17, fontWeight: 'bold', color: '#1c1c1c', width: '50%'}}>Nearby Restaurant</Text>
						<Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756', width: '50%', textAlign: 'right'}}>See all</Text>
					</View>
					<ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
						<View style={{marginRight: 16}}>
							<View style={{width: 150, height: 150}}>
								<Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} source={require('./assets/dummy/go-food-kfc.jpg')}></Image>
							</View>
							<Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>KFC</Text>
						</View>
						<View style={{marginRight: 16}}>
							<View style={{width: 150, height: 150}}>
								<Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} source={require('./assets/dummy/go-food-gm.jpg')}></Image>
							</View>
							<Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Bakmi GM</Text>
						</View>
						<View style={{marginRight: 16}}>
							<View style={{width: 150, height: 150}}>
								<Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} source={require('./assets/dummy/go-food-orins.jpg')}></Image>
							</View>
							<Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Orins</Text>
						</View>
						<View style={{marginRight: 16}}>
							<View style={{width: 150, height: 150}}>
								<Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} source={require('./assets/dummy/go-food-pak-boss.jpg')}></Image>
							</View>
							<Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}> Pak boss</Text>
						</View>
						<View style={{marginRight: 16}}>
							<View style={{width: 150, height: 150}}>
								<Image style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10}} source={require('./assets/dummy/go-food-banka.jpg')}></Image>
							</View>
							<Text style={{fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12}}>Banka</Text>
						</View>
					</ScrollView>

					<View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginHorizontal: 16}}></View>
				</View>


			</ScrollView>













			<View style={{height: 54, backgroundColor: 'white', flexDirection: 'row' }}>
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Image style={{height: 26, width: 26}} source={require('./assets/icon/home-active.png')} />
					<Text style={{color: '#43AB4A', fontSize: 10, marginTop: 4}}>Home</Text>
				</View>
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Image style={{height: 26, width: 26}} source={require('./assets/icon/order.png')} />
					<Text style={{color: '#545454', fontSize: 10, marginTop: 4}}>Orders</Text>
				</View>
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Image style={{height: 26, width: 26}} source={require('./assets/icon/help.png')} />
					<Text style={{color: '#545454', fontSize: 10, marginTop: 4}}>Help</Text>
				</View>
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Image style={{height: 26, width: 26}} source={require('./assets/icon/inbox.png')} />
					<Text style={{color: '#545454', fontSize: 10, marginTop: 4}}>Inbox</Text>
				</View>
				<View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					<Image style={{height: 26, width: 26}} source={require('./assets/icon/account.png')} />
					<Text style={{color: '#545454', fontSize: 10, marginTop: 4}}>Account</Text>
				</View>
			</View>
		</View>
		);
}

const styles = StyleSheet.create({

});
