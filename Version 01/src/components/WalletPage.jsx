import React, { useState } from "react";

const MyWallet = () => {
  const [selectedTab, setSelectedTab] = useState("Deposit Methods");
  const getStatusStyle = (status) => {
    if (status === "Completed") {
      return {
        color: "#0f4e31",
        backgroundColor: "#d5efdc",
        borderRadius: "5px",
        padding: "5px 10px",
        textAlign: "center",
        fontWeight: "bold",      
      };
    }
    if (status === "Pending") {
      return {
        color: "#e67e22",
        backgroundColor: "#fce4d6",
        borderRadius: "5px",
        padding: "5px 10px",
        textAlign: "center",
        fontWeight: "bold",
      };
    }
    // Add other status styles if needed
    return {
      color: "#333",
      backgroundColor: "#f0f0f0",
      borderRadius: "5px",
      padding: "5px 10px",
      textAlign: "center",
      fontWeight: "bold",
    };
  };
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
          <img src="./back.png" alt="Back Icon" style={{ width: "40px" }} />
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
        {["Deposit", "Withdrawal", "History"].map((tab, index) => (
          <div
            key={index}
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
              src={`./${tab.toLowerCase()}.png`}
              alt={tab}
              style={{ width: "30px", height: "30px", marginBottom: "5px" }}
            />
            <span>{tab}</span>
          </div>
        ))}
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
        {["Deposit Methods", "Deposit Status"].map((tab) => (
          <span
            key={tab}
            onClick={() => setSelectedTab(tab)}
            style={{
              fontSize: "15px",
              color: selectedTab === tab ? "#ffffff" : "#c0c0c0",
              fontWeight: "bold",
              textDecoration: selectedTab === tab ? "underline" : "none",
              textDecorationThickness: selectedTab === tab ? "4px" : "0",
              textUnderlineOffset: "7px",
              cursor: "pointer",
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Tab Content */}
      <div
        style={{
          padding: "20px",
          animation: "slide-in 0.5s ease",
        }}
      >
        {selectedTab === "Deposit Methods" && (
          <div>
            {/* Payment Section */}
            <h2
              style={{
                fontSize: "25px",
                marginBottom: "5px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Payment
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#888888",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Select payment method
            </p>
            {/* Payment Methods */}
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

            {/* Amount Section */}
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>
                Deposit/Withdrawal
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#888888",
                  marginBottom: "15px",
                }}
              >
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
                    type="number"
                    placeholder="Enter amount"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#0f4e31",
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "5px 10px",
                      width: "80%",
                      marginRight: "10px",
                      marginLeft: "40px",
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
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#09371f")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#0f4e31")}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {selectedTab === "Deposit Status" && (
          <div>
            {/* Deposit Status Table */}
            <h2
              style={{
                fontSize: "25px",
                marginBottom: "5px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Deposit Status
            </h2>
            <div
              style={{
                overflowX: "auto",
                marginTop: "20px",
              }}
            >
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                }}
              >
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>Date</th>
                    <th style={tableHeaderStyle}>Deposit/Withdrawal</th>
                    <th style={tableHeaderStyle}>Amount</th>
                    <th style={tableHeaderStyle}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={tableCellStyle}>2024-11-28</td>
                    <td style={tableCellStyle}>Deposit</td>
                    <td style={tableCellStyle}>PHP 5,000</td>
                    <td style={{ ...tableCellStyle, ...getStatusStyle("Completed") }}>
                      Completed
                    </td>
                  </tr>
                  <tr>
                    <td style={tableCellStyle}>2024-11-25</td>
                    <td style={tableCellStyle}>Withdrawal</td>
                    <td style={tableCellStyle}>PHP 2,000</td>
                    <td style={{ ...tableCellStyle, ...getStatusStyle("Pending") }}>
                      Pending
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const tableHeaderStyle = {
  padding: "10px",
  textAlign: "left",
  backgroundColor: "#0f4e31",
  color: "white",
  fontSize: "16px",
};

const tableCellStyle = {
  padding: "10px",
  textAlign: "left",
  borderBottom: "1px solid #ccc",
  fontSize: "14px",
  color: "#333",
};

export default MyWallet;
