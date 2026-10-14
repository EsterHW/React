/**
 * TaskSummary — מציגה סיכום: "יש X משימות, מתוכן Y הושלמו."
 *
 * הקומפוננטה מקבלת את מערך המשימות ומחשבת בעצמה,
 * כדי שלא תהיה תלויה בכך שהאב יחשב עבורה.
 * כיוון שהיא מקבלת את אותו מערך ש-TaskList מקבל,
 * כל שינוי סטטוס מתבטא כאן מיד.
 *
 * @param {Array<{id: number, title: string, status: string}>} tasks - מערך המשימות
 * @param {string} doneStatus - הערך שמייצג "הושלמה", לספירת המשימות המסומנות
 */
function TaskSummary({ tasks, doneStatus }) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.status === doneStatus).length

  return (
    <p className="task-summary">
      יש {total} משימות, מתוכן {completed} הושלמו.
    </p>
  )
}

export default TaskSummary
