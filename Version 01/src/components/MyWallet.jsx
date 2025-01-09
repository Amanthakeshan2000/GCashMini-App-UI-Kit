import React from "react";

const MyWallet = () => {
  return (
<div
  style={{
    width: "100%",
    maxWidth: "600px",
    height: "850px",
    margin: "20px auto",
    backgroundColor: "rgba(255, 255, 255, 0.925)",
    borderRadius: "0px",
    overflow: "hidden",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  }}
>

      {/* Header */}
      <div
        style={{
          backgroundColor: "#0f4e31",
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "15px",
        }}
      >
        <div style={{ marginRight: "-35px" }}>
          <img src="./back.png" alt="Back Icon" style={{ width: "40px" }} />
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            flexGrow: "1",
          }}
        >
          My Wallet
        </div>
      </div>

      {/* Navigation Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#0f4e31",
          padding: "20px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            fontSize: "14px",
            cursor: "pointer",
            width: "33%",
            textAlign: "center",
          }}
        >
          <img
            src="./deposit.png"
            alt="Deposit"
            style={{ width: "30px", height: "30px", marginBottom: "5px" }}
          />
          <span>Deposit</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            fontSize: "14px",
            cursor: "pointer",
            width: "33%",
            textAlign: "center",
          }}
        >
          <img
            src="./withdrowalNew.png"
            alt="Withdraw"
            style={{ width: "30px", height: "30px", marginBottom: "5px" }}
          />
          <span>Withdraw</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            fontSize: "14px",
            cursor: "pointer",
            width: "33%",
            textAlign: "center",
          }}
        >
          <img
            src="./history.png"
            alt="History"
            style={{ width: "30px", height: "30px", marginBottom: "5px" }}
          />
          <span>History</span>
        </div>
      </div>

      {/* Sub-Navigation */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 55px",
          backgroundColor: "#0f4e31",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <span
          style={{
            fontSize: "15px",
            color: "#ffffff",
            fontWeight: "bold",
            display: "inline-block",
            textDecoration: "underline",
            textDecorationThickness: "3px",
            textUnderlineOffset: "7px",
          }}
        >
          Deposit Methods
        </span>
        <span
          style={{ fontSize: "15px", color: "#ffffff", cursor: "pointer" }}
        >
          Deposit Status
        </span>
      </div>

      {/* Payment Section */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "25px", marginBottom: "5px",fontWeight: "bold", }}>GCash</h2>
        <p style={{ fontSize: "14px", color: "#888888", marginBottom: "20px" }}></p>
        <div
          style={{
            padding: "20px",
            border: "1px solid #e0e0e0",
            borderRadius: "10px",
            textAlign: "left",
            backgroundColor: "#ffffff",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#0f4e31",
              textAlign: "center",
            }}
          >
            Deposit
          </h3>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#0f4e31",
              textAlign: "left",
            }}
          >
            PAY TO
          </h3>
          <div style={{ marginTop: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
                color: "#666666",
                marginBottom: "10px",
              }}
            >
              <span>747</span>
              <span style={{ fontSize: "16px", color: "#0f4e31", fontWeight: "bold" }}>
                PHP 5,459.00
              </span>
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#aaaaaa",
                textAlign: "right",
              }}
            >
              Available Balance
            </div>

            <hr style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "30px 0" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
                color: "#666666",
              }}
            >
              <span>Amount</span>
              <span style={{ fontSize: "16px", fontWeight: "bold" }}>PHP 459.00</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
                color: "#0f4e31",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              <span>Total</span>
              <span>PHP 459.00</span>
            </div>
          </div>
          <button
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "20px",
              backgroundColor: "#0f4e31",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            PAY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyWallet;
