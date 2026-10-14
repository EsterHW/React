import { useState } from 'react'
import Header from './components/Header.jsx'
import NameInput from './components/NameInput.jsx'
import AddTaskForm from './components/AddTaskForm.jsx'
import TaskSummary from './components/TaskSummary.jsx'
import TaskList from './components/TaskList.jsx'

/**
 * STATUS — ערכי הסטטוס האפשריים. משתמשים בקבועים ולא במחרוזות
 * "קשות" כדי למנוע שגיאות כתיב ולהקל על השלמה אוטומטית.
 */
export const STATUS = {
  OPEN: 'פתוחה',
  DONE: 'הושלמה',
}

/**
 * מחזיר את הסטטוס הנגדי לזה שהתקבל.
 * זו הלוגיקה של מעבר הלוך ושוב בין "פתוחה" ל"הושלמה".
 *
 * @param {string} status - הסטטוס הנוכחי
 * @returns {string} הסטטוס ההפוך
 */
function nextStatus(status) {
  return status === STATUS.DONE ? STATUS.OPEN : STATUS.DONE
}

/**
 * רשימת המשימות ההתחלתית.
 * כל משימה היא אובייקט עם מזהה, שם וסטטוס.
 */
const INITIAL_TASKS = [
  { id: 1, title: 'משימה 1', status: STATUS.OPEN },
  { id: 2, title: 'משימה 2', status: STATUS.DONE },
  { id: 3, title: 'משימה 3', status: STATUS.OPEN },
  { id: 4, title: 'משימה 4', status: STATUS.DONE },
  { id: 5, title: 'משימה 5', status: STATUS.OPEN },
]

/** פרטי המשתמש — מוצגים בקומפוננטת ה-Header. */
const USER = {
  name: 'שם מלא 1',
  role: 'תפקיד 1',
}

/** שם ברירת המחדל שמופיע בשדה ובכותרת לפני שהמשתמש מקליד. */
const DEFAULT_NAME = USER.name

/**
 * App — קומפוננטת האב.
 *
 * היא מחזיקה את מערך המשימות ב-state, כדי שאפשר יהיה לעדכן סטטוס.
 * אותו מערך בדיוק מועבר לשתי קומפוננטות בנים: TaskSummary ו-TaskList.
 * כיוון ששתיהן קוראות מאותו מקור, כל שינוי סטטוס מתעדכן בשתיהן יחד.
 */
function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [name, setName] = useState(DEFAULT_NAME)

  // הכותרת נגזרת מהשם בכל רינדור — לא נשמרת ב-state נפרד.
  // אילו שמרנו גם את הכותרת ב-state, שני הערכים היו עלולים להתפצל.
  const title = name.trim() ? `המשימות של ${name.trim()}` : 'מערכת ניהול משימות'

  /**
   * הופך את הסטטוס של משימה בודדת לפי id.
   *
   * @param {number} id - המזהה של המשימה לסימון
   */
  const toggleTask = (id) => {
    // מחזירים מערך חדש ומחליפים רק את המשימה המתאימה.
    // לא משנים את האובייקט המקורי, אחרת React לא יזהה שהמצב השתנה.
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: nextStatus(task.status) } : task
      )
    )
  }

  /**
   * מוחק משימה לפי id.
   *
   * @param {number} id - המזהה של המשימה למחיקה
   */
  const deleteTask = (id) => {
    // filter מחזיר מערך חדש בלי המשימה — לא מוחקים מהמערך המקורי
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  /**
   * מוסיף משימה חדשה בסוף הרשימה, בסטטוס "פתוחה".
   *
   * @param {string} title - שם המשימה החדשה
   */
  const addTask = (title) => {
    setTasks((prev) => {
      // המזהה חייב להיות ייחודי. לקיחת האורך (prev.length + 1) נראית
      // פשוטה אבל שוברת את ה-key: אחרי מחיקה, אורך קטן ואפשר לקבל id כפול.
      // לכן מחשבים את המקסימום הקיים ומוסיפים אחד.
      const nextId = prev.length === 0 ? 1 : Math.max(...prev.map((t) => t.id)) + 1

      return [...prev, { id: nextId, title, status: STATUS.OPEN }]
    })
  }

  return (
    <div className="app">
      {/*
        השדה הוא controlled component: value מגיע מה-state שלנו,
        ו-onChange מחזיר את הטקסט שהוקלד. כך ה-title שלמעלה מתעדכן מיד.
      */}
      <NameInput
        value={name}
        onChange={setName}
        label="שם המשתמש"
        placeholder="הקלידו שם"
      />

      {/* props: title, name, role. הילדים מועברים כ-children */}
      <Header title={title} name={name} role={USER.role}>
        <p className="app-header__subtitle">טקסט לדוגמה</p>
      </Header>

      <main className="app__main">
        {/*
          אותו מערך משימות מועבר לשתי קומפוננטות שונות.
          doneStatus מועבר לילדים כדי שידעו לזהות משימה שהושלמה,
          בלי לייבא את STATUS מהאב (מה שיצור ייבוא מעגלי).
        */}
        <TaskSummary tasks={tasks} doneStatus={STATUS.DONE} />
        <AddTaskForm onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
          doneStatus={STATUS.DONE}
        />
      </main>
    </div>
  )
}

export default App
