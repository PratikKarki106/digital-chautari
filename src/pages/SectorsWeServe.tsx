import styles from "@/pages/SectorsWeServe.module.css";

export default function SectorsWeServe() {
    return (
        <section className={styles.sectorsWeServe}>
            <div className={styles.container}>
                <h2 className={styles.heading}> Sectors We Serve</h2>
                <p className={styles.subheading}> We partner with busineses across diverse industries, bringing specialized expertise to every sector.</p>

                {/**Sectors Card */}
                <div className={styles.sectorGrid}>

                    {/**Card 1: Healthcare */}
                    <div className={styles.sectorCard}>
                        <div className={`${styles.sectorIcon} ${styles.healthcare}`}>🏥</div>
                        <h3 className={styles.sectorTitle}>Healthcare</h3>
                        <p className={styles.sectorText}>Digital solutions for clinics, hospitals and healt-tech start-ups focused on patient core.</p>
                    </div>

                     {/**Card 2: Education */}
                    <div className={styles.sectorCard}>
                        <div className={`${styles.sectorIcon} ${styles.education}`}>🏥</div>
                        <h3 className={styles.sectorTitle}>Education</h3>
                        <p className={styles.sectorText}>E-learning platforms and educational tools that make learning accessible and engaging.</p>
                    </div>

                    {/* CARD 3: E-Commerce */}
                    <div className={styles.sectorCard}>
                        <div className={`${styles.sectorIcon} ${styles.ecommerce}`}>🛒</div>
                        <h3 className={styles.sectorTitle}>E-Commerce</h3>
                        <p className={styles.sectorText}>
                            Online stores and marketplaces that drive sales and deliver seamless shopping experiences.
                        </p>
                    </div>

                    {/* CARD 4: Finance */}
                    <div className={styles.sectorCard}>
                        <div className={`${styles.sectorIcon} ${styles.finance}`}>💰</div>
                        <h3 className={styles.sectorTitle}>Finance</h3>
                        <p className={styles.sectorText}>
                            Fintech applications and financial services that simplify money management and transactions.
                        </p>
                    </div>

                    {/* CARD 5: Real Estate */}
                    <div className={styles.sectorCard}>
                        <div className={`${styles.sectorIcon} ${styles.realestate}`}>🏠</div>
                        <h3 className={styles.sectorTitle}>Real Estate</h3>
                        <p className={styles.sectorText}>
                            Property listing platforms and real estate tools that connect buyers, sellers, and agents.
                        </p>
                    </div>

                    {/* CARD 6: Technology */}
                    <div className={styles.sectorCard}>
                        <div className={`${styles.sectorIcon} ${styles.technology}`}>💻</div>
                        <h3 className={styles.sectorTitle}>Technology</h3>
                        <p className={styles.sectorText}>
                            SaaS products and tech startups building the next generation of digital innovation.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}