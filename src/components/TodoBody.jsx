function TodoBody({ todos }) {
  return (
    <>
      <div id="todo__title" className="d-flex gap-1">
        <div>완료여부</div>
        <div>할 일</div>
      </div>
      <div id="todo__body">
        {todos.map((todo) => {
          return (
            <div>
              <input type="checkbox" checked={todo.done} />
              <div>{todo.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default TodoBody;
