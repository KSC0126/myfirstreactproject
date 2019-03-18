const userReducers = (state = { user: [] }, action) => {
    switch(action.type){
        case "ADD_USER":
        return {user: [...state.user.concat(action.payload)]};
        break;
        
        default: 
        return state;
    }
}

export default userReducers;