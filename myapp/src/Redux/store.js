import {configureStore} from '@reduxjs/toolkit'
import Cakereducer from './cakes/cakeReducer';

const store=configureStore({reducer:Cakereducer});

export default store;
