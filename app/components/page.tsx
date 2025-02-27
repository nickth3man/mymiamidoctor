import { ButtonExample } from '@/components/examples/ButtonExample';

export const metadata = {
  title: 'Components - MyMiamiDoctor',
  description: 'Explore our UI components library for MyMiamiDoctor website',
};

export default function ComponentsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-navy mb-8">UI Components</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-navy mb-6">Button Component</h2>
          <p className="text-lg mb-6">
            The Button component is a versatile UI element that supports various styles,
            sizes, states, and can function as both a button and a link.
          </p>
          
          <ButtonExample />
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-bold text-navy mb-4">Accessibility Features</h3>
          <p className="mb-4">Our Button component implements the following accessibility features:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Proper focus states with visible focus rings</li>
            <li>ARIA attributes for screen readers</li>
            <li>Keyboard navigation support</li>
            <li>Loading state announcements for screen readers</li>
            <li>Disabled state handling for both buttons and links</li>
            <li>Color contrast that meets WCAG standards</li>
          </ul>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-navy mb-4">Implementation</h3>
          <p className="mb-4">
            The Button component is built with React and TypeScript, using Tailwind CSS
            for styling. It supports both regular buttons and link buttons (using Next.js Link).
          </p>
          
          <p className="text-sm text-navy/70">
            See the component code in: <code className="bg-gray-100 px-2 py-1 rounded">components/ui/Button.tsx</code>
          </p>
        </section>
      </div>
    </div>
  );
} 