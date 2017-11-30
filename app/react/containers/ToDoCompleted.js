import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {taskClicked} from '../actions/index';
import $ from 'jquery';
class ToDoCompleted extends Component{

	render(){
		console.log(this.props.data);
		return(
			<ul>
				{	
					this.props.data.completedTasks.map((value,key)=>{
						return <li style={styles.listItem} key={key}>{$('.'+value).html()}</li>
					})
				}
			</ul>
		)
	}
}
const mapStateToProps=(state)=>{
  return {
    data:state.ToDoReducer,
  }
}

const styles={
	listItem:{
		padding: 5,
		fontSize: 25,
		listStyleType: 'none',
	},
	anchor:{
		textUnderline: 'none',
	}
}
export default connect(mapStateToProps,null)(ToDoCompleted);
