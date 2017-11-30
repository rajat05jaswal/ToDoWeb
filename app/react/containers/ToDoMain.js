import React, { Component } from 'react';
import TODoList from './ToDoList';
import ToDoCompleted from './ToDoCompleted';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {enterClicked} from '../actions/index';

class ToDoMain extends Component{
	constructor(props){
		super(props);
		this.state={
			text:'',
			entered:[],
		}
		this._handleKeyPress=this._handleKeyPress.bind(this);
	}

	_handleKeyPress(e){
		if (e.key === 'Enter') {
			this.enterPressed();
	    }
	}

	enterPressed(){
		var text=this.state.text;
		var array=this.state.entered;
		array.push(this.state.text);
		this.setState({entered:array});
		this.setState({text:''});
		this.props.actions.enterClicked(this.state.entered);
	}

	render(){
		return(
			<div style={{textAlign:'center',flex:1}}>
				<input type='text' value={this.state.text}
					onChange ={(e)=>this.setState({text: e.target.value})} 
					style={{height:50,width:'100%',fontSize:30}}
					onKeyPress={this._handleKeyPress}
				/>
				<div style={{float:'left',marginTop: 50,border: '2px solid #000',padding: 20,width:'45%'}}>
					<h3>What is in your Checklist?</h3>
					<TODoList />
				</div>
				<div style={{float:'right',marginTop: 50,border: '2px solid #000',padding: 20,width:'45%'}}>
					<h3>What Tasks are Completed?</h3>
					<ToDoCompleted />
				</div>
			</div>
		)
	}

}


const mapDispatchToProps=(dispatch)=>{
  return {actions: bindActionCreators({enterClicked},dispatch)};
}

export default connect(null,mapDispatchToProps)(ToDoMain);