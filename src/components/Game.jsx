import React, { useState, useEffect, useRef } from "react";
import CountDown from "./CountDown";
import Popup from "./Popup";
import "../types/Visual.css";

const Game = () => {
  const [randomSlangs, setRandomSlangs] = useState([]);
  const [selectedSlang, setSelectedSlang] = useState("Select slang");
  const [error, setError] = useState(null);
  const [cellColors, setCellColors] = useState([]);
  const [defaultcellColors, setDefaultCellColors] = useState("#FFFFFF");
  const [isPopupVisible, setPopupVisible] = useState(true);
  const [isTimerRunning, setTimerRunning] = useState(false);
  const [selectnumber, setSelectNumber] = useState(0);
  const [colorCounts, setColorCounts] = useState({});
  const [isCardRotated, setIsCardRotated] = useState(false); // ボタンの回転状態


  const gridRef = useRef([]);
  const handleCardRotate = () => {
    setIsCardRotated(!isCardRotated); // ボタンを回転させる状態に設定
  };

  useEffect(() => {
    // 色の数が変更されたときの処理
    if (colorCounts["#db605f"] === 12) {
      // 画面遷移させる処理
      window.location.href = "/resultwin";
    }
  }, [colorCounts]);

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

        const colors = Array(12)
          .fill("#db605f")
          .concat(Array(12).fill("#20a095"))
          .concat(["#4a4e4d"]);
        // 色の順番をシャッフルする
        colors.sort(() => Math.random() - 0.5);
        setCellColors(colors);

        // 初期のランダムな背景色を保持

        const randomIndexes = [];
        while (randomIndexes.length < 25) {
          const randomIndex = Math.floor(Math.random() * slangArray.length);
          if (!randomIndexes.includes(randomIndex)) {
            randomIndexes.push(randomIndex);
          }
        }

        const selectedSlangs = randomIndexes.map((index) => slangArray[index]);
        setRandomSlangs(selectedSlangs);
        // 背景色の出現回数をカウント
        const counts = {};
        randomSlangs.forEach((slang, index) => {
          const color = cellColors[index];
          counts[color] = (counts[color] || 0) + 1;
        });
        setColorCounts(counts);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
    gridRef.current.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const backgroundColor = window.getComputedStyle(cell).backgroundColor;
        console.log(
          `Gridのセル(${rowIndex + 1}, ${colIndex + 1})の背景色:`,
          backgroundColor
        );
      });
    });
  }, []);

  const handlePopupStartButtonClick = () => {
    // ここで初期のランダムな背景色を使って何かの処理を行うことができます

    setPopupVisible(false);
    setTimerRunning(true);
  };

  const handleStartButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    setTimerRunning(true);
  };

  const handleSlangClick = (slang, rowIndex) => {
    const str1 = rowIndex;
    const result1 = Number(str1);

    // selectnumberを更新
    setSelectNumber(result1 + 1);

    // 変更
    setSelectedSlang(slang);
  };

  const handleButtonPress = () => {
    setDefaultCellColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[selectnumber - 1] = cellColors[selectnumber - 1];

      const counts = {};
      newColors.forEach((color) => {
        counts[color] = (counts[color] || 0) + 1;
      });
      setColorCounts(counts);

      return newColors;
    });
   if (cellColors[selectnumber - 1] === "#4a4e4d") {
      window.location.href = "/resultlose";
    }
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
      {/* スタートボタン ・ポーズボタン*/}
      <div className="pressme" style={{ textAlign: "center",fontSize: "40px", marginTop: "30px"}}onClick={handleStartButtonClick}>Porse</div>

      {/* ポップアップ */}
      {isPopupVisible && (
        <Popup
          onClose={handlePopupClose}
          onStartButtonClick={handlePopupStartButtonClick}
        />
      )}
      <div style={{ display: 'flex' }}>
      <div className="selected">
        <h1>{selectedSlang && <p style={{fontSize: "40px"}}>Selected Slang: {selectedSlang}</p>}</h1>
      </div>
      <div className="balloonSlang" style={{textAlign:"center",fontSize:40}}>
        slang number
      </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="cards"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "10px",
        }}
      >
        {gridRows.map((row, rowIndex) =>
          row.map((slang, columnIndex) => (
            <div
              className={isCardRotated ? 'rotate' : ''} // isRotatingの状態によってクラスを適用する
              key={rowIndex * 5 + columnIndex}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                fontSize:20,
                textAlign: "center",
                cursor: "pointer",
                backgroundColor:
                  selectedSlang === slang
                    ? "#e0e0e0"
                    : defaultcellColors[rowIndex * 5 + columnIndex],
              }}
              onClick={() =>{
                handleSlangClick(slang, rowIndex * 5 + columnIndex)
                handleCardRotate();
              }}
            >
              <span>{rowIndex * 5 + columnIndex + 1}</span> {/* 番号を表示 */}
              {slang}
            </div>
          ))
        )}
      </div>

      <div style={{ marginLeft: '20px', marginTop: '30px' }} >
        <img src="./images/ringo.png" className="slangmaster" alt="slang master"/>
        <p style={{ fontSize:40, textAlign:"center",marginTop: '30px'}}>Slang Master</p>
      </div>
      </div>
      <div style={{ display: 'flex' }}>
      <div className="pressme"
        style={{
          marginTop: "30px",
          padding: "10px",
          fontSize: "40px",
          textAlign: "center"
        }}
       onClick={handleButtonPress}
      >
        Press me!
      </div>
      <div className="balloonTips" style={{textAlign:"center", fontSize:20}}>
        tips
      </div>
      </div>
      {/* カウントダウンタイマー */}
      {isTimerRunning && <CountDown seconds={600000} />}
    </div>
  );
};

export default Game;

