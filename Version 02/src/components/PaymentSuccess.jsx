import React from 'react';

const PaymentSuccess = () => {
  const containerStyle = {
    width: '100%',
    height: '850px',
    maxWidth: "600px",
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.925)',
    borderRadius: '0px',
    overflow: 'hidden',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    backgroundColor: '#0f4e31',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
  };

  const headerTextStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    flexGrow: 1,
  };

  const navTabsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#0f4e31',
    padding: '20px 0',
  };

  const navItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    fontSize: '14px',
    cursor: 'pointer',
    width: '33%',
    textAlign: 'center',
  };

  const subNavStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 55px',
    backgroundColor: '#0f4e31',
    borderBottom: '1px solid #e0e0e0',
  };

  const subNavTextStyle = {
    fontSize: '15px',
    color: '#ffffff',
    fontWeight: 'bold',
    textDecoration: 'underline',
    textDecorationThickness: '3px',
    textUnderlineOffset: '7px',
  };

  const paymentSectionStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  const paymentCardStyle = {
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const successImageStyle = {
    marginBottom: '20px',
    width: '130px',
  };

  const successTextStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#28a745',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={{ marginRight: '-35px' }}>
          <img src="./back.png" alt="Back Icon" style={{ width: '40px' }} />
        </div>
        <div style={headerTextStyle}>My Wallet</div>
      </div>

      {/* Navigation Tabs */}
      <div style={navTabsStyle}>
        <div style={navItemStyle}>
          <img src="./deposit.png" alt="Deposit" style={{ width: '30px', height: '30px', marginBottom: '5px' }} />
          <span>Deposit</span>
        </div>
        <div style={navItemStyle}>
          <img src="./withdrowalNew.png" alt="Withdraw" style={{ width: '30px', height: '30px', marginBottom: '5px' }} />
          <span>Withdraw</span>
        </div>
        <div style={navItemStyle}>
          <img src="./history.png" alt="History" style={{ width: '30px', height: '30px', marginBottom: '5px' }} />
          <span>History</span>
        </div>
      </div>

      {/* Sub-Navigation */}
      <div style={subNavStyle}>
        <span style={subNavTextStyle}>Deposit Methods</span>
        <span style={{ fontSize: '15px', color: '#ffffff', cursor: 'pointer' }}>Deposit Status</span>
      </div>

      {/* Payment Section */}
      <div style={paymentSectionStyle}>
        <h2 style={{ fontSize: '25px', marginBottom: '5px',fontWeight: "bold" }}>GCash</h2>
        <p style={{ fontSize: '14px', color: '#888888', marginBottom: '20px' }}></p>

        {/* Success Card */}
        <div style={paymentCardStyle}>
          <div style={successImageStyle}>
            <img src="./Success.png" alt="Payment Success" style={{ width: '130px' }} />
          </div>

          {/* Confirmation Text */}
          <p style={successTextStyle}>Payment Success</p>

          {/* Confirmation Button */}
          <button style={buttonStyle}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
