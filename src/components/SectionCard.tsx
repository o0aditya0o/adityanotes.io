import Link from 'next/link';
import styles from './SectionCard.module.css';

interface SectionCardProps {
    title: string;
    description: string;
    color: 'work' | 'life' | 'books';
    link: string;
    icon: string;
}

export default function SectionCard({ title, description, color, link, icon }: SectionCardProps) {
    return (
        <Link href={link} className={`${styles.card} ${styles[color]}`}>
            <div className={styles.iconWrapper}>
                <span className={styles.icon}>{icon}</span>
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <span className={styles.arrow}>→</span>
        </Link>
    );
}
