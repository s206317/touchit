import React, { useState } from 'react';

function VibrationComponent() {
  const [number, setNumber] = useState('');
  const [consent, setConsent] = useState(false);

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleConsentChange = (e) => {
    setConsent(e.target.checked);
  };

  const triggerVibration = () => {
    if (consent && 'vibrate' in navigator) {
      // Detta utlöser en enkel vibration
      navigator.vibrate(1000); // Vibrate for 1000 milliseconds
    }
  };

  return (
    <div>
      <input
        type="tel"
        value={number}
        onChange={handleNumberChange}
        placeholder="Enter mobile number"
      />
      <label>
        <input
          type="checkbox"
          checked={consent}
          onChange={handleConsentChange}
        />
        I agree to participate
      </label>
      <button onClick={triggerVibration}>Vibrate Phone</button>
    </div>
  );
}

export default VibrationComponent;
