import React, {Component} from 'react';
import Router from './src/config/router'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, TouchableOpacity } from 'react-native';

class App extends Component {
	render() {
		return (
			<Router />
		);
	}
}

export default App;