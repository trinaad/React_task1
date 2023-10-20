import React, { useState } from "react";

function C1() {
  const [wordCount, setWordCount] = useState(0);

  const count = (e) => {
    const text = e.target.value;
    const words = text.split(/\s+/).filter(Boolean);
    setWordCount(words.length);
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  const boxStyle = {
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "10px",
    width: "350px",
    padding: "20px",
    backgroundColor: "#f4f4f4",
  };

  const inputStyle = {
    width: "100%",
    height: "40px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    padding: "5px",
    marginBottom: "10px",
  };

  const wordCountStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h2 style={{ textAlign: "center" }}>
          Responsive Paragraph Word Counter
        </h2>
        <input
          type="text"
          style={inputStyle}
          placeholder="Enter text here..."
          onChange={count}
        />
        <p style={wordCountStyle}>Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default C1;
