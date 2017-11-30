import initialState from './initialState';
const ToDoReducer=(state=initialState(),action)=>{
	switch(action.type){
		case 'EnterClicked':
			return Object.assign({},state,{entered:action.payload});
			break;
		case "TodoClicked":
			return Object.assign({},state,{completedTasks:action.payload}) 
			break;
		default:{
			return state;
		}	
	}
}
export default ToDoReducer;