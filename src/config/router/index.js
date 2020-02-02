import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Home, NewsDetail, Orders, OrderDetail } from '../../containers/pages';

const HomeStack = createStackNavigator(
	{
	  Home,
	  NewsDetail
	},
	{
		headerMode: 'none',
		initialRoutename: 'Home'
	}
);

const OrdersStack = createStackNavigator(
	{
	  Orders,
	  OrderDetail
	},
	{
		headerMode: 'none',
		initialRoutename: 'Orders'
	}
);

const Router = createSwitchNavigator(
	{
		HomeStack,
		OrdersStack
	},
	{
		headerMode: 'none',
	}
);

export default createAppContainer(Router);