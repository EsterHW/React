/**
 * נתוני המשימות — סטטיים לחלוטין.
 * כל משימה היא אובייקט עם מזהה, שם וסטטוס.
 *
 * STATUS — ערכי הסטטוס האפשריים. משתמשים בקבועים ולא במחרוזות
 * "קשות" כדי למנוע שגיאות כתיב ולהקל על השלמה אוטומטית.
 */
export const STATUS = {
  OPEN: 'פתוחה',
  DONE: 'הושלמה',
}

/** רשימת המשימות. */
export const tasks = [
  { id: 1, title: 'משימה 1', status: STATUS.OPEN },
  { id: 2, title: 'משימה 2', status: STATUS.DONE },
  { id: 3, title: 'משימה 3', status: STATUS.OPEN },
  { id: 4, title: 'משימה 4', status: STATUS.DONE },
  { id: 5, title: 'משימה 5', status: STATUS.OPEN },
]

/** פרטי הכותרת — מוצגים בקומפוננטת ה-Header. */
export const user = {
  name: 'שם מלא 1',
  role: 'תפקיד 1',
}
