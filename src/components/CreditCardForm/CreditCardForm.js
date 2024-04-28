import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateCreditCard } from './actions';

const CreditCardForm = () => {
  const dispatch = useDispatch();
  const { cardNumber, expiryDate, securityCode, yourName, vendor} = useSelector((state) => state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateCreditCard({ [name]: value }));
  };

  return (
    <div>
      <input type="text" name="cardNumber" value={cardNumber} onChange={handleChange} />
      <input type="text" name="expiryDate" value={expiryDate} onChange={handleChange} />
      <input type="text" name="securityCode" value={securityCode} onChange={handleChange} />
      <input type="text" name="name" value={yourName} onChange={handleChange} />
      <input type="text" name="vendor" value={vendor} onChange={handleChange} />
    </div>
  );
};

export default CreditCardForm;