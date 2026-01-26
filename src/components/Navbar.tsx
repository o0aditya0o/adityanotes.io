'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(path);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    Aditya Notes
                </Link>
                <ul className={styles.navLinks}>
                    <li>
                        <Link
                            href="/"
                            className={isActive('/') && !pathname.includes('/work') && !pathname.includes('/life') && !pathname.includes('/books') ? styles.active : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/work"
                            className={isActive('/work') ? styles.active : ''}
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/life"
                            className={isActive('/life') ? styles.active : ''}
                        >
                            Life
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/books"
                            className={isActive('/books') ? styles.active : ''}
                        >
                            Books
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
