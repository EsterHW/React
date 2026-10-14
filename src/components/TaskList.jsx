/**
 * TaskList — מציגה את רשימת המשימות (שם וסטטוס).
 * לחיצה על משימה מסמנת אותה כהושלמה, ולחיצה חוזרת מחזירה לפתוחה.
 *
 * @param {Array<{id: number, title: string, status: string}>} tasks - מערך המשימות
 * @param {(id: number) => void} onToggle - נקראת עם ה-id של המשימה שנלחצה
 * @param {string} doneStatus - הערך שמייצג "הושלמה", לזיהוי המשימות המסומנות
 */
function TaskList({ tasks, onToggle, doneStatus }) {
  // מקרה קצה: אין משימות להצגה
  if (tasks.length === 0) {
    return <p className="task-list__empty">אין משימות להצגה</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => {
        // האם המשימה הזאת הושלמה
        const isDone = task.status === doneStatus

        // מחלקה דינמית לצביעה לפי הסטטוס, למשל status--done
        const statusClass = isDone ? 'status--done' : 'status--open'

        return (
          // ה-key חייב להיות יציב וייחודי — לכן id ולא האינדקס
          <li key={task.id} className="task-list__item">
            {/*
              הכפתור הוא מה שהופך את השורה ללחיצה.
              aria-pressed מסמן לקורא מסך אם המשימה מסומנת כרגע.
            */}
            <button
              type="button"
              className="task-list__toggle"
              aria-pressed={isDone}
              onClick={() => onToggle(task.id)}
            >
              <span className="task-list__title">{task.title}</span>
              <span className={`task-list__status ${statusClass}`}>
                {task.status}
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
