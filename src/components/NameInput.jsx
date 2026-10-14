/**
 * NameInput — שדה קלט לשם.
 *
 * הקומפוננטה לא מחזיקה את השם בעצמה — היא רק "בקרה" (controlled component):
 * הערך מגיע מהאב ב-value, וכל הקלדה מדווחת החוצה ב-onChange.
 * כך השם האמיתי חי במקום אחד (ב-App), ומי שצריך אותו קורא משם.
 *
 * @param {string} value - הערך הנוכחי, נשלט על ידי האב
 * @param {(value: string) => void} onChange - נקראת עם הטקסט המעודכן בכל הקלדה
 * @param {string} label - התווית שמוצגת מעל השדה
 * @param {string} placeholder - טקסט עזר כשריק
 */
function NameInput({ value, onChange, label, placeholder }) {
  // מזהה ייחודי שמקשר בין התווית לשדה — לקוראי מסך ובעת לחיצה על התווית
  const inputId = 'name-input'

  return (
    <div className="name-input">
      <label className="name-input__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        id={inputId}
        className="name-input__field"
        type="text"
        value={value}
        placeholder={placeholder}
        // שולפים את הטקסט מתוך האירוע ומעבירים הלאה רק את המחרוזת,
        // כדי שהאב לא יצטרך להכיר את צורת האירוע של הדפדפן.
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  )
}

export default NameInput
