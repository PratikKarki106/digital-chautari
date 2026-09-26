import styles from "@/pages/Hero.module.css";

export default function Hero () {
    return (
        <section className="">
            <div></div>
            <div>
                <span className={styles.eyebrow}> Welcome to Digital Chautari</span>
                <h1 className={styles.headline}>We build <span className={styles.gradientText}>digital bridges</span> between ideas and impact</h1>
            </div>
        </section>
    )
}