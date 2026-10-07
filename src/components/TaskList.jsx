import { STATUS } from '../data/tasks.js'

/**
 * TaskList — מציגה את רשימת המשימות (שם וסטטוס).
 *
 * @param {Array<{id: number, title: string, status: string}>} tasks - מערך המשימות
 */
function TaskList({ tasks }) {
  // מקרה קצה: אין משימות להצגה
  if (tasks.length === 0) {
    return <p className="task-list__empty">אין משימות להצגה</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        // מחלקה דינמית לצביעה לפי הסטטוס, למשל status--done
        const statusClass =
          task.status === STATUS.DONE ? 'status--done' : 'status--open'

        return (
          // ה-key חייב להיות יציב וייחודי — לכן id ולא האינדקס
          <li key={task.id} className="task-list__item">
            <span className="task-list__title">{task.title}</span>
            <span className={`task-list__status ${statusClass}`}>
              {task.status}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
