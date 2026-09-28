import styles from "./DarkStats.module.css";

export default function DarkStats() {
    return (
        <section className={styles.darkStats}>
            <div className={styles.container}>
                {/**Stats Grid */}
                <div className={styles.statsGrid}>

                    {/**Projects */}
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>250+</div>
                        <div className={styles.statLabel}>Projects</div>
                    </div>
                    {/**Cleints */}
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>40+</div>
                        <div className={styles.statLabel}>Clients</div>
                    </div>
                    {/**Retention */}
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>98%</div>
                        <div className={styles.statLabel}>Retention</div>
                    </div>
                    {/**Years */}
                    <div className={styles.stat}>
                        <div className={styles.statNumber}>5+</div>
                        <div className={styles.statLabel}>Years</div>
                    </div>
                </div>

            </div>
        </section>
    );
}