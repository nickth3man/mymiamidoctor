# MyMiamiDoctor Website

A modern, responsive website for Dr. Marina Gafanovich's medical practice in Miami, built with Next.js, React, and Tailwind CSS.

## Project Overview

This website serves as the online presence for MyMiamiDoctor, providing information about medical services, telehealth options, insurance coverage, and patient portal access. The site is designed to be fully responsive, accessible, and user-friendly.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

## Project Structure

```
mymiamidoctor/
├── app/                    # Next.js app router pages
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── form-example/       # Form components example page
│   ├── insurance/          # Insurance information page
│   ├── layout-example/     # Layout components example page
│   ├── patient-portal/     # Patient portal page
│   ├── services/           # Services page
│   ├── telehealth/         # Telehealth page
│   ├── typography-example/ # Typography components example page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Homepage
├── components/             # Reusable components
│   ├── form/               # Form components
│   ├── layout/             # Layout components
│   ├── ui/                 # UI components
│   └── index.ts            # Component exports
├── public/                 # Static assets
└── tailwind.config.js      # Tailwind configuration
```

## Component Library

The website includes a comprehensive component library organized into several categories:

### UI Components

- **Typography**: `Heading`, `Text`, `Link`
- **Buttons**: `Button`
- **Cards**: `Card`, `CardHeader`, `CardBody`, `CardFooter`
- **Media**: `Image`, `Icon`

### Form Components

- **Inputs**: `TextField`, `TextArea`, `Select`, `Checkbox`, `Radio`, `Switch`
- **Form Structure**: `Form`, `FormGroup`, `FormLabel`, `FormError`

### Layout Components

- **Structure**: `Container`, `Grid`, `Flex`, `Section`
- **Navigation**: `Header`, `Footer`

## Example Pages

The project includes example pages that showcase the various components:

- **Typography Example**: Demonstrates text styles, headings, and typography components
- **Form Example**: Showcases form components and their usage
- **Layout Example**: Illustrates layout components and responsive design patterns

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mymiamidoctor.git
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Accessibility

This website is built with accessibility in mind, following WCAG 2.1 guidelines. All components are designed to be accessible, with proper ARIA attributes, keyboard navigation, and screen reader support.

## Browser Support

The website supports all modern browsers, including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential. All rights reserved.

## Contact

For any questions or inquiries, please contact [your contact information].