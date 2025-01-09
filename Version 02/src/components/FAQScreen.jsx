import React from "react";

const FAQScreen = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
      backgroundImage: "url('./bg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "'Arial', sans-serif",
      minHeight: "100vh",
    },
    header: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "white",
    },
    searchBar: {
      width: "100%",
      maxWidth: "400px",
      padding: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      marginBottom: "20px",
    },
    section: {
      width: "100%",
      maxWidth: "400px",
      marginBottom: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      padding: "15px",
    },
    sectionHeader: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#555",
    },
    faqItem: {
      marginBottom: "15px",
    },
    question: {
      fontWeight: "bold",
      color: "#333",
    },
    answer: {
      color: "#555",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>[Partner] FAQs</div>
      <input
        type="text"
        placeholder="Search FAQs..."
        style={styles.searchBar}
      />
      <div style={styles.section}>
        <div style={styles.sectionHeader}>Deposits & Withdrawals</div>
        <div style={styles.faqItem}>
          <div style={styles.question}>How to Deposit?</div>
          <div style={styles.answer}>
            You must have available Gcash Balance.
          </div>
        </div>
        <div style={styles.faqItem}>
          <div style={styles.question}>How to Withdraw?</div>
          <div style={styles.answer}>
            You must have available balance in your [app name].
          </div>
        </div>
      </div>
      <div style={styles.section}>
        <div style={styles.sectionHeader}>App Usage</div>
        <div style={styles.faqItem}>
          <div style={styles.question}>How do I navigate the app?</div>
          <div style={styles.answer}>
            Use the menu at the bottom of the screen to access different sections of the app.
          </div>
        </div>
        <div style={styles.faqItem}>
          <div style={styles.question}>
            Is there a way to see my transaction history?
          </div>
          <div style={styles.answer}>
            Yes, you can view your transaction history by going to the 'Transaction History' section.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQScreen;