'use client';

import { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        // Redirect to Substack subscribe page with email pre-filled
        const substackUrl = `https://aditagar.substack.com/subscribe?email=${encodeURIComponent(email)}`;
        window.open(substackUrl, '_blank');
        setEmail('');
    };

    return (
        <section className={styles.newsletter}>
            <div className={styles.container}>
                <h3 className={styles.title}>Stay in the loop</h3>
                <p className={styles.description}>
                    A periodic newsletter about engineering, design, and building things.
                    No spam, just updates.
                </p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="user@example.com"
                        required
                        className={styles.input}
                        aria-label="Email address"
                    />
                    <button type="submit" className={styles.button}>
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
