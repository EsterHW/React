import { useState } from 'react'

/**
 * AddTaskForm — טופס להוספת משימה חדשה.
 *
 * הקומפוננטה מחזיקה state מקומי לשדה הקלט בלבד, כי הטקסט
 * הזה לא מעניין אף אחד אחר עד שלוחצים "הוסף".
 * את המשימה עצמה היא לא יוצרת — היא רק מדווחת לאב,
 * ומי שמחליט איך להוסיף הוא App.
 *
 * @param {(title: string) => void} onAdd - נקראת עם שם המשימה החדשה
 */
function AddTaskForm({ onAdd }) {
  // הטקסט שהוקלד — מקומי, כי הוא זמני עד השליחה
  const [text, setText] = useState('')
// לגיט
  /**
   * שולח את המשימה החדשה החוצה ומנקה את השדה.
   * @param {React.FormEvent} event
   */
  const handleSubmit = (event) => {
    // בלי זה הדפדפן ירענן את הדף ויאבד את כל ה-state
    event.preventDefault()

    const title = text.trim()

    // מקרה קצה: לא מוסיפים משימה ריקה
    if (!title) return

    onAdd(title)
    setText('')
  }

  return (
    <form className="add-task" onSubmit={handleSubmit}>
      <input
        className="add-task__field"
        type="text"
        value={text}
        placeholder="משימה חדשה"
        // aria-label כי אין כאן תווית גלויה — יש placeholder בלבד
        aria-label="שם המשימה החדשה"
        onChange={(event) => setText(event.target.value)}
      />
      <button
        type="submit"
        className="add-task__submit"
        // כפתור מושבת כשהשדה ריק — מונע שליחה מיותרת
        disabled={!text.trim()}
      >
        הוסף
      </button>
    </form>
  )
}

export default AddTaskForm
