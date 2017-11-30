export const taskClicked=(data)=>{
  return{
    type:"TodoClicked",
    payload:data,
  }
}
export const enterClicked=(data)=>{
  return{
    type:"EnterClicked",
    payload:data,
  }
}