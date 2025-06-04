import React, { useEffect, useState } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostLoader() {
  const [data, setData] = useState<Post | null>(null);
  const getData = async (): Promise<void> => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

      if (!res) return;

      const data = await res.json();
      setData(data);
      return data;
    } catch (e) {
      console.error((e as Error).message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return <p>로딩중.....</p>;
  }

  return <div>{data?.title}</div>;
}
