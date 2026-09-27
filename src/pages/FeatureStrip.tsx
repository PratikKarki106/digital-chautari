import styles from "@/pages/FeatureStrip.module.css"

export default function FeatureStrip() {
    return (
        <section className={styles.featureStrip}>
            <div className={styles.container}>
                <h2 className={styles.heading}>What makes us different</h2>
                <div className={styles.cardGrid}>
                    <div className={styles.card}>
                        <div className={`${styles.iconChip} ${styles.mint}`}>📈</div>
                        <h3 className={styles.cardTitle}>Growth-Driven</h3>
                        <p className={styles.cardText}>
                            We focus on measurable results that help your business scale and thrive in the digital landscape.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.iconChip} ${styles.teal}`}>🎨</div>
                        <h3 className={styles.cardTitle}>Creative-First</h3>
                        <p className={styles.cardText}>
                            We blend strategy with design to create memorable brand experiences that resonate with your audience.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.iconChip} ${styles.gold}`}>⚙️</div>
                        <h3 className={styles.cardTitle}>Tech-Powered</h3>
                        <p className={styles.cardText}>
                            We leverage modern technologies and frameworks to build scalable, performant solutions for your business.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <div className={`${styles.iconChip} ${styles.lilac}`}>🤝</div>
                        <h3 className={styles.cardTitle}>Client-Centric</h3>
                        <p className={styles.cardText}>Your success is our priority. We work closelt with you to understand your goals and deliver results.</p>                  
                    </div>                    
                </div>

            </div>
        </section>
    );
}