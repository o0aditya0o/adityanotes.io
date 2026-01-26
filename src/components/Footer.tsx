import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Aditya. All rights reserved.
                </p>
                <div className={styles.socialLinks}>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
