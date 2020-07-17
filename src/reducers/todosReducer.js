function reducer(state, action){
    switch(action.type){
        case 'ADD' :
            return [...state, action.task]
        case 'REMOVE' :
            return state.filter(t => t !== action.task)
        case 'EDIT' :
            return state.map((t,i) => i === action.index ? action.task : t) 
        case 'REARRANGE':
            return action.todos    
        default :
            return state      
    }
}

export default reducer