import styles from "./Intro.module.css";

const Intro = () => {
    return (
        <div className={styles.intro}>
            <picture className={styles.intro_img}>
            <source 
                srcSet="images/image-intro-desktop.jpg"
                media="(min-width: 1024px)"/>
            <img 
                src="images/image-intro-mobile.jpg"
                alt=""
                aria-hidden="true" />
            </picture>
            <div className={styles.intro_content}>
            <h1 className={styles.title}>**TEXT**</h1>
            <p className={styles.description}>
                **TEXT** (description etc..)
            </p>
            <button className={styles.view_plans_btn}>try now</button>
            </div>
        </div>
    )
}

export default Intro