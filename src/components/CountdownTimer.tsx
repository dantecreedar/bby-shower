import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  eventDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ eventDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const timeDifference = eventDate.getTime() - now;

      if (timeDifference <= 0) {
        clearInterval(intervalId);
        setTimeRemaining("¡El Baby Shower ha comenzado!");
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventDate]);

  return (
    <div className="text-center mt-4 mb-4 text-white">
      <p className="text-2xl">Tiempo restante para el Baby Shower:</p>
      <p className="text-xl font-bold mt-2">{timeRemaining}</p>
    </div>
  );
};

export default CountdownTimer;
