import React from 'react';
import { Heading, Text, Container, Button, Image } from '../../../components';
import Link from 'next/link';
import type { Metadata } from 'next';

// This would normally come from a CMS or API
const getBlogPost = (slug: string) => {
  // Mock data for demonstration
  const posts = {
    'preventive-care-2023': {
      title: 'The Importance of Preventive Care in 2023',
      date: 'January 15, 2023',
      author: 'Dr. Marina Gafanovich',
      category: 'Preventive Care',
      image: '/images/blog/preventive-care.jpg',
      content: `
        <p>Preventive care has always been a cornerstone of good health, but in 2023, it's more important than ever. As we continue to navigate the post-pandemic world, taking proactive steps to maintain your health can help you avoid serious illnesses and catch potential problems early.</p>
        
        <h2>What is Preventive Care?</h2>
        
        <p>Preventive care includes medical services like check-ups, screenings, and vaccinations that help prevent illnesses, disease, and other health problems. It also involves making healthy lifestyle choices and taking steps to manage existing health conditions before they become more serious.</p>
        
        <p>Some examples of preventive care include:</p>
        
        <ul>
          <li>Annual physical examinations</li>
          <li>Blood pressure, diabetes, and cholesterol tests</li>
          <li>Cancer screenings</li>
          <li>Vaccinations</li>
          <li>Counseling on topics like quitting smoking or losing weight</li>
        </ul>
        
        <h2>Why Preventive Care Matters in 2023</h2>
        
        <p>The COVID-19 pandemic led many people to delay routine medical care. As a result, healthcare providers are now seeing patients with more advanced conditions that could have been caught earlier. By prioritizing preventive care now, you can:</p>
        
        <ul>
          <li>Catch up on missed screenings and vaccinations</li>
          <li>Identify health issues before they become more serious</li>
          <li>Reduce your risk of developing chronic conditions</li>
          <li>Lower your healthcare costs in the long run</li>
        </ul>
        
        <h2>Preventive Care Recommendations by Age</h2>
        
        <p>Different preventive care measures are recommended at different ages. Here are some general guidelines:</p>
        
        <h3>For Adults in Their 20s and 30s:</h3>
        
        <ul>
          <li>Annual physical exam</li>
          <li>Blood pressure screening</li>
          <li>Cholesterol screening every 5 years</li>
          <li>Skin cancer screening</li>
          <li>STI screening as needed</li>
        </ul>
        
        <h3>For Adults in Their 40s and 50s:</h3>
        
        <ul>
          <li>All of the above, plus:</li>
          <li>Mammogram (for women, starting at age 40-50 depending on risk factors)</li>
          <li>Colorectal cancer screening (starting at age 45)</li>
          <li>Prostate cancer screening (for men, discuss with your doctor)</li>
          <li>Diabetes screening</li>
        </ul>
        
        <h3>For Adults 60 and Older:</h3>
        
        <ul>
          <li>All of the above, plus:</li>
          <li>Bone density test</li>
          <li>Hearing and vision tests</li>
          <li>Pneumonia and shingles vaccines</li>
          <li>Fall risk assessment</li>
        </ul>
        
        <h2>Making Preventive Care a Priority</h2>
        
        <p>Here are some tips for making preventive care a priority in your life:</p>
        
        <ol>
          <li><strong>Schedule your annual check-up.</strong> If you haven't had a physical in over a year, call your doctor to schedule one.</li>
          <li><strong>Know your family history.</strong> Some health conditions run in families, so knowing your family history can help your doctor determine which screenings you might need.</li>
          <li><strong>Stay up-to-date on vaccinations.</strong> Vaccines aren't just for children – adults need them too.</li>
          <li><strong>Make healthy lifestyle choices.</strong> Eat a balanced diet, exercise regularly, get enough sleep, and avoid tobacco and excessive alcohol.</li>
          <li><strong>Listen to your body.</strong> If something doesn't feel right, don't ignore it. Contact your healthcare provider.</li>
        </ol>
        
        <h2>Conclusion</h2>
        
        <p>Preventive care is an investment in your future health. By taking steps now to prevent illness and detect potential health problems early, you can enjoy better health and quality of life for years to come. If you have questions about which preventive care measures are right for you, don't hesitate to contact our office to schedule a consultation.</p>
      `,
      relatedPosts: [
        'managing-diabetes',
        'heart-health-tips',
        'flu-season-preparation'
      ]
    },
    // Other posts would be defined here
  };
  
  return posts[slug as keyof typeof posts];
};

