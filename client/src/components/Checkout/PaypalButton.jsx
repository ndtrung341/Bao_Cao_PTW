import { PayPalButtons } from '@paypal/react-paypal-js';
import React from 'react';

const style = {
   color: 'gold',
   layout: 'horizontal',
   size: 'medium',
   shape: 'pill',
   tagline: false,
   height: 40,
};

const PaypalButton = ({ onClick, onApprove, total }) => {
   console.log(total);
   return (
      <PayPalButtons
         style={style}
         onClick={onClick}
         forceReRender={[total]}
         onApprove={onApprove}
         createOrder={(data, actions) => {
            return actions.order.create({
               purchase_units: [
                  {
                     amount: {
                        value: total,
                     },
                  },
               ],
            });
         }}
      />
   );
};

export default PaypalButton;
