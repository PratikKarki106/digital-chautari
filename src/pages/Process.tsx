import styles from "@/pages/Process.module.css"

export default function Process() {
    return (
        <section className={styles.process}>
            <div className={styles.container}>

                <h2 className={styles.heading}>Our Process</h2>

                <p className={styles.subheading}>A proven 4-step methodology that transforms your idead into successful digital products.</p>

                <div className={styles.stepsGrid}>

                    {/**Discover */}
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}> 01 </div>
                        <h3 className={styles.stepTitle}> Discover</h3>
                        <p className={styles.stepText}>We dive into your business, audience and goals to uncover insights and opportunities.</p>
                    </div>

                    {/* STEP 2: Design */}
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>02</div>
                        <h3 className={styles.stepTitle}>Design</h3>
                        <p className={styles.stepText}>
                            We craft intuitive user experiences and stunning visuals that align with your brand identity.
                        </p>
                    </div>

                    {/* STEP 3: Develop */}
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>03</div>
                        <h3 className={styles.stepTitle}>Develop</h3>
                        <p className={styles.stepText}>
                            We build scalable, performant solutions using modern technologies and best practices.
                        </p>
                    </div>

                    {/* STEP 4: Deliver */}
                    <div className={styles.stepCard}>
                        <div className={styles.stepNumber}>04</div>
                        <h3 className={styles.stepTitle}>Deliver</h3>
                        <p className={styles.stepText}>
                            We launch your product and provide ongoing support to ensure long-term success.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}