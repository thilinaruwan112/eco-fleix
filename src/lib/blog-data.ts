export interface BlogContentPart {
  type: 'heading' | 'paragraph' | 'quote' | 'list';
  text: string;
}

export interface BlogPost {
  slug: string;
  image: string;
  aiHint: string;
  title: string;
  description: string;
  author: string;
  authorAiHint: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  content: BlogContentPart[];
}

export const blogPosts: BlogPost[] = [
    {
    slug: 'the-future-of-e-waste-management-in-dubai',
    image: 'https://images.unsplash.com/photo-1603436039103-a434191370b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlLXdhc3RlJTIwcmVjeWNsaW5nJTIwZmFjdG9yeXxlbnwwfHx8fDE3NTM0NTA3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aiHint: 'e-waste recycling factory',
    title: 'latest_insights_title',
    description: 'blog_hero_desc',
    author: 'Dr. Sarah Ahmed',
    authorAiHint: 'woman portrait',
    date: 'Mar 15, 2025',
    readTime: 'latest_insights_read_time',
    category: 'featured_article',
    categoryColor: 'bg-primary/10 text-primary',
    content: [
      { type: 'paragraph', text: 'blog_p1' },
      { type: 'paragraph', text: 'blog_p2' },
      { type: 'heading', text: 'blog_h2_1' },
      { type: 'paragraph', text: 'blog_p3' },
      { type: 'quote', text: 'blog_quote_1' },
      { type: 'paragraph', text: 'blog_p4' },
      { type: 'list', text: 'blog_li_1_strong:blog_li_1_text' },
      { type: 'list', text: 'blog_li_2_strong:blog_li_2_text' },
      { type: 'list', text: 'blog_li_3_strong:blog_li_3_text' },
      { type: 'heading', text: 'blog_h2_2' },
      { type: 'paragraph', text: 'blog_p5' },
    ]
  },
  {
    slug: 'complete-guide-to-secure-data-destruction',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'shredded hard drives',
    title: 'explore_blog_post_1_title',
    description: 'explore_blog_post_1_desc',
    author: 'Mike Johnson',
    authorAiHint: 'man portrait',
    date: 'Mar 10, 2025',
    readTime: 'explore_blog_post_1_read_time',
    category: 'explore_blog_post_1_category',
    categoryColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
    content: [
      { type: 'paragraph', text: 'blog_p1' },
      { type: 'paragraph', text: 'blog_p2' },
    ]
  },
  {
    slug: 'corporate-it-asset-disposal-best-practices',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'office computers',
    title: 'explore_blog_post_2_title',
    description: 'explore_blog_post_2_desc',
    author: 'Lisa Chen',
    authorAiHint: 'woman portrait',
    date: 'Mar 8, 2025',
    readTime: 'explore_blog_post_2_read_time',
    category: 'explore_blog_post_2_category',
    categoryColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
    content: [
        { type: 'paragraph', text: 'blog_p1' },
        { type: 'paragraph', text: 'blog_p2' },
    ]
  },
  {
    slug: 'environmental-impact-of-e-waste-recycling',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'recycling symbol monitor',
    title: 'explore_blog_post_3_title',
    description: 'explore_blog_post_3_desc',
    author: 'Emma Wilson',
    authorAiHint: 'woman portrait',
    date: 'Mar 5, 2025',
    readTime: 'explore_blog_post_3_read_time',
    category: 'explore_blog_post_3_category',
    categoryColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
    content: [
      { type: 'paragraph', text: 'blog_p1' },
      { type: 'paragraph', text: 'blog_p2' },
    ]
  },
  {
    slug: 'uae-e-waste-regulations-what-businesses-need-to-know',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'compliance documents',
    title: 'explore_blog_post_4_title',
    description: 'explore_blog_post_4_desc',
    author: 'Ahmed Al-Rashid',
    authorAiHint: 'man portrait',
    date: 'Mar 3, 2025',
    readTime: 'explore_blog_post_4_read_time',
    category: 'explore_blog_post_4_category',
    categoryColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
    content: [
      { type: 'paragraph', text: 'blog_p1' },
      { type: 'paragraph', text: 'blog_p2' },
    ]
  },
  {
    slug: 'how-to-prepare-your-devices-for-e-waste-recycling',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'old mobile phones',
    title: 'explore_blog_post_5_title',
    description: 'explore_blog_post_5_desc',
    author: 'Fatima Hassan',
    authorAiHint: 'woman portrait',
    date: 'Mar 1, 2025',
    readTime: 'explore_blog_post_5_read_time',
    category: 'explore_blog_post_5_category',
    categoryColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
    content: [
      { type: 'paragraph', text: 'blog_p1' },
      { type: 'paragraph', text: 'blog_p2' },
    ]
  },
  {
    slug: 'the-role-of-e-waste-in-the-circular-economy',
    image: 'https://placehold.co/600x400.png',
    aiHint: 'circular economy diagram',
    title: 'explore_blog_post_6_title',
    description: 'explore_blog_post_6_desc',
    author: 'David Lee',
    authorAiHint: 'man portrait',
    date: 'Feb 28, 2025',
    readTime: 'explore_blog_post_6_read_time',
    category: 'explore_blog_post_6_category',
    categoryColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
    content: [
      { type: 'paragraph', text: 'blog_p1' },
      { type: 'paragraph', text: 'blog_p2' },
    ]
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
