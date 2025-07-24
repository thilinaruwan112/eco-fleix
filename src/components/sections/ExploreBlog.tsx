import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
  },
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'compliance documents',
    category: 'Compliance',
    categoryColor: 'bg-red-500',
    title: 'UAE E-Waste Regulations: What Businesses Need to Know',
    description: 'Navigate the regulatory landscape and ensure your business stays compliant with UAE e-waste disposal requirements.',
    author: 'Ahmed Al-Rashid',
    authorAiHint: 'man portrait',
    date: 'Mar 3, 2025',
    readTime: '8 min',
  },
  {
    image: 'https://placehold.co/600x400.png',
    aiHint: 'old mobile phones',
    category: 'Consumer Guide',
    categoryColor: 'bg-orange-500',
    title: 'How to Prepare Your Devices for E-Waste Recycling',
    description: 'Step-by-step guide for consumers to safely prepare smartphones, laptops, and other devices for recycling.',
    author: 'Fatima Hassan',
    authorAiHint: 'woman portrait',
    date: 'Mar 1, 2025',
    readTime: '5 min',
  },
];

const ExploreBlog = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <Button variant="outline" className="rounded-full mb-4">All Articles</Button>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            EXPLORE OUR BLOG
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Expert insights and practical guidance for sustainable e-waste management
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={post.aiHint}
                />
                {post.category && (
                  <Badge className={`absolute top-4 right-4 text-white ${post.categoryColor}`}>{post.category}</Badge>
                )}
              </div>
              <CardContent className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-foreground mb-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={`https://placehold.co/40x40.png`} alt={post.author} data-ai-hint={post.authorAiHint} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <a href="#" className="text-primary font-semibold hover:underline text-sm">
                  Read More
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreBlog;