// import React from "react";

// const ScoreDisplay = ({ score, prizes }) => {
//   return (
//     <div style={{ textAlign: "center", marginBottom: "20px" }}>
//       <h1>Score: {score}</h1>
//       <h2>Prizes: {prizes}</h2>
//     </div>
//   );
// };

// export default ScoreDisplay;
import React from "react";

const ScoreDisplay = ({ score, prizes }) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "20px",
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          color: "#333",
          fontSize: "2rem",
          marginBottom: "10px",
        }}
      >
        Score: {score}
      </h1>
      <h2
        style={{
          color: "#6c757d",
          fontSize: "1.5rem",
        }}
      >
        Prizes: {prizes}
      </h2>
    </div>
  );
};

export default ScoreDisplay;
