//Navigation 
import styles from "./Nav.module.css"

const Nav = () => {
    
    const options = [
        {
            id: 0,
            text: "Option 1"
        },
        {
            id: 1,
            text: "Option 2"
        },
        {
            id: 2,
            text: "Option 3"
        }
    ]

    const listOptions = options.map((option) => {
        return <li key={option.id}> <a href="#" className={styles.option}>{option.text}</a> </li>
    })

  return (
    <nav className={styles.nav}>
        <ul className={styles.list}>
            {listOptions}
        </ul>
        <button className={styles.view_plans_btn_bar}>Try Now</button>
    </nav>
  )
}

export default Nav