import { configureStore } from '@reduxjs/toolkit';
import creditCardReducer from '../reducers/reducers'; 

const store = configureStore({
    reducer: {
      creditCard: creditCardReducer,
      
    },
});  
  
export default store;