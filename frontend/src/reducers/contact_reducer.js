import types from '../actions/types';

const DEFAULT_STATE = {
    contacts: [],
}

const contactReducer = (state = DEFAULT_STATE, action) => {
    switch(action.type){
        
        case types.GET_CONTACTS:
            return {...state, contacts: action.payload.data.contacts};
        case types.CREATE_CONTACT:
            const newContact = action.payload
            const id = state.contacts.length + 1;
            newContact.id = id + ''
            return {...state, contacts: [...state.contacts, newContact]};
        case types.UPDATE_CONTACT:
            //to Update the contact, we have sent 2 payloads (one with the old values, and one with the new). we simply replace
            //the old with the new and return a new contact list in state
            state.contacts.forEach((contact => {
                if(contact.id === action.payload2.id){
                    contact.name = action.payload.name
                    contact.phone = action.payload.phone
                    contact.email = action.payload.email
                }
                return {...state, contacts: [...state.contacts, contact]}
            }));
            return{...state, contacts: [...state.contacts]}
        case types.DELETE_CONTACT:
            //here we filter our contact list and keep everything that does not have the same ID, as the one we selected.
            return { ...state, contacts: state.contacts.filter(contact => contact.id !== action.payload.id) };
        default: 
            return state;
    }
}

export default contactReducer