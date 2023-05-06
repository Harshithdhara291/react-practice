import { useState } from "react";

// crypto.randomUUID()

const Todo = () => {
  const [item,setItem] = useState('')
  const [todoList,setTodo] = useState([])

  const handleSubmit = (e) =>{
      e.preventDefault()
      const newTodo = {id:crypto.randomUUID(),text:item}
      setTodo(todoList => [...todoList,newTodo])
      setItem('')
  }

  const handleDelete = (index) =>{
    const newTodo = todoList.filter((each) => each.id !== index)
    setTodo(newTodo)
  }

  return (
    <div>
      <strong>todo list</strong>
      <form type="submit" onSubmit={handleSubmit}>
        <input type="text" value={item} onChange={(e)=>setItem(e.target.value)} required/>
        <button type="submit">add item</button>
      </form>
      <strong>Todos</strong>
      <ul>{todoList.map(eachTodo => 
        <li key={eachTodo.id} style={{'display':"flex"}}>
          <h1>{eachTodo.text}</h1>
          <button type="button" style={{"border":"none","background":"none","marginLeft":"20px"}} onClick={() => handleDelete(eachTodo.id)}>❌</button>
        </li>
        )}</ul>
    </div>
  );
}
export default Todo;
