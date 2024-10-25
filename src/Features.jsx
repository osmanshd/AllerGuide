import styles from "./Features.module.css"

const Features = () => {

    function IconTitleText({ icon, title, text }) {
        return (
            <div className={styles.feature}>
                <img 
                    src={icon} 
                    alt=""
                    aria-hidden="true" 
                    className={styles.icon}
                />
                <p className={styles.subtitle}>{title}</p>
                <p className={styles.description}>{text}</p>
            </div>
        );
    }

    return (
        <section className={styles.features}>
            <h2 className={styles.title}>**Title**</h2>
            <div className={styles.wrapper}>
                <IconTitleText 
                    icon={"images/icon-feat3.svg"}
                    title={"Feature 1"}
                    text={
                        "description"
                    }
                />
                <IconTitleText 
                    icon={"images/icon-feat2.svg"}
                    title={"Feature 2"}
                    text={
                        "description"
                    }
                />
                <IconTitleText 
                    icon={"images/icon-feat3.svg"}
                    title={"Feature 3"}
                    text={
                        "description"
                    }
                />
            </div>
        </section>
    )
}

export default Features