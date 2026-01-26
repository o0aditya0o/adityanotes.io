import { BlogPost } from '@/components/BlogPostList';

export const posts: BlogPost[] = [
    // Work posts
    {
        slug: 'borrowed-glasses-dont-fit',
        title: "Borrowed Glasses Don't Fit",
        date: 'January 26, 2026',
        excerpt: 'On first-principles thinking in careers, teams, and life. Why flawed opinions are better than borrowed ones.',
        category: 'work',
    },
    {
        slug: 'the-hedge-changes',
        title: 'The Hedge Changes',
        date: 'January 20, 2026',
        excerpt: 'On unlearning skill-as-safety and learning people-as-leverage.',
        category: 'work',
    },
    {
        slug: 'solve-for-motivation',
        title: 'Solve for Motivation, Not Productivity',
        date: 'January 14, 2026',
        excerpt: 'Why productivity is rarely the problem and motivation is the real engine.',
        category: 'work',
    },
    {
        slug: 'confusion-before-clarity',
        title: 'Confusion Before Clarity',
        date: 'January 07, 2026',
        excerpt: 'Why rushing to clarity often leads to poor decisions, and the value of sitting with confusion.',
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
