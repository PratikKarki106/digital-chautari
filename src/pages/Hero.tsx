import styles from "@/pages/Hero.module.css";
import Link from "next/link";

export default function Hero () {
    return (
        <section className={styles.hero}>
            <div className={styles.glow}></div>
            <div className={styles.container}>
                <span className={styles.eyebrow}> Welcome to Digital Chautari</span>
                <h1 className={styles.headline}>We build <span className={styles.gradientText}>digital bridges</span> between ideas and impact</h1>
                <p className={styles.lede}>
                    Digital Chautari is a creative technology company in Kathmandu, Nepal. We specialize in digital marketing, content creation, and health-tech software — helping brands grow through strategy, design, and code.
                </p> 
                <div className={styles.buttonGroup}>
                    <Link href="/services" className={styles.primaryButton}>Explore Services →</Link>
                    <Link href="/products" className={styles.ghostButton}>View Products</Link>
                </div>
                <div className={styles.statBar}>
                    {/**Stat 1: Products */}
                    <div className={styles.stat}>
                        <div className={`${styles.statIcon} ${styles.mint}`}>📦</div>
                        <div className={styles.statNumber}>3</div>
                        <div className={styles.statLabel}>Products</div>
                    </div>
                    {/**Stat 2: Team members */}
                    <div className={styles.stat}>
                        <div className={`${styles.statIcon} ${styles.teal}`}>👥</div>
                        <div className={styles.statNumber}>6+</div>
                        <div className={styles.statLabel}>Team Members</div>
                    </div>
                    {/**Stat 3: Commitment */}
                    <div className={styles.stat}>
                        <div className={`${styles.statIcon} ${styles.gold}`}>💯</div>
                        <div className={styles.statNumber}>100%</div>
                        <div className={styles.statLabel}>Commitment</div>
                    </div>
                </div>
            </div>
        </section>
    )
}