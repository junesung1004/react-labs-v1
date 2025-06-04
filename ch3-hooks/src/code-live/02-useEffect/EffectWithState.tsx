import React, { useEffect, useState } from "react";

export default function EffectWithState() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  //업데이트
  useEffect(() => {
    console.log(`count :  ${count}`);
    console.log(`count :  ${count2}`);
  }, [count, count2]);

  return (
    <>
      <p>count : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>증가</button>
      <button onClick={() => setCount2((c) => c + 1)}>증가2</button>
    </>
  );
}
