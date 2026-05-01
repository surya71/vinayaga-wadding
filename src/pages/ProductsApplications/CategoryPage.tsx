import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductsApplications.module.css";
import type { CategoryPageData } from "./categoryData";

type CategoryPageProps = {
    data: CategoryPageData;
};

export default function CategoryPage({ data }: CategoryPageProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeSegment = data.applications[activeIndex];

    return (
        <main className={styles.page}>
            <section className={styles.heroBanner}>
                <div className={styles.heroContent}>
                    <p className={styles.heroTag}>{data.heroTag}</p>
                    <h1>{data.title}</h1>
                    <p className={styles.heroDescription}>{data.subtitle}</p>
                    <Link
                        to="/products-applications"
                        className={styles.heroCta}
                    >
                        Back to Products
                    </Link>
                </div>
            </section>

            <section className={styles.categorySummary}>
                <div className={styles.summaryText}>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>
                <div className={styles.summaryCards}>
                    {data.meta.map((item) => (
                        <div key={item.label} className={styles.metaCard}>
                            <span>{item.label}</span>
                            <strong>{item.value}</strong>
                        </div>
                    ))}
                </div>
            </section>

            <section className={styles.applicationSection}>
                <div className={styles.appMenu}>
                    <p className={styles.sectionTag}>Applications</p>
                    <h3>Choose a focus</h3>
                    {data.applications.map((segment, index) => (
                        <button
                            key={segment.id}
                            type="button"
                            className={`${styles.appMenuItem} ${
                                index === activeIndex
                                    ? styles.activeMenuItem
                                    : ""
                            }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {segment.label}
                        </button>
                    ))}
                </div>

                <div className={styles.appGrid}>
                    {activeSegment.images.map((src, idx) => (
                        <div key={src + idx} className={styles.appTile}>
                            <img
                                src={src}
                                alt={`${activeSegment.label} ${idx + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
