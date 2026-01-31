import { BlogPost } from '@/components/BlogPostList';

export const posts: BlogPost[] = [
    // Work posts
    {
        slug: 'borrowed-glasses-dont-fit',
        title: "Borrowed Glasses Don't Fit",
        date: 'January 26, 2026',
        excerpt: 'On first-principles thinking in careers, teams, and life. Why flawed opinions are better than borrowed ones.',
        category: 'work',
        coverImage: '/images/borrowed-glasses.png',
    },
    {
        slug: 'the-hedge-changes',
        title: 'The Hedge Changes',
        date: 'January 20, 2026',
        excerpt: 'On unlearning skill-as-safety and learning people-as-leverage.',
        category: 'work',
        coverImage: '/images/the-hedge-changes.png',
    },
    {
        slug: 'solve-for-motivation',
        title: 'Solve for Motivation, Not Productivity',
        date: 'January 14, 2026',
        excerpt: 'Why productivity is rarely the problem and motivation is the real engine.',
        category: 'work',
        coverImage: '/images/solve-for-motivation.png',
    },
    {
        slug: 'confusion-before-clarity',
        title: 'Confusion Before Clarity',
        date: 'January 07, 2026',
        excerpt: 'Why rushing to clarity often leads to poor decisions, and the value of sitting with confusion.',
        category: 'work',
        coverImage: '/images/confusion-before-clarity.png',
    },

    // Life posts
    {
        slug: 'finding-balance',
        title: 'Finding Balance in a Remote World',
        date: 'January 18, 2026',
        excerpt: 'Reflections on maintaining work-life balance while working remotely and staying productive.',
        category: 'life',
        coverImage: '/images/projects/project-3.png', // Placeholder
    },
    {
        slug: 'morning-routines',
        title: 'The Power of Morning Routines',
        date: 'January 5, 2026',
        excerpt: 'How establishing a consistent morning routine transformed my productivity and mental clarity.',
        category: 'life',
        coverImage: '/images/projects/project-2.png', // Placeholder
    },

    // Books posts
    // Books posts
    {
        slug: 'school-of-life',
        title: 'The School of Life: An Emotional Education',
        date: 'January 2026',
        excerpt: 'A guide to emotional intelligence, covering self-knowledge, relationships, work, and anxiety.',
        category: 'books',
        coverImage: '/images/books/school-of-life.jpg',
    },
    {
        slug: 'four-thousand-weeks',
        title: 'Four Thousand Weeks',
        date: 'January 2026',
        excerpt: 'Time management for mortals. Accepting our limited time to focus on what truly matters.',
        category: 'books',
        coverImage: '/images/books/four-thousand-weeks.jpg',
    },
    {
        slug: 'statquest-ml-guide',
        title: 'The StatQuest Illustrated Guide to Machine Learning',
        date: 'December 2025',
        excerpt: 'A visual and intuitive guide to understanding machine learning concepts, from basics to advanced models.',
        category: 'books',
        coverImage: '/images/books/statquest-ml.jpg',
    },
];
