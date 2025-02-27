# Memory Bank: Product Context

## Project Overview

The MyMiamiDoctor website is a healthcare provider website that is approximately 75% complete. The project requires implementation of multilingual support, performance optimization, SEO finalization, API integration preparation, accessibility improvements, and comprehensive testing and documentation. The Memory Bank system is being used to track the implementation progress.

## Key Components

### Website Components
- **Next.js 14.1.0**: React framework with server-side rendering capabilities
- **React 18.2.0**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework

### Memory Bank Components
- **Memory Bank**: Persistent storage for project knowledge
- **Mode Rules**: YAML-based behavior configuration via .clinerules files
- **VS Code Integration**: Seamless development experience
- **Real-time Updates**: Continuous context synchronization

## Core Files

| File | Purpose |
|------|---------|
| `activeContext.md` | Tracks current session state and goals |
| `productContext.md` | Defines project scope and core knowledge (this file) |
| `progress.md` | Tracks work status and milestones |
| `decisionLog.md` | Records important decisions |
| `systemPatterns.md` | Documents recurring patterns and standards (optional) |

## Website Architecture

### Current Structure
- UI components in `/components/ui/`
- Layout components in `/components/layout/`
- Section components in `/components/sections/`
- Form components in `/components/forms/`
- CMS components in `/components/cms/`
- Pages in `/app/` (Next.js App Router)
- Content files in `/content/` (managed by Netlify CMS)
- Admin interface in `/public/admin/`

### Planned Enhancements
- State Management with React Context API
- API Layer for external service interactions
- Service Layer for specific domains
- Custom Hooks for common functionality
- Domain-Driven Organization of components
- Feature-Based Organization for complex features
- Centralized Type Definitions

## Mode System

### Default Modes
- **Architect Mode**: System design and architecture
- **Code Mode**: Implementation and coding
- **Ask Mode**: Information and guidance
- **Debug Mode**: Troubleshooting and problem-solving

### Custom Modes
- **Jest Test Engineer**: Writing and maintaining Jest test suites with TypeScript support
- **VibeMode**: Transforming natural language descriptions into working code
- **Documentation Writer**: Creating clear, comprehensive documentation
- **User Story Creator**: Creating well-structured user stories for agile development
- **Junior Dev Code Reviewer**: Providing educational code reviews for junior developers
- **Senior Dev Code Reviewer**: Providing architectural and system-level code reviews

## Technical Stack

### Website Stack
- **Next.js 14.1.0**: React framework
- **React 18.2.0**: UI library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Netlify CMS**: Git-based content management system
- **next-i18next**: Internationalization framework

### Memory Bank Stack
- **Configuration**: YAML-based .clinerules files
- **Documentation**: Markdown files
- **Integration**: VS Code extension

## Project Goals

1. Complete Multilingual Support (English and Russian)
2. Optimize Performance (load time and Core Web Vitals)
3. Finalize SEO Implementation (focus on local Miami healthcare)
4. Prepare for Backend Integration (appointment booking and patient portal)
5. Complete Testing and Documentation
6. Maintain context across AI-assisted development sessions
7. Track decisions and their rationale
8. Document progress and next steps

## Implementation Status

The Memory Bank system has been successfully set up with all required configuration files and core Memory Bank files. The MyMiamiDoctor website is approximately 75% complete with a strong foundation of UI components and core pages.

Key implemented features include:
1. **Multilingual Support**: Implemented with English and Russian locales using next-i18next
2. **UI Component Library**: Comprehensive set of reusable UI components
3. **Responsive Layout**: Mobile-friendly design with Tailwind CSS
4. **Content Management**: Netlify CMS integration for easy content editing
5. **Performance Monitoring**: Client-side performance tracking

The Netlify CMS integration provides a user-friendly admin interface for content management, with support for multilingual content, media handling, and an editorial workflow. The CMS is configured to manage blog posts, services, pages, and site settings.

Custom modes have been added to provide specialized assistance for different development tasks. Implementation of the remaining features is in progress according to the COMPLETION_ROADMAP.md document.