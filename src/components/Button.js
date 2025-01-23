// import React from "react";

// const Button = ({ onClick }) => {
//   return (
//     <button
//       onClick={onClick}
//       style={{
//         padding: "10px 20px",
//         fontSize: "16px",
//         fontWeight: "bold",
//         color: "#fff",
//         backgroundColor: "#007BFF",
//         border: "none",
//         borderRadius: "5px",
//         cursor: "pointer",
//         marginTop: "20px",
//       }}
//     >
//       Click Me!
//     </button>
//   );
// };

// export default Button;

import React from "react";

const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        color: "#fff",
        backgroundColor: "#007BFF",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "20px",
        transition: "background-color 0.3s ease",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        textTransform: "uppercase",
        letterSpacing: "1px",
        outline: "none",
      }}
    >
      Click Me!
    </button>
  );
};

export default Button;
