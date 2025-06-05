import { useToggle } from "./useToggle";

export default function ToggleSwitch() {
  const [on, toggle] = useToggle();

  // 자리만 같으면 이름이 달라도 사용할 수 있다.
  // 독립적으로 사용 가능
  const [on2, toggle2] = useToggle();

  return (
    <>
      <button onClick={toggle}>{on ? "켜짐" : "꺼짐"}</button>
      <button onClick={toggle2}>{on2 ? "켜짐" : "꺼짐"}</button>
    </>
  );
}
