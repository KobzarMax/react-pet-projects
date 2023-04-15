import { useState } from "react"

function EditTodoForm({editTodo, task}) {

    const [inputValue, setInputValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(inputValue, task.id);

        setInputValue('');
    }

    return (
      <form className="todo-form" onSubmit={handleSubmit}>
          <input type="text" className="todo-input" value={inputValue} placeholder="Update task" onChange={(e) => setInputValue(e.target.value)} />
          <button type="submit" className="todo-btn">
            Edit task
          </button>
      </form>
    )
}
  
export default EditTodoForm