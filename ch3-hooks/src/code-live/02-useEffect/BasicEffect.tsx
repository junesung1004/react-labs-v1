import React, { useEffect } from "react";

export default function BasicEffect() {
  // 초기화(설정값), 최초의 데이터 api 호출
  useEffect(() => {
    alert("하하하");
  }, []);
  return <div>BasicEffect</div>;
}