// This would be replaced with dynamic metadata generation in a real app
export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | MyMiamiDoctor',
      description: 'The requested blog post could not be found.'
    };
  }
  
  return {
    title: `${post.title} | Dr. Marina Gafanovich | Miami Primary Care`,
    description: `Read Dr. Gafanovich's insights on ${post.title.toLowerCase()}. Expert medical advice from a trusted Miami physician.`,
    keywords: `${post.category}, health article, medical advice, Dr. Gafanovich, Miami doctor`,
  };
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return (
      <Container>
        <div className="py-20 text-center">
          <Heading level={1}>Blog Post Not Found</Heading>
          <Text className="mt-4 mb-8">The blog post you're looking for doesn't exist or has been moved.</Text>
          <Link href="/blog" className="btn btn-primary">
            Return to Blog
          </Link>
        </div>
      </Container>
    );
  }
  
  // Mock related posts data
  const relatedPostsData = [
    {
      id: 'managing-diabetes',
      title: 'New Approaches to Managing Diabetes',
      category: 'Chronic Disease Management',
      image: '/images/blog/diabetes-management.jpg',
    },
    {
      id: 'heart-health-tips',
      title: '5 Simple Habits for Better Heart Health',
      category: 'Heart Health',
      image: '/images/blog/heart-health.jpg',
    },
    {
      id: 'flu-season-preparation',
      title: 'Preparing for Flu Season: What You Need to Know',
      category: 'Seasonal Health',
      image: '/images/blog/flu-season.jpg',
    }
  ];
  
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-primary/10 to-accent/30">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-4">
              <Link href="/blog" className="text-primary hover:underline flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Blog
              </Link>
              <span className="mx-2 text-gray-400">|</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <Heading level={1} className="mb-4">{post.title}</Heading>
            <div className="flex items-center mt-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <span className="text-primary font-bold">MG</span>
              </div>
              <div>
                <span className="block text-sm font-medium">{post.author}</span>
                <span className="text-sm text-gray-600">{post.date}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Featured Image */}
      <div className="relative h-96 w-full">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
      
      {/* Article Content */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              {/* Share Links */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Heading level={4} className="mb-4">Share This Article</Heading>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">
                    <span className="sr-only">Share on Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center hover:bg-blue-500">
                    <span className="sr-only">Share on Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center hover:bg-green-700">
                    <span className="sr-only">Share on WhatsApp</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M21.11 2.89A12.91 12.91 0 0012 0 12.91 12.91 0 002.89 2.89 12.91 12.91 0 000 12c0 2.25.58 4.35 1.58 6.17L0 24l6.05-1.58A12.88 12.88 0 0012 24c6.93 0 12-5.07 12-12 0-3.45-1.05-6.48-2.89-8.11zM12 21.6c-1.88 0-3.68-.47-5.27-1.42l-.41-.23-4.1 1.08 1.08-4.1-.23-.41A9.6 9.6 0 012.4 12a9.6 9.6 0 019.6-9.6 9.6 9.6 0 019.6 9.6 9.6 9.6 0 01-9.6 9.6zm5.78-7.18c-.3-.15-1.77-.87-2.05-1-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.67-2.1-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.23-.24-.6-.48-.52-.65-.53h-.56c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.16 5.1 4.43.7.3 1.25.5 1.68.63.7.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800">
                    <span className="sr-only">Share on LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300">
                    <span className="sr-only">Copy Link</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-24">
                {/* Author Bio */}
                <div className="bg-light rounded-xl p-6 mb-8">
                  <Heading level={4} className="mb-4">About the Author</Heading>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                      <span className="text-primary font-bold text-xl">MG</span>
                    </div>
                    <div>
                      <span className="block font-bold">{post.author}</span>
                      <span className="text-sm text-gray-600">Board Certified Physician</span>
                    </div>
                  </div>
                  <Text className="text-sm">
                    Dr. Marina Gafanovich is a board-certified primary care physician providing exceptional healthcare to the Miami community. With a passion for preventive medicine and patient education, Dr. Gafanovich is dedicated to helping her patients achieve optimal health and wellness.
                  </Text>
                  <Link href="/about" className="text-primary hover:underline text-sm font-medium mt-2 inline-block">
                    Read Full Bio
                  </Link>
                </div>
                
                {/* Related Posts */}
                <div className="bg-light rounded-xl p-6">
                  <Heading level={4} className="mb-4">Related Articles</Heading>
                  <div className="space-y-4">
                    {relatedPostsData.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex items-start">
                        <div className="w-20 h-20 flex-shrink-0 rounded overflow-hidden mr-3">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <Link href={`/blog/${relatedPost.id}`} className="font-medium hover:text-primary">
                            {relatedPost.title}
                          </Link>
                          <span className="block text-xs text-primary mt-1">{relatedPost.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/30">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <Heading level={2} className="mb-4">Have Questions About Your Health?</Heading>
            <Text className="mb-8">
              Schedule a consultation with Dr. Gafanovich to discuss your health concerns and receive personalized care.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary">
                Book an Appointment
              </Link>
              <Link href="/telehealth" className="btn btn-outline">
                Learn About Telehealth
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
} 