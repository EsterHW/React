/**
 * TaskList — מציגה את רשימת המשימות (שם וסטטוס).
 * לחיצה על שם המשימה מסמנת אותה כהושלמה, ולחיצה חוזרת מחזירה לפתוחה.
 * לחיצה על "מחק" מסירה אותה מהרשימה.
 *
 * @param {Array<{id: number, title: string, status: string}>} tasks - מערך המשימות
 * @param {(id: number) => void} onToggle - נקראת עם ה-id של המשימה שנלחצה
 * @param {(id: number) => void} onDelete - נקראת עם ה-id של המשימה למחיקה
 * @param {string} doneStatus - הערך שמייצג "הושלמה", לזיהוי המשימות המסומנות
 */
function TaskList({ tasks, onToggle, onDelete, doneStatus }) {
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
              שימו לב: שני כפתורים אחים, לא כפתור בתוך כפתור.
              קינון כפתור בתוך כפתור הוא HTML לא תקין — הדפדפן מפצל
              אותם, והמחיקה הייתה מסומנת כמשימה בטעות.
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

            <button
              type="button"
              className="task-list__delete"
              // aria-label ולא טקסט גלוי, כי זה סמל ✕ —
              // קורא מסך יקריא "מחק משימה" במקום סתם "איקס"
              aria-label={`מחק את ${task.title}`}
              onClick={() => onDelete(task.id)}
            >
              ✕
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
