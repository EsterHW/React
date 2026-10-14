function TaskSummary({ tasks }) {
  const total = tasks.length
  const done = tasks.filter((task) => task.completed).length
  const allDone = total > 0 && done === total

  return (
    <section className="summary">
      <p>
        הושלמו {done} מתוך {total}
      </p>
      <p>{allDone ? 'כל המשימות הושלמו' : 'יש משימות שטרם הושלמו'}</p>
    </section>
  )
}

export default TaskSummary
