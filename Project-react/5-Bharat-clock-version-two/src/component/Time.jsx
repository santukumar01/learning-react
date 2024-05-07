import { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const serIntervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(serIntervalId);
      console.log("user");
    };
  }, []);

  return (
    <div style={{ fontSize: "20px" }}>
      The Time in India : {time.toLocaleDateString()} -
      {time.toLocaleTimeString()}
    </div>
  );
}

export default Time;
