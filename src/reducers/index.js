import {combineReducers} from 'redux';
import userReducers from './userReducers';
//import adminReducers from './adminReducers';




export default combineReducers({
    users: userReducers
});
// const rootReducer = combineReducers({
//     users: userReducers
// })

// export default rootReducer;
