import { useState } from "react";

function TodoForm({ addTodo }) {
  const [inputValue, setInputValue] = useState("");
  const [errorValue, setErrorValue] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue === "") {
      setErrorValue(true);
    } else {
      addTodo(inputValue);
      setErrorValue(false);
    }

    setInputValue("");
  };

  return (
    <div className="form-wrapper">
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={inputValue}
          placeholder="What is the task today?"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn todo-btn">
          Create new task
        </button>
      </form>

      {errorValue && <p className="error-form">Please fill task text, you need to know what you want to do</p>}
    </div>
  );
}

export default TodoForm;