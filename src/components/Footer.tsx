import styles from "@/components/Footer.module.css";
import Link from "next/link";

export default function Footer (){
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.grid}> 

                    <div className={styles.brandColumn}>
                        <div className={styles.brandLogo}>
                            <div className={styles.brandIcon}>DC</div>
                            <span className={styles.brandName}>Digital Chautari</span>
                        </div>
                        <p className={styles.brandText}>A creative technology company in Kathmandu,
                        building digital bridges between ideas and impact</p>
                    </div>

                    <div className={styles.column}>
                        <h4>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/about">Our Team</Link></li>
                            <li><Link href="#">Careers</Link></li>
                            <li><Link href="/Contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>Services</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/services">Digital Marketing</Link></li>
                            <li><Link href="/services">Content Creation</Link></li>
                            <li><Link href="/services">Software Development</Link></li>
                            <li><Link href="/services">Branding</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h4>Legal</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms of Service</Link></li>
                            <li><Link href="#">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.divider}>
                    <p>&copy; {new Date().getFullYear()} Digital Chautari. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}