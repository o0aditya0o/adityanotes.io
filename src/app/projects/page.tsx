import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

const projects = [
    {
        title: "Petri Force",
        excerpt: "An anti-impulse buying tool that gamifies financial discipline. It satisfies the psychological need to 'buy' with a high-fidelity mock purchase experience, acting as a buffer against impulse spending.",
        image: "/images/projects/petri-force.jpg",
        slug: "petri-force"
    }
];

export default function ProjectsPage() {
    return (
        <main>
            <header className={styles.header}>
                <div className={styles.overlay} />
                <div className={styles.headerContent}>
                    <h1 className={styles.title}>Selected Projects</h1>
                    <p className={styles.subtitle}>
                        A collection of digital products, experiments, and ideas brought to life.
                    </p>
                </div>
            </header>

            <div className="container">
                <div className={styles.projectsList}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            excerpt={project.excerpt}
                            image={project.image}
                            slug={project.slug}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
