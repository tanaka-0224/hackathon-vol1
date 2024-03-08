import { useEffect, useRef, useState } from "react";
import "../styles/CountDown.css";

export default function CountDown({ seconds }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      window.location.href = "/resultlose";
    }
  }, [countdown]);

  return <div className="CountDownContainer">制限時間: {countdown}</div>;
}
