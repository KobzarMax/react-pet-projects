import { useState } from "react"

function TodoForm({addTodo}) {

    const [inputValue, setInputValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(inputValue);

        setInputValue('');
    }

    return (
      <form className="todo-form" onSubmit={handleSubmit}>
          <input type="text" className="todo-input" value={inputValue} placeholder="What is the task today?" onChange={(e) => setInputValue(e.target.value)} />
          <button type="submit" className="todo-btn">
            Create new task
          </button>
      </form>
    )
}
  
export default TodoForm