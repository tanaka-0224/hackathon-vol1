import React, { useState, useEffect } from "react";
import CountDown from "./CountDown";

const SlangGrid = () => {
  const [randomSlangs, setRandomSlangs] = useState([]);
  const [selectedSlang, setSelectedSlang] = useState("Select slang");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/slang.txt");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const textData = await response.text();
        const slangArray = textData
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);

        const randomIndexes = [];
        while (randomIndexes.length < 25) {
          const randomIndex = Math.floor(Math.random() * slangArray.length);
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
          }
        }

        const selectedSlangs = randomIndexes.map((index) => slangArray[index]);
        setRandomSlangs(selectedSlangs);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleSlangClick = (slang) => {
    setSelectedSlang(slang);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const gridRows = [];
  for (let i = 0; i < 5; i++) {
    const start = i * 5;
    const end = start + 5;
    const row = randomSlangs.slice(start, end);
    gridRows.push(row);
  }

  return (
    <div>
      <div>
        <h1>{selectedSlang && <p>Selected Slang: {selectedSlang}</p>}</h1>
      </div>
      <div className="div-img">
        <CountDown seconds={1000} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
      >
        {gridRows.map((row, rowIndex) =>
          row.map((slang, columnIndex) => (
            <div
              key={rowIndex * 5 + columnIndex}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "center",
                cursor: "pointer",
                backgroundColor:
                  selectedSlang === slang ? "#e0e0e0" : "transparent",
              }}
              onClick={() => handleSlangClick(slang)}
            >
              {slang}
            </div>
          ))
        )}
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default SlangGrid;
