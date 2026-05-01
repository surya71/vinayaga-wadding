import styles from "./Sustainability.module.css";

export default function Sustainability() {
    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>SUSTAINABILITY</h1>
                <p className={styles.intro}>
                    Sri Vinayaga — weaving sustainability into tomorrow.
                </p>
            </div>
            <div className={styles.content}>
                <img
                    src="/assets/sustainability/sustainability-1.jpg"
                    alt="Sustainability image 1"
                    className={styles.contentImage}
                />
                <div className={styles.textContent}>
                    <p>
                        At Sri Vinayaga, sustainability is not just a practice;
                        it's a commitment woven into the very fabric of our
                        operations. We believe in creating a better future for
                        our planet and its inhabitants. Our sustainable
                        practices encompass every aspect of our business, from
                        sourcing eco-friendly materials to implementing
                        energy-efficient manufacturing processes. We prioritize
                        reducing our carbon footprint, minimizing waste, and
                        promoting ethical labor practices. By choosing Sri
                        Vinayaga, you're not just investing in high-quality
                        products; you're supporting a company that's committed
                        to making a positive impact on the world.
                    </p>
                    <p>
                        At Sri Vinayaga, sustainability is not just a practice;
                        it's a commitment woven into the very fabric of our
                        operations. We believe in creating a better future for
                        our planet and its inhabitants. Our sustainable
                        practices encompass every aspect of our business, from
                        sourcing eco-friendly materials to implementing
                        energy-efficient manufacturing processes. We prioritize
                        reducing our carbon footprint, minimizing waste, and
                        promoting ethical labor practices. By choosing Sri
                        Vinayaga, you're not just investing in high-quality
                        products; you're supporting a company that's committed
                        to making a positive impact on the world.
                    </p>
                </div>
            </div>
        </main>
    );
}
