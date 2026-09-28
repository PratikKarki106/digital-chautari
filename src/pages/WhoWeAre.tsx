import styles from "@/pages/WhoWeAre.module.css";
import Link from "next/link";

export default function WhoWeAre() {
    return (
        <section className={styles.whoWeAre}>
            <div className={styles.container}>

                <div className={styles.twoColumn}>

                    <div >
                        <h2 className={styles.heading}> A Chautari where ideas meet execution</h2>
                        <p className={styles.storyText}>Digital Chautari began as a simple idea - to create a space where creativity, strategy, and technology come together. Like a traditional chautari where travelers rest and share stories, we built a digital hub where brands find clarity and direction</p>
                        <p className={styles.storyText}>Today, we are a team of designers, developers, and marketers helping business across Nepal and beyond grow through meaningful digital experiences.</p>
                        {/**CheckList */}
                        <div className={styles.checkList}>
                            <div className={styles.checkListItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Creative Strategy</span>
                            </div>
                            <div className={styles.checkListItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Brand Storytelling</span>
                            </div>
                            <div className={styles.checkListItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Full-Stack Engineering</span>
                            </div>
                            <div className={styles.checkListItem}>
                                <span className={styles.checkIcon}>✓</span>
                                <span>Health-Tech Expertise</span>
                            </div>
                        </div>
                        <Link href="/about" className={styles.meetTeamButton}> Meet the Team →</Link>
                    </div>

                    <div className={styles.serviceGrid}>
                        <div className={styles.serviceCard}>
                            <div className={`${styles.serviceIcon} ${styles.mint}`}>📊</div>
                            <h3 className={styles.serviceTitle}>Digital Marketing</h3>
                            <p className={styles.serviceText}>
                                Data-driven campaigns that grow your audience and boost conversions.
                            </p>
                            <Link href="/services" className={styles.serviceLink}>Learn more →</Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={`${styles.serviceIcon} ${styles.teal}`}>🎬</div>
                            <h3 className={styles.serviceTitle}>Content Creation</h3>
                            <p className={styles.serviceText}>Engaging videos, photos and copy that tell your brand story.</p>
                            <Link href="/services" className={styles.serviceLink}>Learn more →</Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={`${styles.serviceIcon} ${styles.gold}`}>💻</div>
                            <h3 className={styles.serviceTitle}>Software Development</h3>
                            <p className={styles.serviceText}>Custom web apps and health-tech solutions built with modern tech.</p>
                            <Link href="/services" className={styles.serviceLink}>Learn more →</Link>
                        </div>

                        <div className={styles.serviceCard}>
                            <div className={`${styles.serviceIcon} ${styles.lilac}`}>🎨</div>
                            <h3 className={styles.serviceTitle}>Branding & Design</h3>
                            <p className={styles.serviceText}>Memorable logos, identities, and visual systems that stand out.</p>
                            <Link href="/services" className={styles.serviceLink}>Learn more →</Link>
                        </div>

                    </div>
                </div>

            </div>

        </section>
    );
}