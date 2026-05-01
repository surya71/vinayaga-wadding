import { Link } from "react-router-dom";
import styles from "./ProductsApplications.module.css";
import { productCategories } from "./categoryData";

export default function ProductsApplications() {
    return (
        <main className={styles.page}>
            <section className={styles.heroBanner}>
                <div className={styles.heroContent}>
                    <p className={styles.heroTag}>Products & Applications</p>
                    <h1>From Healing Hands to Homely Tables.</h1>
                    <p className={styles.heroDescription}>
                        Discover product categories designed for care, comfort,
                        performance and effortless table presentation.
                    </p>
                </div>
            </section>

            <section className={styles.categoryGrid}>
                {productCategories.map((category, index) => (
                    <article
                        key={category.title}
                        className={`${styles.categoryCard} ${
                            index % 2 ? styles.reverse : ""
                        }`}
                    >
                        <div className={styles.categoryImageWrapper}>
                            <img
                                src={category.image}
                                alt={category.title}
                                className={styles.categoryImage}
                            />
                        </div>
                        <div className={styles.categoryCardContent}>
                            <p className={styles.cardTag}>{category.heroTag}</p>
                            <h2>{category.title}</h2>
                            <p>{category.description}</p>
                            <Link
                                to={category.route}
                                className={styles.discoverButton}
                            >
                                Discover Now
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    );
}
