import React, { useRef, useState } from "react";

export default function Timer() {
  const timerId = useRef<number | undefined>(0);
  const [count, setCount] = useState(0);

  function start() {
    timerId.current = setInterval(() => {
      setCount((c) => c + 1); // 클로저 동작 때문에 c + 1은 안되고 함수 형태의 매개변수로 사용해야 한다.
    }, 1000);
  }

  function stop() {
    clearInterval(timerId.current);
  }

  return (
    <div>
      <p>카운트 : {count}</p>
      <button onClick={start}>시작</button>
      <button onClick={stop}>멈춤</button>
    </div>
  );
}
