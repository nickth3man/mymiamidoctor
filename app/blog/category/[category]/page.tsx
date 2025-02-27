import React from 'react';
import { Heading, Text, Container, Grid, Card, CardBody, CardFooter, Image } from '@/components';
import Link from 'next/link';
import type { Metadata } from 'next';

// This would normally come from a CMS or API
const getCategoryPosts = (category: string) => {
  // Mock data for demonstration
  const allPosts = [
    {
      id: 'preventive-care-2023',
      title: 'The Importance of Preventive Care in 2023',
      excerpt: 'Learn why preventive care is more important than ever and how it can help you maintain optimal health throughout the year.',
      date: 'January 15, 2023',
      category: 'Preventive Care',
      image: '/images/blog/preventive-care.jpg',
      author: 'Dr. Marina Gafanovich'
    },
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
    },
    {
      id: 'preventive-screenings',
      title: 'Preventive Screenings Every Adult Should Consider',
      excerpt: 'A guide to the essential preventive screenings that can help detect health issues early.',
      date: 'June 15, 2022',
      category: 'Preventive Care',
      image: '/images/blog/preventive-screenings.jpg',
      author: 'Dr. Marina Gafanovich'
    },
    {
      id: 'hypertension-management',
      title: 'Managing Hypertension: Beyond Medication',
      excerpt: 'Lifestyle changes and strategies to help manage high blood pressure effectively.',
      date: 'May 22, 2022',
      category: 'Chronic Disease Management',
      image: '/images/blog/hypertension.jpg',
      author: 'Dr. Marina Gafanovich'
    }
  ];
  
  // Filter posts by category or return all if category is "all"
  return category.toLowerCase() === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category.toLowerCase() === category.toLowerCase());
};

// Available categories for filtering
const categories = [
  'All',
  'Preventive Care',
  'Chronic Disease Management',
  'Telehealth',
  'Seasonal Health',
  'Heart Health',
  'Mental Health',
  'Nutrition'
];

// This would be replaced with dynamic metadata generation in a real app
export const generateMetadata = ({ params }: { params: { category: string } }): Metadata => {
  const categoryName = decodeURIComponent(params.category);
  const formattedCategory = categoryName === 'all' 
    ? 'All Health Topics' 
    : categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  
  return {
    title: `${formattedCategory} Articles | Dr. Marina Gafanovich | Miami Primary Care`,
    description: `Read Dr. Gafanovich's insights on ${formattedCategory.toLowerCase()} topics. Expert medical advice from a trusted Miami physician.`,
    keywords: `${categoryName}, health articles, medical advice, Dr. Gafanovich, Miami doctor`,
  };
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = decodeURIComponent(params.category);
  const formattedCategory = categoryName === 'all' 
    ? 'All Health Topics' 
    : categoryName;
  
  const posts = getCategoryPosts(categoryName);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 to-accent/30">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Link href="/blog" className="text-primary hover:underline flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Articles
              </Link>
            </div>
            <Heading level={1}>
              {formattedCategory}
              <span className="block text-primary mt-2">Health Articles</span>
            </Heading>
            <Text className="mt-4 text-lg">
              {categoryName === 'all' 
                ? 'Browse all health articles and medical advice from Dr. Marina Gafanovich.'
                : `Browse articles about ${formattedCategory.toLowerCase()} from Dr. Marina Gafanovich.`}
            </Text>
          </div>
        </Container>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-light">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog/category/${category.toLowerCase() === 'all' ? 'all' : category}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category.toLowerCase() === categoryName.toLowerCase()
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-primary/10'
                }`}
              >
                {category}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Posts Grid */}
      <section className="py-16 bg-white">
        <Container>
          {posts.length > 0 ? (
            <>
              <Grid columns={3} gap="md">
                {posts.map((post) => (
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
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-light">
                    <span className="sr-only">Next page</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="py-12 text-center">
              <Heading level={2} className="mb-4">No Articles Found</Heading>
              <Text className="mb-8">
                There are currently no articles in the {formattedCategory} category.
              </Text>
              <Link href="/blog" className="btn btn-primary">
                View All Articles
              </Link>
            </div>
          )}
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
              <button className="bg-primary hover:bg-primary/90 text-white font-body font-bold py-3 px-8 rounded-button transition duration-300 shadow hover:shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 