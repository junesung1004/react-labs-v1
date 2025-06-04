import React, { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    if (count === 5) {
      clearInterval(timerId);
      console.log("타이머 종료");
    }

    return () => clearInterval(timerId);
  }, [count]);

  return <div>{count}</div>;
}
