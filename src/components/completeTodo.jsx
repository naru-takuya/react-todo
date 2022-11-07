import React from "react";

export const CompleteTodo = (props) => {
  const { todos, clickBack } = props;
  return (
    <>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={todo} className="list-row">
                <p>{todo}</p>
                <button
                  onClick={() => {
                    clickBack(index);
                  }}
                >
                  戻す
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
