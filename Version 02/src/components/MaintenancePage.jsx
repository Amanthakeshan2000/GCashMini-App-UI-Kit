import React from "react";

const MaintenancePage = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundImage: `url('/bg.png')`, // Set the background image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      fontFamily: "'Arial', sans-serif",
    },
    card: {
      backgroundColor: "rgba(255, 255, 255, 0.8)", // Light background for readability
      borderRadius: "20px",
      padding: "30px",
      maxWidth: "600px",
      width: "90%",
      textAlign: "center",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
    },
    heading: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1.1rem",
      color: "#555",
      marginBottom: "20px",
    },
    image: {
      width: "100%",
      borderRadius: "15px",
      marginBottom: "20px",
    },
    button: {
      padding: "12px 30px",
      backgroundColor: "#097969",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      textTransform: "uppercase",
      with:"100%",
    },
    buttonHover: {
      backgroundColor: "#444",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
     
        <div style={styles.heading}>Maintenance</div>
        <img
          src="/pngwing.com.png" 
          alt="Maintenance"
          style={styles.image}
        />
        <div style={styles.description}>
          We're working hard to improve our services. Please bear with us as we
          make updates. Thank you for your patience.
        </div>
      
        <button style={styles.button} onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = "#000"}>
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default MaintenancePage;
