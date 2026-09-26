"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/components/Header.module.css"

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        {name: "Home", href: "/"},
        {name: "Services", href: "/services"},
        {name: "Products", href: "/products"},
        {name: "About", href: "/about"},
        {name: "Contact", href: "/contact"}
    ];
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo DIV */}
                <Link href="/" className={styles.logoGroup}>
                    <div className={styles.logoIcon}>DC</div>
                    <div className={styles.logoText}>
                        <h1>Digital Chautati</h1>
                        <p>Creative Technology</p>
                    </div>
                </Link>
                {/* Navigation Links */}
                <nav>
                    {navLinks.map((link) => (
                        <Link key={link.name}
                        href={link.href} className={styles.navLink}> {link.name}</Link>
                    ))}
                </nav>
                <Link href="/contact" className={styles.ctaButton}>Contact Us</Link>

                <button
                className={styles.hamburger}
                onClick={()=>setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}>
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={styles.navLink}
                    >{link.name}</Link>
                ))}

                <Link href="/contact"
                onClick={()=>setIsMenuOpen(false)}
                className={styles.ctaButton}
                style={{ textAlign: 'center'}}>
                Contact Us</Link>
            </div>
        </header>
    )
}