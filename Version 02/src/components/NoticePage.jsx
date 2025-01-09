import React, { useState } from "react";

const NoticePage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: "url('/bg.png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Arial, sans-serif",
      },
    popup: {
      display: showPopup ? "flex" : "none",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "80%",
      maxWidth: "400px",
    },
    popupTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    popupMessage: {
      fontSize: "1rem",
      lineHeight: "1.5",
      marginBottom: "20px",
      color: "#333",
    },
    btnPrimary: {
      backgroundColor: "#097969",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      cursor: "pointer",
      fontSize: "1rem",
      width:"100%",
    },
    btnPrimaryHover: {
      backgroundColor: "#0056b3",
    },
    btnSecondary: {
      backgroundColor: "#d9d9d9",
      color: "#333",
      border: "none",
      borderRadius: "5px",
      padding: "10px 20px",
      cursor: "not-allowed",
      marginTop: "20px",
      fontSize: "1rem",
    },
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.popup}>
        <h2 style={styles.popupTitle}>Notice</h2>
        <p style={styles.popupMessage}>
          You are now leaving the GCash app. GCash is not responsible for any
          content or transactions on this website. We advise you to never share
          your GCash MPIN and OTP.
        </p>
        <button
          style={styles.btnPrimary}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = styles.btnPrimaryHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.btnPrimary.backgroundColor)
          }
          onClick={closePopup}
        >
          Got it
        </button>
      </div>
      <button style={styles.btnSecondary} disabled>
        Complete Transaction
      </button>
    </div>
  );
};

export default NoticePage;
