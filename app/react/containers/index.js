import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers/index';
import ToDoMain from './ToDoMain';


const store=createStore(reducer);
export default class Main extends Component{
	render(){
		return(
			<Provider store={store}>
				<ToDoMain />
			</Provider>
		)
	}
}