
import React, { useState } from 'react';
import {app} from './FirebaseConfig';


const PhoneAuth = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleSendCode = async () => {
    try {
      const confirmation = await app.auth().signInWithPhoneNumber(phoneNumber);
      setConfirmationResult(confirmation);
    } catch (error) {
      console.error('Error sending code:', error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      await confirmationResult.confirm(code);
      console.log('Phone number verified successfully!');
    } catch (error) {
      console.error('Error verifying code:', error);
    }
  };

  return (
    <div>
      <h2>Phone Authentication</h2>
      <div>
        <label>Phone Number:</label>
        <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
        <button onClick={handleSendCode}>Send Code</button>
      </div>
      <div>
        <label>Verification Code:</label>
        <input type="text" value={code} onChange={handleCodeChange} />
        <button onClick={handleVerifyCode}>Verify Code</button>
      </div>
    </div>
  );
};

export default PhoneAuth;
