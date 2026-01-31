import React from 'react';
import Link from 'next/link';
import styles from './page.module.css';

export default function PetriForcePage() {
    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <section className={styles.heroSection}>
                <span className={styles.heroTagline}>Project Petrichor</span>
                <h1 className={styles.heroTitle}>
                    Gamify Financial<br />Discipline.
                </h1>
                <p className={styles.heroSubtitle}>
                    Impulse buying is a bug. Petri Force is the patch.<br />
                    Satisfy the itch to buy without spending a dime.
                </p>

                <a
                    href="https://github.com/o0aditya0o/petrichor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.buttonPrimary}
                >
                    View Source Code →
                </a>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <span className={styles.cardIcon}>📸</span>
                        <h3 className={styles.cardTitle}>Screenshot</h3>
                        <p className={styles.cardText}>
                            See something you want? Don't buy it. Screenshot it. Petri Force scans the image and extracts product details instantly.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardIcon}>✨</span>
                        <h3 className={styles.cardTitle}>Mock Purchase</h3>
                        <p className={styles.cardText}>
                            Experience the dopamine hit of a checkout flow. Click "Buy", see the confetti, add to your digital haul. Zero cost.
                        </p>
                    </div>
                    <div className={styles.card}>
                        <span className={styles.cardIcon}>⚖️</span>
                        <h3 className={styles.cardTitle}>Trade-off</h3>
                        <p className={styles.cardText}>
                            Out of monthly coins? You must sacrifice a previous item to get the new one. Forced prioritization gamified.
                        </p>
                    </div>
                </div>
            </section>

            {/* Deep Dive / Mockup Area */}
            <section className={styles.section}>
                <div className={styles.mockupContainer}>
                    <p className={styles.mockupText}>[ Interactive Demo / App Screenshot Container ]</p>
                </div>
            </section>

        </main>
    );
}
