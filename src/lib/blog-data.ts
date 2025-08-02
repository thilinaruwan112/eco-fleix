export type BlogContentPart = {
  type: 'heading' | 'subheading' | 'paragraph' | 'list' | 'alert' | 'table' | 'checklist' | 'stats' | 'cta';
  text?: string;
  items?: string[] | { value: string; label: string }[];
  title?: string;
  variant?: 'default' | 'warning';
  headers?: string[];
  rows?: string[][];
  pros?: { title: string; items: string[] };
  cons?: { title: string; items: string[] };
  props?: Record<string, string>;
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
  image: 'https://images.unsplash.com/photo-1645520718652-9342896b0eec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxlLXdhc3RlJTIwcmVjeWNsaW5nJTIwZmFjdG9yeXxlbnwwfHx8fDE3NTM2MzkzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1652195019227-4f3d3f599959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxzaHJlZGRlZCUyMGhhcmQlMjBkcml2ZXN8ZW58MHx8fHwxNzUzNjM5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
      { type: 'paragraph', text: 'sdd_p1' },
      { type: 'heading', text: 'sdd_h1' },
      { type: 'paragraph', text: 'sdd_p2' },
      { type: 'list', items: ['sdd_l1_i1', 'sdd_l1_i2', 'sdd_l1_i3'] },
      { type: 'heading', text: 'sdd_h2' },
      { type: 'subheading', text: 'sdd_sh1' },
      { type: 'paragraph', text: 'sdd_p3' },
      { type: 'subheading', text: 'sdd_sh2' },
      { type: 'paragraph', text: 'sdd_p4' },
      { type: 'subheading', text: 'sdd_sh3' },
      { type: 'paragraph', text: 'sdd_p5' },
      { type: 'alert', title: 'sdd_a1_t', text: 'sdd_a1_d', variant: 'default' },
      { type: 'heading', text: 'sdd_h3' },
      { type: 'table', headers: ['sdd_th1', 'sdd_th2', 'sdd_th3'], rows: [
        ['sdd_tr1c1', 'sdd_tr1c2', 'sdd_tr1c3'],
        ['sdd_tr2c1', 'sdd_tr2c2', 'sdd_tr2c3'],
        ['sdd_tr3c1', 'sdd_tr3c2', 'sdd_tr3c3'],
      ]},
      { type: 'heading', text: 'sdd_h4' },
      { type: 'paragraph', text: 'sdd_p6' },
      { type: 'cta', props: {
        title: 'blog_cta_title', desc: 'blog_cta_desc', button1Text: 'blog_cta_button1', button1Link: '/contact', button2Text: 'blog_cta_button2', button2Link: '/our-process'
      }}
    ]
  },
  {
    slug: 'corporate-it-asset-disposal-best-practices',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxvZmZpY2UlMjBjb21wdXRlcnN8ZW58MHx8fHwxNzUzNjM5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
      { type: 'paragraph', text: 'itad_p1' },
      { type: 'heading', text: 'itad_h1' },
      { type: 'paragraph', text: 'itad_p2' },
      { type: 'checklist', 
        pros: { title: 'itad_cl1_pt', items: ['itad_cl1_pi1', 'itad_cl1_pi2', 'itad_cl1_pi3']},
        cons: { title: 'itad_cl1_ct', items: ['itad_cl1_ci1', 'itad_cl1_ci2', 'itad_cl1_ci3']}
      },
      { type: 'heading', text: 'itad_h2' },
      { type: 'paragraph', text: 'itad_p3' },
      { type: 'list', items: ['itad_l1_i1', 'itad_l1_i2', 'itad_l1_i3'] },
      { type: 'heading', text: 'itad_h3' },
      { type: 'paragraph', text: 'itad_p4' },
      { type: 'alert', title: 'itad_a1_t', text: 'itad_a1_d', variant: 'warning' },
      { type: 'cta', props: {
        title: 'blog_cta_title', desc: 'blog_cta_desc', button1Text: 'blog_cta_button1', button1Link: '/contact', button2Text: 'blog_cta_button2', button2Link: '/our-process'
      }}
    ]
  },
  {
    slug: 'environmental-impact-of-e-waste-recycling',
    image: 'https://images.unsplash.com/photo-1637064719709-0928e058f140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxyZWN5Y2xpbmclMjBzeW1ib2wlMjBtb25pdG9yfGVufDB8fHx8MTc1MzYzOTM2OXww&ixlib=rb-4.1.0&q=80&w=1080',
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
       { type: 'paragraph', text: 'ei_p1'},
       { type: 'heading', text: 'ei_h1'},
       { type: 'paragraph', text: 'ei_p2'},
       { type: 'stats', items: [
        {value: 'ei_s1_v', label: 'ei_s1_l'},
        {value: 'ei_s2_v', label: 'ei_s2_l'},
        {value: 'ei_s3_v', label: 'ei_s3_l'},
      ]},
      { type: 'heading', text: 'ei_h2' },
      { type: 'paragraph', text: 'ei_p3' },
      { type: 'list', items: ['ei_l1_i1', 'ei_l1_i2', 'ei_l1_i3']},
      { type: 'heading', text: 'ei_h3'},
      { type: 'paragraph', text: 'ei_p4' },
      { type: 'alert', title: 'ei_a1_t', text: 'ei_a1_d', variant: 'default' },
       { type: 'cta', props: {
        title: 'blog_cta_title', desc: 'blog_cta_desc', button1Text: 'blog_cta_button1', button1Link: '/contact', button2Text: 'blog_cta_button2', button2Link: '/our-process'
      }}
    ]
  },
  {
    slug: 'uae-e-waste-regulations-what-businesses-need-to-know',
    image: 'https://images.unsplash.com/photo-1554224155-cfa08c2a758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxjb21wbGlhbmNlJTIwZG9jdW1lbnRzfGVufDB8fHx8MTc1MzYzOTM2OXww&ixlib=rb-4.1.0&q=80&w=1080',
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
      { type: 'paragraph', text: 'uae_p1' },
      { type: 'heading', text: 'uae_h1' },
      { type: 'list', items: ['uae_l1_i1', 'uae_l1_i2', 'uae_l1_i3']},
      { type: 'alert', title: 'uae_a1_t', text: 'uae_a1_d', variant: 'warning'},
      { type: 'heading', text: 'uae_h2' },
      { type: 'paragraph', text: 'uae_p2' },
      { type: 'table', headers: ['uae_th1', 'uae_th2', 'uae_th3'], rows: [
          ['uae_tr1c1', 'uae_tr1c2', 'uae_tr1c3'],
          ['uae_tr2c1', 'uae_tr2c2', 'uae_tr2c3'],
      ]},
      { type: 'heading', text: 'uae_h3' },
      { type: 'paragraph', text: 'uae_p3' },
      { type: 'cta', props: {
        title: 'blog_cta_title', desc: 'blog_cta_desc', button1Text: 'blog_cta_button1', button1Link: '/contact', button2Text: 'blog_cta_button2', button2Link: '/our-process'
      }}
    ]
  },
  {
    slug: 'how-to-prepare-your-devices-for-e-waste-recycling',
    image: 'https://images.unsplash.com/photo-1595392030002-dd3bcc0ca05a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxvbGQlMjBtb2JpbGUlMjBwaG9uZXN8ZW58MHx8fHwxNzUzNjM5MzY5fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
      { type: 'paragraph', text: 'prep_p1' },
      { type: 'subheading', text: 'prep_sh1' },
      { type: 'paragraph', text: 'prep_p2' },
      { type: 'subheading', text: 'prep_sh2' },
      { type: 'paragraph', text: 'prep_p3' },
      { type: 'subheading', text: 'prep_sh3' },
      { type: 'paragraph', text: 'prep_p4' },
      { type: 'heading', text: 'prep_h1' },
      { type: 'checklist', 
        pros: { title: 'prep_cl1_pt', items: ['prep_cl1_pi1', 'prep_cl1_pi2', 'prep_cl1_pi3']},
        cons: { title: 'prep_cl1_ct', items: ['prep_cl1_ci1', 'prep_cl1_ci2', 'prep_cl1_ci3']}
      },
      { type: 'cta', props: {
        title: 'blog_cta_title', desc: 'blog_cta_desc', button1Text: 'blog_cta_button1', button1Link: '/contact', button2Text: 'blog_cta_button2', button2Link: '/our-process'
      }}
    ]
  },
  {
    slug: 'the-role-of-e-waste-in-the-circular-economy',
    image: 'https://images.unsplash.com/photo-1728042743444-527919e2443d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxjaXJjdWxhciUyMGVjb25vbXklMjBkaWFncmFtfGVufDB8fHx8MTc1MzYzOTM2OXww&ixlib=rb-4.1.0&q=80&w=1080',
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
      { type: 'paragraph', text: 'ce_p1' },
      { type: 'heading', text: 'ce_h1' },
      { type: 'paragraph', text: 'ce_p2' },
      { type: 'list', items: ['ce_l1_i1', 'ce_l1_i2', 'ce_l1_i3', 'ce_l1_i4'] },
      { type: 'heading', text: 'ce_h2' },
      { type: 'paragraph', text: 'ce_p3' },
      { type: 'stats', items: [
        {value: 'ce_s1_v', label: 'ce_s1_l'},
        {value: 'ce_s2_v', label: 'ce_s2_l'},
        {value: 'ce_s3_v', label: 'ce_s3_l'},
      ]},
      { type: 'heading', text: 'ce_h3' },
      { type: 'paragraph', text: 'ce_p4' },
      { type: 'cta', props: {
        title: 'blog_cta_title', desc: 'blog_cta_desc', button1Text: 'blog_cta_button1', button1Link: '/contact', button2Text: 'blog_cta_button2', button2Link: '/our-process'
      }}
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
