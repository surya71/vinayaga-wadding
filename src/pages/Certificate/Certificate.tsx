import styles from "./Certificate.module.css";

export default function Certificate() {
    const certifications = [
        {
            name: "Global Organic Textile Standard (GOTS)",
            description:
                "GOTS is the leading textile processing standard for organic fibers, ensuring environmentally and socially responsible manufacturing.",
            imageUrl: "/assets/certificates/gots-logo.png",
        },
        {
            name: "OEKO-TEX Standard 100",
            description:
                "OEKO-TEX Standard 100 certifies that textiles are free from harmful substances, ensuring safety for consumers and the environment.",
            imageUrl: "/assets/certificates/gots-logo.png",
        },
        {
            name: "Fair Trade Certified",
            description:
                "Fair Trade certification ensures that products are made with respect for people and the planet, promoting fair wages and sustainable practices.",
            imageUrl: "/assets/certificates/gots-logo.png",
        },
        {
            name: "Cradle to Cradle Certified",
            description:
                "Cradle to Cradle certification assesses products for their environmental and social performance across multiple categories, promoting circular economy principles.",
            imageUrl: "/assets/certificates/gots-logo.png",
        },
    ];
    return (
        <main className={styles.page}>
            <div className={styles.header}>
                <h1 className={styles.title}>Certifications</h1>
                <p className={styles.intro}>
                    Sri Vinayaga — weaving sustainability into tomorrow.
                    Certificates are the seal of our excellence.
                </p>
            </div>
            <div className={styles.certGrid}>
                {certifications.map((cert) => (
                    <div key={cert.name} className={styles.certCard}>
                        <img
                            src={cert.imageUrl}
                            alt={`${cert.name} logo`}
                            className={styles.certImage}
                        />
                        <div className={styles.divider} />
                        <div className={styles.certInfo}>
                            <h2 className={styles.certName}>{cert.name}</h2>
                            <p className={styles.certDescription}>
                                {cert.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
