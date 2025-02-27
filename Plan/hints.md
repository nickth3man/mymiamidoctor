# Development Hints for Dr. Gafanovich's Website

This document contains helpful information and tips for completing the website implementation, with a focus on Next.js and Tailwind CSS integration.

## Tailwind CSS Setup with Next.js

### Standard Installation Process

1. **Install Tailwind CSS and its dependencies**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

2. **Configure Tailwind CSS** in `tailwind.config.js`:
   ```javascript
   module.exports = {
     content: [
       './app/**/*.{js,ts,jsx,tsx}',
       './pages/**/*.{js,ts,jsx,tsx}',
       './components/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {
         // Your custom theme extensions
       },
     },
     plugins: [],
   }
   ```

3. **Set up the CSS imports** in your globals.css file:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Current Project Configuration

Based on the current configuration, make sure:
- Your `postcss.config.mjs` properly includes the Tailwind plugin
- Your global CSS file correctly imports Tailwind's layers
- The content paths in `tailwind.config.js` match your project structure (App Router format)

## Design System Implementation

### Using the "Vibrant Miami Energy" Theme

As specified in the project requirements, implement the following from `05-tailwind-implementation.md`:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#00A8E8', // Tropical Aqua
        'secondary': '#FF4F70', // Sunset Pink
        'accent': '#F4E1C1', // Warm Sand
        'navy': '#002D62', // Deep Navy
      },
      fontFamily: {
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
      },
      borderRadius: {
        'button': '9999px', // Pill-shaped
      }
    }
  }
}
```

## Common Components for Medical Websites

### Hero Section
```html
<section class="py-12 md:py-20 px-4 bg-gradient-to-r from-primary/10 to-accent/30">
  <div class="container mx-auto">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 class="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 text-primary">
          Dr. Marina Gafanovich, MD – Your Personal Physician
        </h1>
        <p class="text-lg mb-6">
          Experience personalized, attentive healthcare from the comfort of your home.
        </p>
        <button class="bg-primary hover:bg-primary/80 text-white font-body font-bold py-3 px-6 rounded-button transition duration-300 shadow hover:shadow-md">
          Book an Appointment
        </button>
      </div>
      
      <div class="bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center p-8 rounded h-80 md:h-96">
        <p class="text-gray-700 text-center font-body">
          [PHOTO: Dr. Marina Gafanovich professional headshot]
          <span class="block mt-2 text-sm">Image coming soon</span>
        </p>
      </div>
    </div>
  </div>
</section>
```

### Service Cards
```html
<div class="bg-white p-6 rounded-lg shadow-md border border-accent hover:shadow-lg transition duration-300">
  <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
    <p class="text-primary">[ICON]</p>
  </div>
  <h3 class="font-heading text-xl mb-3 text-center text-primary">Service Name</h3>
  <p class="mb-4">Service description that highlights benefits to patients.</p>
  <a href="#" class="inline-block text-secondary font-semibold hover:underline">Learn more →</a>
</div>
```

### Telehealth Process Steps
```html
<div class="grid md:grid-cols-3 gap-8">
  <!-- Step 1 -->
  <div class="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-primary">
    <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
      <p class="text-primary font-bold text-2xl">1</p>
    </div>
    <h3 class="font-heading text-lg mb-2">Book Your Appointment</h3>
    <p>Choose a time that works for your schedule.</p>
  </div>
  
  <!-- Step 2 -->
  <div class="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-primary">
    <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
      <p class="text-primary font-bold text-2xl">2</p>
    </div>
    <h3 class="font-heading text-lg mb-2">Connect From Anywhere</h3>
    <p>Join your video visit using your phone, tablet, or computer.</p>
  </div>
  
  <!-- Step 3 -->
  <div class="text-center p-6 bg-white rounded-lg shadow-md border-t-4 border-primary">
    <div class="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
      <p class="text-primary font-bold text-2xl">3</p>
    </div>
    <h3 class="font-heading text-lg mb-2">Get Personalized Care</h3>
    <p>Discuss your health concerns, get a diagnosis, and receive a treatment plan.</p>
  </div>
</div>
```

### Contact Form
```html
<form class="space-y-6 bg-white p-8 rounded-lg shadow-md">
  <div>
    <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
    <input type="text" id="name" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" required />
  </div>
  
  <div>
    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
    <input type="email" id="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" required />
  </div>
  
  <div>
    <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
    <input type="tel" id="phone" name="phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" />
  </div>
  
  <div>
    <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
    <textarea id="message" name="message" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary" required></textarea>
  </div>
  
  <div class="pt-2">
    <button type="submit" class="w-full bg-primary hover:bg-primary/80 text-white font-bold py-3 px-6 rounded-button transition duration-300">Send Message</button>
  </div>
</form>
```

## Header and Navigation

```html
<header class="bg-white shadow-md">
  <div class="container mx-auto px-4">
    <div class="flex justify-between items-center py-4">
      <!-- Logo Placeholder -->
      <div class="flex items-center">
        <div class="w-10 h-10 bg-primary rounded-full mr-2"></div>
        <span class="font-heading text-xl font-bold text-primary">Dr. Gafanovich</span>
      </div>
      
      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a href="/" class="font-body text-gray-700 hover:text-primary transition">Home</a>
        <a href="/about" class="font-body text-gray-700 hover:text-primary transition">About</a>
        <a href="/services" class="font-body text-gray-700 hover:text-primary transition">Services</a>
        <a href="/telehealth" class="font-body text-gray-700 hover:text-primary transition">Telehealth</a>
        <a href="/contact" class="font-body text-gray-700 hover:text-primary transition">Contact</a>
        <a href="#" class="font-body text-white bg-secondary px-4 py-2 rounded-button hover:bg-secondary/80 transition">Patient Portal</a>
      </nav>
      
      <!-- Mobile Menu Button -->
      <button class="md:hidden text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </div>
  
  <!-- Mobile Navigation (hidden by default) -->
  <div class="hidden md:hidden px-4 py-2 bg-gray-50">
    <div class="flex flex-col space-y-3 pb-3">
      <a href="/" class="font-body text-gray-700 hover:text-primary transition">Home</a>
      <a href="/about" class="font-body text-gray-700 hover:text-primary transition">About</a>
      <a href="/services" class="font-body text-gray-700 hover:text-primary transition">Services</a>
      <a href="/telehealth" class="font-body text-gray-700 hover:text-primary transition">Telehealth</a>
      <a href="/contact" class="font-body text-gray-700 hover:text-primary transition">Contact</a>
      <a href="#" class="font-body text-white bg-secondary px-4 py-2 rounded-button hover:bg-secondary/80 transition text-center">Patient Portal</a>
    </div>
  </div>
</header>
```

## Optimization Tips

1. **Use Next.js Image Component** for optimized images once available:
   ```jsx
   import Image from 'next/image';
   
   // In your component
   <Image 
     src="/path/to/image.jpg" 
     alt="Description"
     width={500} 
     height={300} 
     priority 
   />
   ```

2. **Implement Responsive Design** using Tailwind's breakpoint modifiers:
   - `sm:` (640px and up)
   - `md:` (768px and up)
   - `lg:` (1024px and up)
   - `xl:` (1280px and up)
   - `2xl:` (1536px and up)

3. **Organize Components** for reusability:
   - Create a components folder to store reusable UI elements
   - Implement a consistent pattern for prop typing with TypeScript

4. **Performance Considerations**:
   - Use `next/font` for optimized font loading
   - Implement code splitting with dynamic imports where appropriate
   - Consider server components for data-fetching portions of the site

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS with Next.js Guide](https://tailwindcss.com/docs/guides/nextjs)