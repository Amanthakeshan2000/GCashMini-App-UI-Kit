import React from "react";

const Loading = () => {
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
        backgroundImage: "url('./background-image.png')", // Background image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div
style={{
    backgroundColor: "transparent", // Make background transparent
    color: "white",
    display: "flex",
    alignItems: "center",
    padding: "25px",
  }}
  
>
  {/* Left: First Icon */}
  <div style={{ marginRight: "auto" }}>
    <img src="./close.png" alt="Back Icon" style={{ width: "25px" }} />
  </div>

  {/* Center: Second Icon */}
  <div style={{  display: "flex", justifyContent: "center" }}>
    <img src="./backarr.png" alt="Back Icon" style={{ width: "35px" }} />
  </div>

  {/* Center: Third Icon */}
  <div style={{ display: "flex", justifyContent: "center",width: "20px" }}>
    
  </div>

  {/* Center: Third Icon */}
  <div style={{ display: "flex", justifyContent: "center" }}>
    <img src="./nextarr.png" alt="Back Icon" style={{ width: "35px" }} />
  </div>

  {/* Right: Fourth Icon */}
  <div style={{ marginLeft: "auto" }}>
    <img src="./refresh.png" alt="Back Icon" style={{ width: "25px" }} />
  </div>
</div>


      {/* Logos and Transfer Icon in the same row */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20%", // Adjust margin as needed
        }}
      >
        {/* Logo 1 */}
        <img
          src="./logo1.png" // Replace with your logo1 path
          alt="Logo 1"
          style={{
            width: "80px",
            marginRight: "20px", // Space between logos and transfer icon
          }}
        />
         {/* Transfer Icon */}
         <img
          src="./transfer.png" // Replace with your transfer icon path
          alt="Transfer Icon"
          style={{
            width: "50px",
            marginRight: "20px", // Space between logos and transfer icon
          }}
        />
        {/* Logo 2 */}
        <img
          src="./logo2.png" // Replace with your logo2 path
          alt="Logo 2"
          style={{
            width: "80px",
            
          }}
        />
       
      </div>
            {/* Redirecting you to Bingo Plus Text */}
            <div
          style={{
            marginTop: "20px", // Space between loader and text
            color: "white",
            fontSize: "18px",
            fontWeight: "thin",
            textAlign: "center",
          }}
        >
          Redirecting you to Bingo Plus
        </div>

      {/* Loading Animation Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100% - 200px)", // Adjust height to fill the remaining space
          flexDirection: "column",
        }}
      >
        {/* Spinning Loader */}
        <div
          style={{
            marginTop: "-350px", 
            width: "80px",
            height: "80px",
            border: "10px solid #f3f3f3",
            borderTop: "8px solid #0f4e31",
            borderRadius: "50%",
            animation: "spin 2s linear infinite",
          }}
        />

        {/* Loading Text */}
        <div
          style={{
            marginTop: "20px", // Space between loader and text
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Loading...
        </div>
      </div>

      {/* Add CSS for Spinning Animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
