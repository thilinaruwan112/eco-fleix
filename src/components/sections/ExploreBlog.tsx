import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'shredded hard drives',
    title: 'Complete Guide to Secure Data Destruction',
    description: 'Learn industry-standard methods for ensuring your sensitive data is completely destroyed during e-waste disposal.',
    author: 'Mike Johnson',
    authorAiHint: 'man portrait',
    date: 'Mar 10, 2025',
    readTime: '6 min',
    category: 'Data Security',
    categoryColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
  },
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'office computers',
    title: 'Corporate IT Asset Disposal Best Practices',
    description: 'Maximize value recovery while ensuring compliance and security in your corporate IT asset disposal program.',
    author: 'Lisa Chen',
    authorAiHint: 'woman portrait',
    date: 'Mar 8, 2025',
    readTime: '5 min',
    category: 'IT Disposal',
    categoryColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
  },
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'recycling symbol monitor',
    title: 'Environmental Impact of E-Waste Recycling',
    description: 'Understand how proper e-waste recycling contributes to environmental conservation and circular economy principles.',
    author: 'Emma Wilson',
    authorAiHint: 'woman portrait',
    date: 'Mar 5, 2025',
    readTime: '7 min',
    category: 'Sustainability',
    categoryColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
  },
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'compliance documents',
    title: 'UAE E-Waste Regulations: What Businesses Need to Know',
    description: 'Navigate the regulatory landscape and ensure your business stays compliant with UAE e-waste disposal requirements.',
    author: 'Ahmed Al-Rashid',
    authorAiHint: 'man portrait',
    date: 'Mar 3, 2025',
    readTime: '8 min',
    category: 'Compliance',
    categoryColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
  },
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'old mobile phones',
    title: 'How to Prepare Your Devices for E-Waste Recycling',
    description: 'Step-by-step guide for consumers to safely prepare smartphones, laptops, and other devices for recycling.',
    author: 'Fatima Hassan',
    authorAiHint: 'woman portrait',
    date: 'Mar 1, 2025',
    readTime: '5 min',
    category: 'Consumer Guide',
    categoryColor: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
  },
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'circular economy diagram',
    title: 'The Role of E-Waste in the Circular Economy',
    description: 'Discover how recycling electronics plays a crucial role in creating a sustainable, circular economic model.',
    author: 'David Lee',
    authorAiHint: 'man portrait',
    date: 'Feb 28, 2025',
    readTime: '6 min',
    category: 'Economy',
    categoryColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
  },
];


const ExploreBlog = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            All Articles
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Explore our collection of insights and guides on e-waste management.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {blogPosts.map((post) => (
            <div key={post.title} className="flex flex-col group">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={post.aiHint}
                />
              </div>
              <Badge className={`${post.categoryColor} self-start border-transparent mb-2`}>{post.category}</Badge>
              <h3 className="text-xl font-bold text-foreground mb-2 flex-grow">
                <a href="#" className="hover:text-primary transition-colors">{post.title}</a>
              </h3>
              <p className="text-muted-foreground text-sm mb-4 ">{post.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`https://placehold.co/40x40.png`} alt={post.author} data-ai-hint={post.authorAiHint} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-semibold text-foreground">{post.author}</span>
                      <p>{post.date} • {post.readTime}</p>
                    </div>
                </div>
                 <a href="#" className="flex items-center gap-1 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreBlog;
