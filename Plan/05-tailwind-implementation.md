# Tailwind CSS Implementation Guidance

## Setup and Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Vibrant Miami Energy color scheme (selected)
        'primary': '#00A8E8', // Tropical Aqua
        'secondary': '#FF4F70', // Sunset Pink
        'accent': '#F4E1C1', // Warm Sand
        'navy': '#002D62', // Deep Navy
      },
      fontFamily: {
        // Vibrant Miami Energy typography (selected)
        'heading': ['Montserrat', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif'],
      },
      borderRadius: {
        // Vibrant Miami Energy styling (selected)
        'button': '9999px', // Pill-shaped
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['hover', 'active'],
      textColor: ['hover', 'active'],
      borderColor: ['hover', 'focus'],
      transform: ['hover'],
    }
  },
  plugins: [],
}
```

## Component Examples

### Placeholder Images

```html
<!-- Image Placeholder Component -->
<div class="bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center p-4 rounded">
  <p class="text-gray-700 text-center font-body">
    [PHOTO: Dr. Marina Gafanovich professional headshot]
    <span class="block mt-2 text-sm">Image coming soon</span>
  </p>
</div>
```

### Primary Button

```html
<!-- Primary CTA Button -->
<button class="bg-primary hover:bg-primary-dark text-white font-body font-bold py-3 px-6 rounded-button transition duration-300 shadow hover:shadow-md">
  Book an Appointment
</button>
```

### Service Card

```html
<!-- Service Card Component -->
<div class="bg-white p-6 rounded-lg shadow-md border border-accent">
  <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4 mx-auto">
    <p class="text-gray-700 text-sm">[ICON: Heart/BP]</p>
  </div>
  <h3 class="font-heading text-xl mb-3 text-center text-primary">Chronic Disease Management</h3>
  <ul class="space-y-2">
    <li class="flex items-start">
      <span class="text-primary mr-2">✓</span>
      <span>High blood pressure</span>
    </li>
    <li class="flex items-start">
      <span class="text-primary mr-2">✓</span>
      <span>Diabetes</span>
    </li>
    <!-- Additional list items -->
  </ul>
</div>
```

### Testimonial Component

```html
<!-- Testimonial Component -->
<div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
  <div class="flex text-secondary mb-2">★★★★★</div>
  <p class="italic mb-4">"Dr. Gafanovich is an exceptional doctor who takes the time to listen to my concerns. Her telehealth visits are convenient and thorough."</p>
  <p class="font-semibold">Sarah M.</p>
</div>
```

### Three-Step Process

```html
<!-- Three-Step Process Component -->
<div class="grid md:grid-cols-3 gap-8">
  <!-- Step 1 -->
  <div class="text-center">
    <div class="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
      <p class="text-gray-700">[ICON: Calendar]</p>
    </div>
    <h3 class="font-heading text-lg mb-2">Step 1</h3>
    <p>Book your appointment – Choose a time that works for you.</p>
  </div>
  
  <!-- Step 2 -->
  <div class="text-center">
    <div class="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
      <p class="text-gray-700">[ICON: Device/Computer]</p>
    </div>
    <h3 class="font-heading text-lg mb-2">Step 2</h3>
    <p>Connect from anywhere – Join your video visit using your phone, tablet, or computer.</p>
  </div>
  
  <!-- Step 3 -->
  <div class="text-center">
    <div class="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-4">
      <p class="text-gray-700">[ICON: Doctor/Consultation]</p>
    </div>
    <h3 class="font-heading text-lg mb-2">Step 3</h3>
    <p>Get personalized care – Discuss your health concerns, get a diagnosis, and receive a treatment plan—all without leaving home.</p>
  </div>
</div>
```

## Responsive Utilities

```html
<!-- Responsive Hero Section Example -->
<section class="py-12 md:py-20 px-4">
  <div class="container mx-auto">
    <div class="grid md:grid-cols-2 gap-8 items-center">
      <!-- Text Content -->
      <div>
        <h1 class="font-heading text-3xl md:text-4xl lg:text-5xl mb-4 text-primary">
          Dr. Marina Gafanovich, MD – Your Personal Physician, Anytime, Anywhere
        </h1>
        <p class="text-lg mb-6">
          Experience personalized, attentive healthcare from the comfort of your home.
        </p>
        <button class="bg-primary hover:bg-primary-dark text-white font-body font-bold py-3 px-6 rounded-button transition duration-300 shadow hover:shadow-md">
          Book an Appointment
        </button>
      </div>
      
      <!-- Image Placeholder -->
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