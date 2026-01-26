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
        <Link href={link} className={styles.card}>
            <div>
                <span className={styles.tag}>{color}</span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>

            <div className={styles.footer}>
                {/* Icon is deprecated in new design, but keeping for backward compatibility if passed */}
                {icon && <span className={styles.icon}>{icon}</span>}
                <span className={styles.arrow}>→</span>
            </div>
        </Link>
    );
}
