import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Plus } from "lucide-react"

export function TodoWidget({ onRemove }) {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo("")
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Todo List</CardTitle>
        <Button variant="ghost" size="icon" onClick={onRemove}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex mb-2">
          <Input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="mr-2"
          />
          <Button onClick={addTodo}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <ul className="space-y-1">
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center" onClick={() => toggleTodo(todo.id)}>
              <input type="checkbox" checked={todo.completed} onChange={() => {}} className="mr-2" />
              <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

