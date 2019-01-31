import React from 'react'
import {StackNavigator} from "react-navigation";
import StartScreen from "../screens/Home";
import LoginScreen from "../screens/Login";
import RegisterScreen from "../screens/Register";

export default StackNavigator(
	{
		Home: {
			screen: StartScreen
		},
		Login: {
			screen: LoginScreen
		},
		Register: {
			screen: RegisterScreen
		}
	},
	{
		initialRouteName: 'Home',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#f4511e'
			},
			headerTitleStyle:{
				textAlign: 'center',
				alignSelf: 'center',
				fontSize: 20,
				color: '#fff',
				fontWeight: 'bold'
			}
		}
	}
)