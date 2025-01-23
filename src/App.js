// import React, { useState, useEffect } from "react";
// import Button from "./components/Button";
// import ScoreDisplay from "./components/ScoreDisplay";

// const App = () => {
//   const [score, setScore] = useState(0);
//   const [prizes, setPrizes] = useState(0);
//   const [userId, setUserId] = useState(null);

//   // Fetch userId from backend when the app loads
//   useEffect(() => {
//     fetch("http://localhost:5000/user", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ username: "player1" }),
//     })
//       .then((res) => res.json())
//       .then((data) => setUserId(data._id));
//   }, []);

//   const handleClick = () => {
//     if (!userId) return;

//     fetch("http://localhost:5000/increment", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userId }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setScore(data.score);
//         setPrizes(data.prizes);
//       })
//       .catch((error) => console.error("Error:", error));
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <ScoreDisplay score={score} prizes={prizes} />
//       <Button onClick={handleClick} />
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import ScoreDisplay from "./components/ScoreDisplay";

const App = () => {
  const [score, setScore] = useState(0);
  const [prizes, setPrizes] = useState(0);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: "player1" }),
    })
      .then((res) => res.json())
      .then((data) => setUserId(data._id));
  }, []);

  const handleClick = () => {
    if (!userId) return;
    fetch("http://localhost:5000/increment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setScore(data.score);
        setPrizes(data.prizes);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScoreDisplay score={score} prizes={prizes} />
      <Button onClick={handleClick} />
    </div>
  );
};

export default App;
