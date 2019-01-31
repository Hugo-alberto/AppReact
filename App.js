import React from 'react';
import {Text} from 'react-native-elements';
import firebaseConfig from './application/utils/firebase';
import * as firebase from 'firebase';
firebase.initializeApp(firebaseConfig);

import PreLoader from './application/components/PreLoader';
import GuestNavigation from './application/navigations/Guest';
import LoggedNavigation from './application/navigations/Logged';

console.disableYellowBox = true;

export default class App extends React.Component {
	constructor(){
		super();
		this.state = {
			isLogged: false,
			loaded: false
		}
	}

	async componentDidMount () {
		await firebase.auth().onAuthStateChanged((user) => {
			if(user !== null){
				this.setState({
					isLogged: true,
					loaded: true
				});
			} else {
				this.setState({
					isLogged: false,
					loaded: true
				})
			}
		});
	}

	render() {
		const {isLogged, loaded} = this.state;
		if(! loaded ){
			return ( <PreLoader/> );
		}
		if(isLogged){
			return ( <LoggedNavigation/>);
		}else {
			return (<GuestNavigation/>);
		}
	}
}

