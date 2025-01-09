import React from "react";

const UserConceptPage = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundImage: `url('/bg.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "'Arial', sans-serif",
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      borderRadius: "15px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      width: "90%",
      maxWidth: "400px",
      padding: "20px",
    },
    header: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      textAlign: "center",
      color: "#333",
    },
    content: {
      fontSize: "0.9rem",
      color: "#555",
      marginBottom: "15px",
      lineHeight: "1.5",
    },
    link: {
      color: "#097969",
      textDecoration: "underline",
      cursor: "pointer",
    },
    buttons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    button: {
      flex: "1",
      padding: "10px",
      margin: "0 5px",
      backgroundColor: "#097969",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
      textAlign: "center",
    },
    cancelButton: {
      backgroundColor: "#ddd",
      color: "#333",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>User Concept</div>
        <div style={styles.content}>
          By proceeding, you agree to:
          <ul>
            <li>
              Share your basic profile information (e.g., name, email) with our mini app to
              personalize your experience.
            </li>
            <li>
              Allow us to process your actions within the mini app for functionality and analytics
              purposes.
            </li>
            <li>
              Adhere to the terms and privacy policy of [Your Mini App Name].
            </li>
          </ul>
          For more details, please review:
          <ul>
            <li>
              <span style={styles.link}>Mini App Terms of Service</span>
            </li>
            <li>
              <span style={styles.link}>Mini App Privacy Policy</span>
            </li>
          </ul>
          You can withdraw your consent anytime by disconnecting the app or contacting our support
          team.
        </div>
        <div style={styles.buttons}>
          <button style={styles.button}>Yes, Continue</button>
          <button style={{ ...styles.button, ...styles.cancelButton }}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default UserConceptPage;
