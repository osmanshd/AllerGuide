// Bar
import { useState } from "react"
import Nav from "./Nav";
import styles from "./Bar.module.css"

const Bar = () => {
    const [icon, setIcon] = useState("images/menu-icon.svg");

    function handleClick(e) {
        e.target.getAttribute("src").includes("menu") ? 
        setIcon("images/close-icon.svg") : 
        setIcon("images/menu-icon.svg");
        document.querySelector("nav").classList.toggle(styles.open);
        document.body.classList.toggle("lockScroll");
    }

    return (
        <div className={styles.top_bar}>
            <img 
            src="images/logo.svg" 
            alt="logo"
            />
            <button className={styles.menu_btn} onClick={(e) => {handleClick(e)}}>
            <img 
                src={icon}
                alt="menu icon"
            />
            </button>
            <Nav />
        </div>
    )
}

export default Bar