import { BlogPost } from '@/components/BlogPostList';

export const posts: BlogPost[] = [
    // Work posts
    {
        slug: 'building-scalable-systems',
        title: 'Building Scalable Systems',
        date: 'January 15, 2026',
        excerpt: 'Lessons learned from designing and implementing distributed systems that can handle millions of users.',
        category: 'work',
    },
    {
        slug: 'modern-frontend-architecture',
        title: 'Modern Frontend Architecture',
        date: 'January 10, 2026',
        excerpt: 'Exploring the best practices for building maintainable and performant web applications.',
        category: 'work',
    },
    {
        slug: 'api-design-principles',
        title: 'API Design Principles',
        date: 'December 20, 2025',
        excerpt: 'A comprehensive guide to designing RESTful APIs that are intuitive and developer-friendly.',
        category: 'work',
    },

    // Life posts
    {
        slug: 'finding-balance',
        title: 'Finding Balance in a Remote World',
        date: 'January 18, 2026',
        excerpt: 'Reflections on maintaining work-life balance while working remotely and staying productive.',
        category: 'life',
    },
    {
        slug: 'morning-routines',
        title: 'The Power of Morning Routines',
        date: 'January 5, 2026',
        excerpt: 'How establishing a consistent morning routine transformed my productivity and mental clarity.',
        category: 'life',
    },

    // Books posts
    {
        slug: 'atomic-habits-review',
        title: 'Atomic Habits by James Clear',
        date: 'January 12, 2026',
        excerpt: 'A transformative book on building good habits and breaking bad ones through tiny changes.',
        category: 'books',
    },
    {
        slug: 'designing-data-intensive-applications',
        title: 'Designing Data-Intensive Applications',
        date: 'December 28, 2025',
        excerpt: 'An essential read for anyone working with distributed systems and databases.',
        category: 'books',
    },
    {
        slug: 'deep-work-review',
        title: 'Deep Work by Cal Newport',
        date: 'December 15, 2025',
        excerpt: 'Strategies for focused success in a distracted world and cultivating deep concentration.',
        category: 'books',
    },
];
