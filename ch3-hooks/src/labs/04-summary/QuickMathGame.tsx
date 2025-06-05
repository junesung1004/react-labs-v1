import React, { useRef, useState } from "react";

export default function QuickMathGame() {
  const [randomNumber1, setRandomNumber1] = useState(0);
  const [randomNumber2, setRandomNumber2] = useState(0);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [count, setCount] = useState<number>(25);
  const [inputCorrect, setInputCorrect] = useState<string>("");
  const [correct, setIsCorrect] = useState<string | number>("????");
  const intervalRef = useRef<number>(undefined);

  const stopGame = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsStart(false);
    setCount(25);
    setInputCorrect("");
  };

  const handleClickRandomQuizStart = () => {
    setRandomNumber1(Math.floor(Math.random() * 100) + 1);
    setRandomNumber2(Math.floor(Math.random() * 100) + 1);
    setIsStart(true);
    setCount(25);
    setInputCorrect("");

    intervalRef.current = setInterval(() => {
      setCount((c) => {
        if (c === 1) {
          alert("ㅋㅋㅋㅋㅋㅋㅋㅋ ^^");
          stopGame();
        }
        return c - 1;
      });
    }, 1000);
  };

  const handleChangeInputTextCorrect = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputCorrect(e.target.value);
  };

  const handleClickCorrectSubmit = () => {
    const answer = randomNumber1 * randomNumber2;

    if (Number(inputCorrect) === answer) {
      alert("올..........ㅋ 축축!!");
      stopGame();
      return;
    }

    alert("틀렸습니다! 다시 시도하세요.");
    setInputCorrect("");
  };

  return (
    <>
      <button onClick={handleClickRandomQuizStart}>시작</button>

      {isStart && (
        <>
          <p>남은시간 : {count}초</p>
          <p>
            {randomNumber1} x {randomNumber2} = {correct}
          </p>
          <input
            onChange={handleChangeInputTextCorrect}
            type="text"
            placeholder="정답을 입력해주세요"
            value={inputCorrect}
          />
          <button onClick={handleClickCorrectSubmit}>정답 제출</button>
        </>
      )}
    </>
  );
}
