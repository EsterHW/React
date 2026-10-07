import { tasks, user } from './data/tasks.js'
import Header from './components/Header.jsx'
import TaskSummary from './components/TaskSummary.jsx'
import TaskList from './components/TaskList.jsx'

/**
 * App — קומפוננטת האב.
 *
 * היא מחזיקה את הנתונים (tasks, user) ומעבירה אותם הלאה
 * לקומפוננטות הבנים דרך props. הנתונים סטטיים — אין כאן state
 * ואין מנגנון עדכון.
 */
function App() {
  return (
    <div className="app">
      {/* props: title, name, role. הילדים מועברים כ-children */}
      <Header title="מערכת ניהול משימות" name={user.name} role={user.role}>
        <p className="app-header__subtitle">טקסט לדוגמה</p>
      </Header>

      <main className="app__main">
        {/* אותו מערך משימות מועבר לשתי קומפוננטות שונות */}
        <TaskSummary tasks={tasks} />
        <TaskList tasks={tasks} />
      </main>
    </div>
  )
}

export default App
