import React, { useEffect, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function FetchData() {
  // https://jsonplaceholder.typicode.com/posts/1
  const [todo, setTodo] = useState<Todo | null>(null);
  console.log(todo);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);

  //데이터를 불러올 때 "로딩중..."  표시

  return (
    <>
      {todo ? (
        <ul>
          <li> todo id : {todo?.id}</li>
          <li>todo title : {todo?.title}</li>
        </ul>
      ) : (
        <p>로딩중...</p>
      )}
    </>
  );
}
