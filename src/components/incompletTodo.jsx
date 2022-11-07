import React from "react";

export const IncompleteTodo = (props) => {
  const { todos, clickComplete, clickDelete } = props;
  return (
    <>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => clickComplete(index)}>完了</button>
                <button onClick={() => clickDelete(index)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
