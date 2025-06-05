import { useState } from "react";

type ToggleReturn = [boolean, () => void];

export function useToggle(initial = false): ToggleReturn {
  const [on, setOn] = useState<boolean>(initial);

  const toggle = () => {
    setOn((prev) => !prev);
  };

  return [on, toggle];
}
