import React, { useState } from 'react';

function ErrorAlert() {
  const [showAlert, setShowAlert] = useState(false);

  const showError = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000); // Hide alert after 5 seconds
  };

  return (
    <div>
      <button
        onClick={showError}
        className="btn btn-primary"
      >
        Trigger Error
      </button>

      {showAlert && (
        <div
          className="alert alert-danger fixed-top right-0 m-4"
          role="alert"
        >
          <strong>Error!</strong> There is an API limit reached error or please check the console for more details.
        </div>
      )}
    </div>
  );
}

export default ErrorAlert;
