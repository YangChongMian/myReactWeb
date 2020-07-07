import { createStore } from 'redux'
import data from './datas'

const defaultState = {
        data
};

const store = createStore((state = defaultState , action) => {
    
    // console.log(state,action);
    if(action.type === 'path_status'){
        let newStatus = JSON.parse(JSON.stringify(state));
        newStatus.data.navHeightLight = action.value;
        return newStatus;
    }
    return state;
});
export default store;