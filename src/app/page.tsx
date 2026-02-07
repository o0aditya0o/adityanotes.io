'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionCard from '@/components/SectionCard';
import Newsletter from '@/components/Newsletter';
import styles from './page.module.css';

export default function Home() {
  const [text, setText] = useState('');
  const fullText = "Hi! I am Aditya";

  useEffect(() => {
    let index = 0;
    const timeoutId = setTimeout(() => {
      const timer = setInterval(() => {
        setText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) clearInterval(timer);
      }, 100);
      return () => clearInterval(timer);
    }, 500); // Initial delay before typing starts

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.profileSection}>
          <div className={styles.profileImageWrapper}>
            <Image
              src="/images/me.png"
              alt="Aditya"
              width={210}
              height={210}
              className={styles.profileImage}
              priority
            />
          </div>
          <div>
            <div className={styles.terminalPrompt}>user@aditya-notes:~$ greet</div>
            <h1 className={styles.heroTitle}>
              {text}
              <span className={styles.cursor}></span>
            </h1>
            <p className={styles.heroSubtitle}>
              This is my space for ideas, reflections, and experiments.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionsGrid}>
        <div style={{ gridColumn: 'span 7' }}>
          <SectionCard
            title="On Work"
            description="Engineering structure, teams, and leverage."
            color="work"
            icon=""
            link="/work"
          />
        </div>
        <div style={{ gridColumn: 'span 5' }}>
          <SectionCard
            title="On Life"
            description="Balance & perspective."
            color="life"
            icon=""
            link="/life"
          />
        </div>
        <div style={{ gridColumn: 'span 6' }}>
          <SectionCard
            title="On Books"
            description="Notes on what I'm reading."
            color="books"
            icon=""
            link="/books"
          />
        </div>
        <div style={{ gridColumn: 'span 6' }}>
          <SectionCard
            title="On Projects"
            description="Selected work and experiments."
            color="projects"
            icon=""
            link="/projects"
          />
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
