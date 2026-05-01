import styles from "./Footer.module.css";

function Footer() {
    const products = [
        "Premium Polyester Wadding",
        "Cotton Blend Wadding",
        "Eco-Friendly Wadding",
    ];

    return (
        <footer className={styles.footer}>
            {/* Main Footer Content */}
            <div className={styles.container}>
                {/* Column 1: Company Info */}
                <div className={styles.column}>
                    <div className={styles.companyInfo}>
                        <h3 className={styles.companyName}>Sri Vinayaga</h3>
                        <p className={styles.companySubtitle}>Cotton Wadding</p>
                        <p className={styles.address}>
                            Quality cotton products for your everyday needs
                        </p>
                    </div>
                </div>

                {/* Column 2: Company Links */}
                <div className={styles.column}>
                    <nav className={styles.nav}>
                        <h4 className={styles.columnTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            <li>
                                <a href="/company">About Us</a>
                            </li>
                            <li>
                                <a href="/company">Vision & Mission</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Column 3: Products */}
                <div className={styles.column}>
                    <nav className={styles.nav}>
                        <h4 className={styles.columnTitle}>Products</h4>
                        <ul className={styles.linkList}>
                            {products.map((product, index) => (
                                <li key={index}>
                                    <a href="/products-applications">
                                        {product}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                {/* Column 4: Resources */}
                <div className={styles.column}>
                    <nav className={styles.nav}>
                        <ul className={styles.linkList}>
                            <li className={styles.columnTitle}>
                                <a href="/certificate">Certification</a>
                            </li>
                            <li className={styles.columnTitle}>
                                <a href="/sustainability">Sustainability</a>
                            </li>
                            <li className={styles.columnTitle}>
                                <a href="/contact">Contact Us</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Divider */}
            <div className={styles.divider}></div>

            {/* Copyright Section */}
            <div className={styles.copyright}>
                <p>© 2026 Sri Vinayaga. All rights reserved.</p>
                <div className={styles.createdBy}>
                    <p>
                        Created by <span className={styles.heart}>❤️</span> JS
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
