import React, { useState } from 'react';

const useMergeState = (initState) => {
   const [state, setState] = useState(initState);

   const setMergeState = (newState) => {
      setState({ ...state, ...newState });
   };

   return [state, setMergeState];
};

export default useMergeState;
