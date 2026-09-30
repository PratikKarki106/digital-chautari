import styles from "@/pages/Testimonials.module.css"

export default function Testimonials () {
  return (
    <section className={styles.testimonials}>
        <div className={styles.container}>

            <h2 className={styles.heading}>What our clients say</h2>

            <div className={styles.testimonialGrid}>

                <div className={styles.testimonialCard}>
                    <div className={styles.stars}>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>

                    <p className={styles.quoteText}>"Digital Chautari transformed our online presence completely. Their strategy approach to digital marketing helped us increase our customer base by 300% in just 6 months."</p>

                    <div className={styles.clientInfo}>
                        <div className={styles.clientAvatar}>RS</div>
                        <div className={styles.clientDetails}>
                            <div className={styles.clientName}> Rajesh Shrestha</div>
                            <div className={styles.clientRole}>CEO, Himalayan Traders</div>
                        </div>
                    </div>
                </div>

                <div className={styles.testimonialCard}>
                    <div className={styles.stars}>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p className={styles.quoteText}>
                        "The team at Digital Chautari delivered our health-tech platform on time and exceeded all expectations. Their technical expertise and attention to detail is unmatched."
                    </p>
                    <div className={styles.clientInfo}>
                        <div className={styles.clientAvatar}>AP</div>
                        <div className={styles.clientDetails}>
                            <div className={styles.clientName}>Dr. Anisha Poudel</div>
                            <div className={styles.clientRole}>Founder, Physio@Home</div>
                        </div>
                    </div>
                </div>

                <div className={styles.testimonialCard}>
                    <div className={styles.stars}>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                    <p className={styles.quoteText}>
                        "Working with Digital Chautari was a game-changer for our brand. Their creative team understood our vision perfectly and delivered a brand identity that truly represents who we are."
                    </p>
                    <div className={styles.clientInfo}>
                        <div className={styles.clientAvatar}>SK</div>
                        <div className={styles.clientDetails}>
                            <div className={styles.clientName}>Sita Karki</div>
                            <div className={styles.clientRole}>Marketing Director, GreenNepal</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}


