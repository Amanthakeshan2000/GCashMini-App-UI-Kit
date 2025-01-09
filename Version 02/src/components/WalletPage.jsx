import React from "react";

const MyWallet = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "850px",
        maxWidth: "600px",
        margin: "auto",
        backgroundColor: "white",
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
          <img
            src="./back.png"
            alt="Back Icon"
            style={{ width: "40px" }}
          />
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            flexGrow: 1,
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
        <span style={{ fontSize: "15px", color: "#ffffff", cursor: "pointer" }}>
          Deposit Status
        </span>
      </div>

      {/* Payment Section */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "25px", marginBottom: "5px" ,fontWeight: "bold",}}>Payment</h2>
        <p style={{ fontSize: "14px", color: "#888888", marginBottom: "20px" }}>
          Select payment method
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "70px",
          }}
        >
          <div style={{ textAlign: "center", cursor: "pointer" }}>
            <img
              src="./Group 207.png"
              alt="Deposit"
              style={{
                width: "100px",
                height: "100px",
                marginBottom: "2px",
                backgroundColor: "#d5efdc",
                borderRadius: "12px",
                padding: "20px",
              }}
            />
            <br />
            <span
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#0f4e31",
              }}
            >
              Deposit
            </span>
          </div>
          <div style={{ textAlign: "center", cursor: "pointer" }}>
            <img
              src="./withdrawal2.png"
              alt="Withdraw"
              style={{
                width: "100px",
                height: "100px",
                marginBottom: "5px",
                backgroundColor: "#d5efdc",
                borderRadius: "12px",
                padding: "20px",
              }}
            />
            <br />
            <span
              style={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#0f4e31",
              }}
            >
              Withdraw
            </span>
          </div>
        </div>
      </div>

      {/* Amount Section */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>
          Deposit/Withdrawal
        </h3>
        <p style={{ fontSize: "14px", color: "#888888", marginBottom: "15px" }}>
          Use your GCash account to pay online
        </p>
        <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 15px",
    backgroundColor: "#e5f7eb",
    borderRadius: "10px",
    marginBottom: "20px",
  }}
>
  <label
    style={{
      fontSize: "16px",
      color: "#888888",
      fontWeight: "bold",
    }}
  >
    Amount
  </label>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      marginLeft: "auto",
    }}
  >
    <input
      type="text"
      placeholder="Enter amount"
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        color: "#0f4e31",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "5px 10px",
        width: "300px",
        height:"50px",
        marginRight: "10px",
      }}
    />
    <label
      style={{
        fontSize: "16px",
        fontWeight: "bold",
        color: "#888888",
      }}
    >
      PHP
    </label>
  </div>
</div>



        <button
          style={{
            display: "block",
            width: "100%",
            backgroundColor: "#0f4e31",
            color: "white",
            border: "none",
            padding: "12px 0",
            borderRadius: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#09371f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0f4e31")}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default MyWallet;
