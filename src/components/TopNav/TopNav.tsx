import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/vinayaga-logo.svg";
import styles from "./TopNav.module.css";

const links = [
    { path: "/company", label: "Company" },
    { path: "/products-applications", label: "Products & Applications" },
    { path: "/certificate", label: "Certificate" },
    { path: "/sustainability", label: "Sustainability & Responsibility" },
    { path: "/contact", label: "Contact" },
];

export default function TopNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isAtTop, setIsAtTop] = useState(true);
    const menuRef = useRef<HTMLElement | null>(null);
    const lastScrollY = useRef(0);
    const location = useLocation();
    const isHome = location.pathname === "/";
    const isTransparent = isHome && isAtTop;

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsAtTop(currentScrollY === 0);

            if (currentScrollY <= 0) {
                setIsHidden(false);
            } else if (
                currentScrollY > lastScrollY.current &&
                currentScrollY > 80
            ) {
                setIsHidden(true);
            } else if (currentScrollY < lastScrollY.current) {
                setIsHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerClassName = [
        styles.topnav,
        isHome ? styles.homeOverlay : "",
        isHidden ? styles.hidden : "",
        isTransparent ? styles.transparent : styles.solid,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <>
            {isMenuOpen && (
                <div className={styles.backdrop} onClick={closeMenu} />
            )}
            <header className={headerClassName} ref={menuRef}>
                <NavLink
                    to="/"
                    className={styles.branding}
                    aria-label="Go to homepage"
                    onClick={closeMenu}
                >
                    <div>
                        <strong>Sri Vinayaga</strong>
                        <span>Organic Cotton Wadding</span>
                    </div>
                </NavLink>

                <nav
                    className={`${styles.links} ${isMenuOpen ? styles.active : ""}`}
                    aria-label="Primary navigation"
                >
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `${styles.link} ${isActive ? styles.active : ""}`
                            }
                            onClick={closeMenu}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.opened : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
        </>
    );
}
