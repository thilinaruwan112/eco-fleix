export type BlogContentPart = {
  type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'alert' | 'table' | 'checklist' | 'stats' | 'cta';
  text?: string;
  items?: any[];
  title?: string;
  variant?: 'default' | 'warning';
  headers?: string[];
  rows?: string[][];
  pros?: { title: string; items: string[] };
  cons?: { title: string; items: string[] };
  props?: any;
};


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

const futureOfEwastePost: BlogPost = {
  slug: 'the-future-of-e-waste-management-in-dubai',
  image: 'https://images.unsplash.com/photo-1603436039103-a434191370b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxlLXdhc3RlJTIwcmVjeWNsaW5nJTIwZmFjdG9yeXxlbnwwfHx8fDE3NTM0NTA3ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  aiHint: 'e-waste recycling factory',
  title: 'blog_detail_title',
  description: 'blog_detail_description',
  author: 'Dr. Sarah Ahmed',
  authorAiHint: 'woman portrait',
  date: 'Mar 15, 2025',
  readTime: 'latest_insights_read_time',
  category: 'featured_article',
  categoryColor: 'bg-primary/10 text-primary',
  content: [
    { type: 'paragraph', text: 'blog_p1'},
    { type: 'heading', text: 'blog_h1'},
    { type: 'paragraph', text: 'blog_p2'},
    { type: 'list', items: ['blog_list1_item1', 'blog_list1_item2', 'blog_list1_item3']},
    { type: 'heading', text: 'blog_h2'},
    { type: 'subheading', text: 'blog_h3'},
    { type: 'list', items: ['blog_list2_item1', 'blog_list2_item2', 'blog_list2_item3']},
    { type: 'subheading', text: 'blog_h4'},
    { type: 'list', items: ['blog_list3_item1', 'blog_list3_item2']},
    { type: 'alert', title: 'blog_alert1_title', text: 'blog_alert1_text', variant: 'warning'},
    { type: 'heading', text: 'blog_h5'},
    { type: 'subheading', text: 'blog_h6'},
    { type: 'list', items: ['blog_list4_item1', 'blog_list4_item2', 'blog_list4_item3', 'blog_list4_item4']},
    { type: 'subheading', text: 'blog_h7'},
    { type: 'table', headers: ['blog_table1_header1', 'blog_table1_header2', 'blog_table1_header3', 'blog_table1_header4'], rows: [
        ['blog_table1_row1_col1', 'blog_table1_row1_col2', 'blog_table1_row1_col3', 'blog_table1_row1_col4'],
        ['blog_table1_row2_col1', 'blog_table1_row2_col2', 'blog_table1_row2_col3', 'blog_table1_row2_col4'],
        ['blog_table1_row3_col1', 'blog_table1_row3_col2', 'blog_table1_row3_col3', 'blog_table1_row3_col4'],
        ['blog_table1_row4_col1', 'blog_table1_row4_col2', 'blog_table1_row4_col3', 'blog_table1_row4_col4'],
        ['blog_table1_row5_col1', 'blog_table1_row5_col2', 'blog_table1_row5_col3', 'blog_table1_row5_col4'],
    ]},
    { type: 'subheading', text: 'blog_h8'},
    { type: 'paragraph', text: 'blog_p3'},
    { type: 'checklist', 
      pros: { title: 'blog_checklist1_pros_title', items: ['blog_checklist1_pros_item1', 'blog_checklist1_pros_item2', 'blog_checklist1_pros_item3', 'blog_checklist1_pros_item4', 'blog_checklist1_pros_item5']},
      cons: { title: 'blog_checklist1_cons_title', items: ['blog_checklist1_cons_item1', 'blog_checklist1_cons_item2', 'blog_checklist1_cons_item3', 'blog_checklist1_cons_item4', 'blog_checklist1_cons_item5']}
    },
    { type: 'heading', text: 'blog_h9'},
    { type: 'paragraph', text: 'blog_p4'},
    { type: 'stats', items: [
      {value: '95%', label: 'blog_stat1_label'},
      {value: '80%', label: 'blog_stat2_label'},
      {value: '70%', label: 'blog_stat3_label'},
    ]},
    { type: 'subheading', text: 'blog_h10'},
    { type: 'paragraph', text: 'blog_p5'},
    { type: 'list', items: ['blog_list5_item1', 'blog_list5_item2', 'blog_list5_item3', 'blog_list5_item4']},
    { type: 'heading', text: 'blog_h11'},
    { type: 'subheading', text: 'blog_h12'},
    { type: 'list', items: ['blog_list6_item1', 'blog_list6_item2', 'blog_list6_item3', 'blog_list6_item4']},
    { type: 'subheading', text: 'blog_h13'},
    { type: 'paragraph', text: 'blog_p6'},
    { type: 'alert', title: 'blog_alert2_title', text: 'blog_alert2_text', variant: 'default'},
    { type: 'heading', text: 'blog_h14'},
    { type: 'paragraph', text: 'blog_p7'},
    { type: 'subheading', text: 'blog_h15'},
    { type: 'list', items: ['blog_list7_item1', 'blog_list7_item2', 'blog_list7_item3', 'blog_list7_item4']},
    { type: 'alert', title: 'blog_alert3_title', text: 'blog_alert3_text', variant: 'default'},
    { type: 'heading', text: 'blog_h16'},
    { type: 'paragraph', text: 'blog_p8'},
    { type: 'paragraph', text: 'blog_p9'},
    { type: 'cta', props: {
      title: 'blog_cta_title',
      desc: 'blog_cta_desc',
      button1Text: 'blog_cta_button1',
      button1Link: '/contact',
      button2Text: 'blog_cta_button2',
      button2Link: '/our-process'
    }}
  ]
};

const otherBlogPosts: BlogPost[] = [
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

export const blogPosts: BlogPost[] = [
  futureOfEwastePost,
  ...otherBlogPosts
];


export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
