import React from 'react';

import ReactDOM from 'react-dom';
const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const style = {
   color: 'gold',
   layout: 'horizontal',
   size: 'medium',
   shape: 'pill',
   tagline: false,
   height: 40,
};

const PaypalButton = ({ onClick, onApprove, total }) => {
   return (
      <PayPalButton
         style={style}
         onClick={onClick}
         onApprove={onApprove}
         createOrder={(data, actions) =>
            actions.order.create({
               purchase_units: [
                  {
                     amount: {
                        value: total.toFixed(2),
                     },
                  },
               ],
            })
         }
      />
   );
};

export default PaypalButton;
