/**
 * Header — קומפוננטת כותרת שמקבלת פרטים מהאב דרך props.
 *
 * @param {string} title    - כותרת ראשית
 * @param {string} name     - שם המשתמש
 * @param {string} role     - התפקיד של המשתמש
 * @param {React.ReactNode} children - תוכן אופציונלי שיוזרק בין התגים
 */
function Header({ title, name, role, children }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p className="app-header__user">
        {/* name ו-role מוצגים זה לצד זה */}
        <span>{name}</span>
        <span className="app-header__role">{role}</span>
      </p>
      {/* children מוצג רק אם האב העביר תוכן */}
      {children}
    </header>
  )
}

export default Header
