import {createStore} from 'redux';
import {contacts} from '../static-data';
import reducer from '../reducers/index'


const store = createStore(reducer, {contacts});



export default store;