import React from 'react';
import { Heading, Text, Container, Grid, Button, Card, CardHeader, CardBody, CardFooter, Image } from '@/components';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Health Blog | Dr. Marina Gafanovich | Miami Primary Care",
  description: "Read the latest health articles and medical advice from Dr. Marina Gafanovich, covering preventive care, chronic disease management, and wellness tips.",
  keywords: "health blog, medical articles, Miami doctor blog, preventive care, wellness tips, Dr. Gafanovich blog",
};

// Mock data for blog posts
const featuredPost = {
  id: 'preventive-care-2023',
  title: 'The Importance of Preventive Care in 2023',
  excerpt: 'Learn why preventive care is more important than ever and how it can help you maintain optimal health throughout the year.',
  date: 'January 15, 2023',
  category: 'Preventive Care',
  image: '/images/blog/preventive-care.jpg',
  author: 'Dr. Marina Gafanovich'
};

const recentPosts = [
  {
    id: 'managing-diabetes',
    title: 'New Approaches to Managing Diabetes',
    excerpt: 'Discover the latest approaches and technologies for managing diabetes effectively.',
    date: 'December 10, 2022',
    category: 'Chronic Disease Management',
    image: '/images/blog/diabetes-management.jpg',
    author: 'Dr. Marina Gafanovich'
  },
  {
    id: 'telehealth-benefits',
    title: 'The Benefits of Telehealth for Busy Professionals',
    excerpt: 'How telehealth services can provide convenient healthcare access for those with busy schedules.',
    date: 'November 28, 2022',
    category: 'Telehealth',
    image: '/images/blog/telehealth-benefits.jpg',
    author: 'Dr. Marina Gafanovich'
  },
  {
    id: 'flu-season-preparation',
    title: 'Preparing for Flu Season: What You Need to Know',
    excerpt: 'Essential tips to help you and your family stay healthy during flu season.',
    date: 'October 15, 2022',
    category: 'Seasonal Health',
    image: '/images/blog/flu-season.jpg',
    author: 'Dr. Marina Gafanovich'
  },
  {
    id: 'heart-health-tips',
    title: '5 Simple Habits for Better Heart Health',
    excerpt: 'Incorporate these five simple habits into your daily routine to improve your heart health.',
    date: 'September 22, 2022',
    category: 'Heart Health',
    image: '/images/blog/heart-health.jpg',
    author: 'Dr. Marina Gafanovich'
  },
  {
    id: 'stress-management',
    title: 'Effective Stress Management Techniques',
    excerpt: 'Learn practical techniques to manage stress and improve your overall wellbeing.',
    date: 'August 17, 2022',
    category: 'Mental Health',
    image: '/images/blog/stress-management.jpg',
    author: 'Dr. Marina Gafanovich'
  },
  {
    id: 'nutrition-myths',
    title: 'Common Nutrition Myths Debunked',
    excerpt: 'Separating fact from fiction: Dr. Gafanovich addresses common misconceptions about nutrition.',
    date: 'July 30, 2022',
    category: 'Nutrition',
    image: '/images/blog/nutrition-myths.jpg',
    author: 'Dr. Marina Gafanovich'
  }
];

// Available categories for filtering
const categories = [
  'All Posts',
  'Preventive Care',
  'Chronic Disease Management',
  'Telehealth',
  'Seasonal Health',
  'Heart Health',
  'Mental Health',
  'Nutrition'
];

export default function BlogPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary/10 to-accent/30">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Heading level={1}>
              Health Insights & Medical Advice
              <span className="block text-primary mt-2">The MyMiamiDoctor Blog</span>
            </Heading>
            <Text className="mt-4 text-lg">
              Expert articles and health tips from Dr. Marina Gafanovich to help you and your family maintain optimal health.
            </Text>
          </div>
        </Container>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 bg-white">
        <Container>
          <Heading level={2} className="mb-8">Featured Article</Heading>
          <div className="bg-light rounded-xl overflow-hidden shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={800}
                  height={600}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="ml-4 text-sm text-gray-600">{featuredPost.date}</span>
                </div>
                <Heading level={3} className="mb-4">{featuredPost.title}</Heading>
                <Text className="mb-6">{featuredPost.excerpt}</Text>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary font-bold">MG</span>
                    </div>
                    <span className="text-sm font-medium">{featuredPost.author}</span>
                  </div>
                  <Link href={`/blog/${featuredPost.id}`} className="btn btn-primary">
                    Read Article
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-light">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All Posts'
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-primary/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 bg-white">
        <Container>
          <Heading level={2} className="mb-8">Recent Articles</Heading>
          <Grid columns={3} gap="md">
            {recentPosts.map((post) => (
              <Card key={post.id} className="h-full">
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="object-cover h-full w-full rounded-t-xl"
                  />
                </div>
                <CardBody>
                  <div className="flex items-center mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="ml-3 text-xs text-gray-600">{post.date}</span>
                  </div>
                  <Heading level={4} className="mb-2">{post.title}</Heading>
                  <Text className="text-sm mb-4">{post.excerpt}</Text>
                </CardBody>
                <CardFooter>
                  <Link href={`/blog/${post.id}`} className="text-primary font-medium hover:underline">
                    Read More →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </Grid>
          
          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-light">
                <span className="sr-only">Previous page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-light">2</button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-light">3</button>
              <span className="mx-1">...</span>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-light">8</button>
              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-light">
                <span className="sr-only">Next page</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/30">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Heading level={2} className="mb-4">Stay Updated with Health Tips</Heading>
            <Text className="mb-8">
              Subscribe to our newsletter to receive the latest health articles, tips, and updates from Dr. Gafanovich.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-button border-0 shadow-sm focus:ring-2 focus:ring-primary/50 flex-grow max-w-md"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 