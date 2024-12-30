import TodoHeader from "./components/TodoHeader";
import TodoBody from "./components/TodoBody";
import TodoFooter from "./components/TodoFooter";

function App() {
  const todos = [
    {id: 1, text: "asd", done: false},
    {id: 2, text: "qwe", done: false},
    {id: 3, text: "zxc", done: false}
  ]
  return (
    <>
      <TodoHeader />
      <TodoBody todos={todos} />
      <TodoFooter />
    </>
  );
}

export default App;
