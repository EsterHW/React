import { STATUS } from '../data/tasks.js'

/**
 * TaskSummary — מציגה סיכום: "יש X משימות, מתוכן Y הושלמו."
 *
 * הקומפוננטה מקבלת את מערך המשימות ומחשבת בעצמה,
 * כדי שלא תהיה תלויה בכך שהאב יחשב עבורה.
 *
 * @param {Array<{id: number, title: string, status: string}>} tasks - מערך המשימות
 */
function TaskSummary({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.status === STATUS.DONE).length

  return (
    <p className="task-summary">
      יש {total} משימות, מתוכן {completed} הושלמו.
    </p>
  )
}

export default TaskSummary
