function TaskItem({ task, onToggle }) {
  const { id, text, completed } = task

  return (
    <li className={completed ? 'task task--completed' : 'task'}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <span>{text}</span>
      </label>
    </li>
  )
}

export default TaskItem
