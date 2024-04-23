import React, { useState } from 'react';

function OTPButton() {
  const [disabled, setDisabled] = useState(false);
  const [countdown, setCountdown] = useState(5);

  const sendOTP = () => {
    setDisabled(true);

    const timer = setInterval(() => {
        setCountdown(prevCountdown => {
          if (prevCountdown === 0) {
            clearInterval(timer);
            setDisabled(false);
            return 5;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    };
  return (
    <button
      id="otpButton"
      onClick={sendOTP}
      disabled={disabled}
    >
      {disabled ? `${countdown}` : 'Send OTP'}
    </button>
  );
}

export default OTPButton;
