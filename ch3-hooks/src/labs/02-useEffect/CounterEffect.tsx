import React, { useEffect, useState } from "react";

export default function CounterEffect() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount((prev) => prev + 1);
    console.log(`"count is {count}"`);
  }, [count]);
  return <div>CounterEffect</div>;
}
