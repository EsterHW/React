import { useState } from 'react'
import TaskList from './components/TaskList.jsx'
import TaskSummary from './components/TaskSummary.jsx'

const INITIAL_TASKS = [
  { id: 1, text: 'פריט 1', completed: false },
  { id: 2, text: 'פריט 2', completed: true },
  { id: 3, text: 'פריט 3', completed: false },
]

function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)

  // מחזיר מערך חדש ומעדכן רק את המשימה המתאימה.
  // לא משנים את האובייקט המקורי, אחרת React לא יזהה שהמצב השתנה.
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <main className="app">
      <h1>רשימת משימות</h1>
      <TaskSummary tasks={tasks} />
      <TaskList tasks={tasks} onToggle={toggleTask} />
    </main>
  )
}

export default App
