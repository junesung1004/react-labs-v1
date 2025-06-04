import { useEffect, useState } from "react";

export default function IntervalCleanup() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      // setInterval 함수가 종료되면 고유의 넘버값이 리턴되는데 그게 즉 인터벌 id이며 그것으로 종료 할 수 있다.
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return <>{seconds}초 경과</>;
}
