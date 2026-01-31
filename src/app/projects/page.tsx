import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

const projects = [
    {
        title: "Financial Analytics Dashboard",
        excerpt: "A comprehensive dashboard for real-time financial monitoring. Featuring interactive charts, data visualization, and predictive modeling for better investment decisions.",
        image: "/images/projects/project-1.png",
        slug: "financial-analytics"
    },
    {
        title: "The Digital Library",
        excerpt: "An immersive digital reading experience designed to bring the joy of physical libraries to the web. Focus on typography, accessibility, and discovery.",
        image: "/images/projects/project-2.png",
        slug: "digital-library"
    },
    {
        title: "Mindfulness App",
        excerpt: "A mobile-first application dedicated to mental wellness and daily meditation. Clean interface with calming aesthetics to promote daily usage habits.",
        image: "/images/projects/project-3.png",
        slug: "mindfulness-app"
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
