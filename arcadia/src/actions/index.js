import types from './types';
import axios from 'axios';


export function retrieveContacts(){
    const response = axios.get('/contacts')

    return{
        type: types.GET_CONTACTS,
        payload: response
    }
    
}

export function createContact(values){
    return{
        type: types.CREATE_CONTACT,
        payload: values
    }
}

export function updateContact(oldValues, newValues){
    return{
        type: types.UPDATE_CONTACT,
        payload: newValues,
        payload2: oldValues
    }
}

export function deleteContact(values){
    return{
        type: types.DELETE_CONTACT,
        payload: values
    }
}