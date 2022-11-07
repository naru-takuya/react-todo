import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  borderRadius: "8px",
  width: "400px",
  height: "30px",
  margin: "8px",
  padding: "8px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <>
      <div style={style}>
        <input
          type="text"
          value={todoText}
          onChange={onChange}
          placeholder="TODOを入力"
          disabled={disabled}
        />
        <button onClick={onClick} disabled={disabled}>
          追加
        </button>
      </div>
    </>
  );
};
