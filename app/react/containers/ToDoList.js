import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {taskClicked} from '../actions/index';
import $ from 'jquery';
class ToDoList extends Component{
	_taskDone(key){
		var current=$('.todo'+key);
		var completedTasks=this.props.data.completedTasks;
		if(current.hasClass('line')){
			current.removeClass('line');
			completedTasks.splice($.inArray('todo'+key, completedTasks), 1);
		}
		else{
			current.addClass('line');
			completedTasks.push('todo'+key);	
		}
		this.props.actions.taskClicked(completedTasks);
	}

	render(){
		return(
			<ul>
				{	
					this.props.data.entered.map((value,key)=>{
						return <li style={styles.listItem} key={key}>
							<a className={"todo todo"+key} onClick={()=>{this._taskDone(key)}} style={styles.anchor} href='javascript:void(0)' >
								{value}
							</a>
						</li>
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
const mapDispatchToProps=(dispatch)=>{
  return {actions: bindActionCreators({taskClicked},dispatch)};
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
export default connect(mapStateToProps,mapDispatchToProps)(ToDoList);