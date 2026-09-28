import styles from "@/pages/ProductsTeaser.module.css";
import Link from "next/link";

export default function ProductsTeaser() {
    return (
        <section className={styles.productsTeaser}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Our Products</h2>
                <p className={styles.subheading}>We build digital products that solve real problems - from sustainable design to health-tech innovation.</p>

                <div className={styles.productGrid}>
                    <div className={styles.productCard}>
                        <div className={`${styles.productVisual} ${styles.eco}`}>🌱</div>
                        <div className={styles.productContent}>
                            <h3 className={styles.productTitle}>Eco Creative</h3>
                            <p className={styles.productText}>A sustainable design platform that helps brands create eco-friendly marketing materials and track their environmental impact.</p>
                            <Link href="/products" className={styles.productLink}>Learn more →</Link>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={`${styles.productVisual} ${styles.content}`}>📝</div>
                        <div className={styles.productContent}>
                            <h3 className={styles.productTitle}>One Content</h3>
                            <p className={styles.productText}>An all-in-one content management system that streamlines your workflow from ideation to publication across all channels.</p>
                            <Link href="/products" className={styles.productLink}>Learn more →</Link>
                        </div>
                    </div>
                    <div className={styles.productCard}>
                        <div className={`${styles.productVisual} ${styles.physio}`}>🏥</div>
                        <div className={styles.productContent}>
                            <h3 className={styles.productTitle}>Physio@Home</h3>
                            <p className={styles.productText}>A health-tech telehealt platform connecting patients with physiotherapists for virtual consultations and personalized exercise plans.</p>
                            <Link href="/products" className={styles.productLink}>Learn more →</Link>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
    );
}