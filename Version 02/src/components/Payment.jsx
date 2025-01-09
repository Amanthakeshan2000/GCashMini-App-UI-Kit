import React from "react";

const Payment = () => {
  return (
    <div>
      {/* Header with Back Icon */}
      <div
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          backgroundColor: "#0f4e31",        
          color: "white",
          display: "flex",
          alignItems: "center",
          padding: "15px",
          borderRadius: "0px", // For Header only
          zIndex: "100", // Ensure it stays on top of other elements
        }}
      >
        <div
          style={{
            marginRight: "15px",
            cursor: "pointer",
          }}
        >
          <img
            src="./back.png" // Update with your back icon path
            alt="Back Icon"
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
            flexGrow: "1",
          }}
        >
          {/* My Wallet */}
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // Centers the content horizontally
          alignItems: "flex-start", // Align content at the top
          height: "100vh", // Takes full viewport height
          paddingTop: "80px", // Provides space for fixed header
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "rgba(255, 255, 255, 0.925)",
            borderRadius: "0px", // No border radius as per original design
            overflow: "hidden",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
          }}
        >
          {/* Current Balance Section */}
          <div
            style={{
              marginTop: "20px",
              backgroundColor: "#f4f4f4",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#0f4e31",
              }}
            >
              Current Balance
            </div>
            <div
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#0f4e31",
                margin: "10px 0",
              }}
            >
              PHP 5,459.00
            </div>
          </div>

          {/* Deposit and Withdrawal Buttons with Icons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                width: "48%",
                backgroundColor: "#ffffff",  // Fixing the background color (was #fffff, missing one 'f')
                padding: "15px",
                textAlign: "center",
                borderRadius: "10px",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                border: "2px solid #0f4e31",  // Green border color
              }}
            >
              <img
                src="./deposit1.png" // Update with your Deposit icon path
                alt="Deposit Icon"
                style={{
                  width: "40px",
                  height: "40px",
                  marginBottom: "8px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <div style={{ color: "black" }}>Deposit</div>
            </div>
            <div
              style={{
                width: "48%",
                backgroundColor: "#ffffff",  // Fixing the background color (was #fffff, missing one 'f')
                padding: "15px",
                textAlign: "center",
                borderRadius: "10px",
                color: "white",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
                border: "2px solid #0f4e31",  // Green border color
              }}
            >
              <img
                src="./withdraw1.png" // Update with your Withdrawal icon path
                alt="Withdrawal Icon"
                style={{
                  width: "40px",
                  height: "40px",
                  marginBottom: "8px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
              <div style={{ color: "black" }}>Withdraw</div>
            </div>
          </div>

          {/* Sportsbooks Card */}
          <div
            style={{
              backgroundColor: "#ffffff",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              padding: "20px",
              margin: "20px 0",
              textAlign: "center",
            }}
          >
            <img
              src="./sports.png"
              alt="Sportsbooks"
              style={{
                width: "60px",
                height: "60px",
                marginBottom: "15px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto", // Center align the image
              }}
            />
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#0f4e31",
                marginBottom: "10px",
              }}
            >
              Sportsbooks
            </h3>
            <button
              style={{
                width: "100%",
                padding: "15px",
                backgroundColor: "#0f4e31",
                color: "white",
                border: "none",
                borderRadius: "10px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Play Now
            </button>
          </div>

          {/* Casino and Slot Cards Row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {/* Casino Card */}
            <div
              style={{
                width: "48%",
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <img
                src="./casino-chip.png"
                alt="Casino"
                style={{
                  width: "50px",
                  height: "50px",
                  marginBottom: "15px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto", // Center align the image
                }}
              />
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#0f4e31",
                  marginBottom: "10px",
                }}
              >
                Casino
              </h3>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#0f4e31",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Play Now
              </button>
            </div>

            {/* Slot Card */}
            <div
              style={{
                width: "48%",
                backgroundColor: "#ffffff",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                padding: "20px",
                textAlign: "center",
              }}
            >
              <img
                src="./slot-machine.png"
                alt="Slot"
                style={{
                  width: "50px",
                  height: "50px",
                  marginBottom: "15px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto", // Center align the image
                }}
              />
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#0f4e31",
                  marginBottom: "10px",
                }}
              >
                Slot
              </h3>
              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#0f4e31",
                  color: "white",
                  border: "none",
                  borderRadius: "10px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Play Now
              </button>
            </div>
          </div>

          {/* Licensed By Section */}
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              padding: "15px 0",
              borderTop: "1px solid #e0e0e0",
            }}
          >
            <div
              style={{
                fontSize: "14px",
                color: "#888888",
                fontWeight: "bold",
              }}
            >
              Licensed By{" LOGO "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
