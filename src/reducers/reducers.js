import { UPDATE_CREDIT_CARD } from '../redux/actions';

const initialState = {
  cardNumber: '',
  expiryDate: '',
  securityCode: '',
  yourName: '',
  vendor: '',
};

const creditCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CREDIT_CARD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default creditCardReducer;