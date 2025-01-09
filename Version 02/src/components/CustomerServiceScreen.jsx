import React from "react";

const CustomerServiceScreen = () => {
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
    contactSection: {
      marginBottom: "20px",
    },
    contactItem: {
      display: "flex",
      alignItems: "center",
      marginBottom: "10px",
      fontSize: "1rem",
      color: "#555",
    },
    icon: {
      marginRight: "10px",
      fontSize: "1.2rem",
    },
    formSection: {
      marginTop: "10px",
    },
    label: {
      display: "block",
      fontWeight: "bold",
      marginBottom: "5px",
      fontSize: "0.9rem",
      color: "#333",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "0.9rem",
    },
    textarea: {
      width: "100%",
      padding: "10px",
      height: "80px",
      marginBottom: "15px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "0.9rem",
      resize: "none",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#097969",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      fontSize: "1rem",
      cursor: "pointer",
      textAlign: "center",
    },
    buttonHover: {
      backgroundColor: "#444",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>Customer Service Screen</div>
        <div style={styles.contactSection}>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📧</span>
            support@email
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>📞</span>
            +6391XXXXXXX
          </div>
          <div style={styles.contactItem}>
            <span style={styles.icon}>💬</span>
            Live Chat Available
          </div>
        </div>
        <div style={styles.formSection}>
          <form>
            <label style={styles.label}>Name</label>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Your Email"
              style={styles.input}
            />
            <label style={styles.label}>Message</label>
            <textarea
              placeholder="Your Message"
              style={styles.textarea}
            ></textarea>
            <button type="submit" style={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerServiceScreen;
