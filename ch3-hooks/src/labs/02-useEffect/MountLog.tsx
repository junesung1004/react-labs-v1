import React, { useEffect } from "react";

export default function () {
  useEffect(() => {
    console.log("Mount!");
  }, []);
  return <div></div>;
}
