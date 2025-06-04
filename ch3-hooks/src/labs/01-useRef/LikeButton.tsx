import React, { useRef, useState } from "react";

export default function LikeButton() {
  const timerOn = useRef<number | undefined>(0);
  const [isAbled, setIsAbled] = useState<boolean | undefined>(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (isAbled || timerOn.current) return;

    setIsAbled(true);

    setCount((c) => c + 1);

    timerOn.current = setTimeout(() => {
      setIsAbled(false);
    }, 1000);
  };

  return (
    <>
      <p>좋아요 수 : {count}</p>
      <button onClick={handleClick} disabled={isAbled}>
        좋아요!
      </button>
    </>
  );
}
