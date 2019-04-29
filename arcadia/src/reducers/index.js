import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from './contact_reducer'


const rootReducer = combineReducers({
    contacts: contactReducer,
    form: formReducer,
});



export default rootReducer;