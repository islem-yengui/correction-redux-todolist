import { ADDTASK, EDITTASK,DELETE_TASK,COMPLETE_TASK } from "./typeAction"



const init ={
    TASK:[
        {
            id : Math.random(),
            description : "go to the cinema",
            completed : true
        
        },
        {
            id : Math.random(),
            description : "make up",
            completed : false
        
        },
        {
            id : Math.random(),
            description : "go to work",
            completed : false
        
        }
    ],
    
}

const reducer =(state=init,{type,payload})=>{
    switch (type) {
        case ADDTASK:
            return{
                ...state,TASK:[...state.TASK,payload]
            }
    case EDITTASK:
        return{
        
        }
        case DELETE_TASK:
      return {...state,Task:state.TASK.filter((el) => el.id !== payload)}
    case COMPLETE_TASK:
      return {...state,TASK:state.TASK.map((el) =>
        el.id === payload ? { ...el, completed: !el.completed } : el
      );}
        default:
           return state
    }
}

export default reducer