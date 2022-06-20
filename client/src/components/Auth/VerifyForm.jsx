import { Box, TextField } from '@mui/material';
import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';

const OtpInput = ({ focus, ...rest }) => {
   const ref = useRef(null);

   useEffect(() => {
      if (ref.current && focus) {
         ref.current.focus();
      }
   }, [ref, focus]);

   return (
      <TextField inputRef={ref} sx={{ width: 50, height: 60, textAlign: 'center' }} {...rest} />
   );
};

const VerifyForm = ({ length, onChange, value }) => {
   const [activeInput, setActiveInput] = useState(0);

   const otpValues = useMemo(() => {
      if (!value) {
         setActiveInput(0);
      }
      return Object.assign(new Array(length).fill(''), value.split(''));
   }, [value, length]);

   const focusInput = useCallback(
      (index) => {
         const selectedIndex = Math.min(Math.max(index, 0), length - 1);
         setActiveInput(selectedIndex);
      },
      [setActiveInput, length]
   );

   const changeValueAtFocus = useCallback(
      (value) => {
         otpValues[activeInput] = value;
         console.log(otpValues.join(''));
         onChange?.(otpValues.join(''));
      },
      [activeInput, otpValues, onChange]
   );

   const handleSingleInputChange = useCallback(
      (e) => {
         const value = e.target.value.slice(-1);
         changeValueAtFocus(value);
         focusInput(activeInput + 1);
      },
      [activeInput, changeValueAtFocus, focusInput]
   );

   const handleSingleInputKeyDown = useCallback(
      (e) => {
         const key = e.key;
         switch (key) {
            case 'Backspace': {
               e.preventDefault();
               if (otpValues[activeInput]) {
                  changeValueAtFocus('');
               } else {
                  otpValues[activeInput - 1] = '';
                  focusInput(activeInput - 1);
               }
               break;
            }
            case 'ArrowLeft': {
               focusInput(activeInput - 1);
               break;
            }
            case 'ArrowRight': {
               focusInput(activeInput + 1);
               break;
            }
            default: {
               if (key.match(/[^\d]/)) e.preventDefault();
               break;
            }
         }
      },
      [activeInput, focusInput, otpValues, changeValueAtFocus]
   );

   return (
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
         {Array(length)
            .fill('')
            .map((_, index) => (
               <OtpInput
                  value={otpValues[index]}
                  key={index}
                  focus={activeInput === index}
                  onChange={handleSingleInputChange}
                  onKeyDown={handleSingleInputKeyDown}
                  onBlur={() => setActiveInput(-1)}
                  onFocus={() => focusInput(index)}
               />
            ))}
      </Box>
   );
};

export default VerifyForm;
