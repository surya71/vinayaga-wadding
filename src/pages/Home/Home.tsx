import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

interface ProductCategory {
    title: string;
    path: string;
    image: string;
}

const heroItems = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd01b4d?w=1200&h=600&fit=crop",
        title: "Premium Quality",
        description: "30+ years of excellence in cotton wadding",
        textPosition: "middle_left",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop",
        title: "Sustainable",
        description: "Eco-friendly sourcing and practices",
        textPosition: "middle_center",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        title: "Global Reach",
        description: "Serving clients worldwide",
        textPosition: "middle_right",
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
        title: "Industry Leaders",
        description: "Trusted by top companies",
        textPosition: "middle_center",
    },
];

const certificateLogos = [
    {
        id: 1,
        title: "Global Recycled Standard",
        image: "/assets/certificates/gots-logo.png",
        alt: "GRS certification logo",
    },
    {
        id: 2,
        title: "Global Organic Textile Standard",
        image: "/assets/certificates/gots-logo.png",
        alt: "GOTS certification logo",
    },
    {
        id: 3,
        title: "Vegan Verified",
        image: "/assets/certificates/gots-logo.png",
        alt: "Vegan verified logo",
    },
    {
        id: 4,
        title: "Performance Days",
        image: "/assets/certificates/gots-logo.png",
        alt: "Performance Days logo",
    },
    {
        id: 5,
        title: "ISPO",
        image: "/assets/certificates/gots-logo.png",
        alt: "ISPO logo",
    },
    {
        id: 6,
        title: "Industry Award",
        image: "/assets/certificates/gots-logo.png",
        alt: "Industry award badge",
    },
];

const productCategories: ProductCategory[] = [
    {
        title: "Surgical Wadding",
        path: "/products/surgical-wadding",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop",
    },
    {
        title: "Eco-friendly Finished Goods",
        path: "/products/finished-goods",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    },
    {
        title: "Custom Solutions",
        path: "/products/custom-solutions",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop",
    },
    {
        title: "Global Distribution",
        path: "/products/global-distribution",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    },
];

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => {
                const next = (prev + 1) % heroItems.length;
                // Disable transition when wrapping from last to first
                if (next === 0) {
                    setIsTransitioning(false);
                } else {
                    setIsTransitioning(true);
                }
                return next;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const belowHeroRef = useRef<HTMLElement | null>(null);

    const scrollToNextSection = () => {
        const target = belowHeroRef.current;
        if (!target) return;

        const startY = window.scrollY;
        const endY = target.getBoundingClientRect().top + startY;
        const duration = 750;
        let startTime: number | null = null;

        const easeInOut = (t: number) =>
            t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const animateScroll = (timestamp: number) => {
            if (startTime === null) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentY = startY + (endY - startY) * easeInOut(progress);
            window.scrollTo(0, currentY);

            if (elapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        requestAnimationFrame(animateScroll);
    };

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.carousel}>
                    <div
                        className={styles.carouselTrack}
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                            transition: isTransitioning
                                ? "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                                : "none",
                        }}
                    >
                        {heroItems.map((item) => (
                            <div key={item.id} className={styles.heroItem}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.heroImage}
                                />
                                <div
                                    className={`${styles.overlay} ${styles[`overlay_${item.textPosition}`]}`}
                                >
                                    <div className={styles.overlayContent}>
                                        <h2 className={styles.overlayTitle}>
                                            {item.title}
                                        </h2>
                                        <p
                                            className={
                                                styles.overlayDescription
                                            }
                                        >
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <button
                        className={styles.carouselButton}
                        onClick={prevSlide}
                        aria-label="Previous slide"
                    >
                        ‹
                    </button>
                    <button
                        className={`${styles.carouselButton} ${styles.next}`}
                        onClick={nextSlide}
                        aria-label="Next slide"
                    >
                        ›
                    </button> */}

                    <div className={styles.carouselDots}>
                        {heroItems.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${
                                    index === currentSlide ? styles.active : ""
                                }`}
                                onClick={() => setCurrentSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        className={styles.scrollDownButton}
                        onClick={scrollToNextSection}
                        aria-label="Scroll down"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M12 16.5L5.5 10l1.41-1.41L12 13.67l5.09-5.08L18.5 10 12 16.5z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
            </section>

            <section ref={belowHeroRef} className={styles.companySection}>
                <article className={styles.companyCard}>
                    <div className={styles.companyIntro}>
                        Pioneering India’s 1st certified organic cotton wadding
                        industry
                    </div>
                    <div className={styles.companyDescription}>
                        <p>
                            For over 15 years, <strong> Sri Vinayaga </strong>{" "}
                            has been dedicated to delivering quality cotton
                            solutions. Today, we lead with innovation in
                            certified organic cotton wadding — recognized by
                            GOTS for sustainability and purity. From surgical
                            wadding to eco‑friendly finished goods like gloves
                            and baby beds, we craft comfort with integrity,
                            always in harmony with nature. For over 15 years,{" "}
                            <strong> Sri Vinayaga </strong> has been dedicated
                            to delivering quality cotton solutions. Today, we
                            lead with innovation in certified organic cotton
                            wadding — recognized by GOTS for sustainability and
                            purity. From surgical wadding to eco‑friendly
                            finished goods like gloves and baby beds, we craft
                            comfort with integrity, always in harmony with
                            nature.
                        </p>
                        <button className={styles.missionButton}>
                            Our Mission --
                        </button>
                    </div>
                </article>
            </section>
            <section className={styles.productCategoriesSection}>
                <div className={styles.productCategoriesIntro}>
                    <p className={styles.productSectionLabel}>
                        Product Categories
                    </p>
                    <h2 className={styles.productSectionTitle}>
                        Explore our cotton solutions across applications.
                    </h2>
                </div>
                <div className={styles.productCategoriesGrid}>
                    {productCategories.map((category) => (
                        <Link
                            key={category.title}
                            to={category.path}
                            className={styles.productCard}
                        >
                            <div className={styles.productImageWrapper}>
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className={styles.productImage}
                                />
                                <div className={styles.productOverlay}>
                                    <p className={styles.productTag}>
                                        Product category
                                    </p>
                                    <h3 className={styles.productTitle}>
                                        {category.title}
                                    </h3>
                                    <span className={styles.productButton}>
                                        Explore
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <section className={styles.certificatesSection}>
                <div className={styles.certificatesWrapper}>
                    <div className={styles.certificatesIntro}>
                        <p className={styles.certLabel}>Certifications</p>
                        <h2 className={styles.certificatesTitle}>
                            Standards that elevate our manufacturing quality.
                        </h2>
                        <p className={styles.certDescription}>
                            Our certified awards and verifications support
                            stronger quality controls, responsible sourcing, and
                            better product reliability. Each badge represents
                            the premium practices we bring to every stage of
                            textile production.
                        </p>
                        <Link
                            to="/certificate"
                            className={styles.certificatesButton}
                        >
                            View more
                        </Link>
                    </div>
                    <div className={styles.certificatesLogoGrid}>
                        {certificateLogos.map((certificate) => (
                            <div
                                key={certificate.id}
                                className={styles.certificateItem}
                            >
                                <img
                                    src={certificate.image}
                                    alt={certificate.alt}
                                    className={styles.certificateImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
