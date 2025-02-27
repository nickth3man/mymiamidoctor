# Netlify Deployment Guide for MyMiamiDoctor

This guide provides step-by-step instructions for deploying the MyMiamiDoctor website to Netlify, including connecting your GitHub repository, configuring build settings, setting up environment variables, and testing the deployment.

## 1. Connect GitHub Repository to Netlify

1. **Create a Netlify Account** (if you don't have one already):
   - Go to [netlify.com](https://netlify.com)
   - Sign up using your GitHub account for seamless integration

2. **Connect Your GitHub Repository**:
   - Log in to your Netlify dashboard
   - Click "Add new site" > "Import an existing project"
   - Select "GitHub" as your Git provider
   - Authorize Netlify to access your GitHub account if prompted
   - Select the "mymiamidoctor" repository from the list

## 2. Configure Build Settings

After selecting your repository, you'll need to configure the build settings:

1. **Basic Build Settings**:
   - **Base directory**: `/` (root of the repository)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node.js version**: `18.x` (or the latest LTS version)

2. **Advanced Build Settings**:
   - Click "Show advanced" to expand additional options
   - Under "Functions directory", leave it as the default (netlify/functions)
   - Under "Deploy log visibility", select "Logs are public"
   - Under "Build status badges", enable if you want to display build status in your README

3. **Deploy Site**:
   - Click "Deploy site" to start the initial deployment
   - Netlify will begin building your site based on the configuration in your netlify.toml file

## 3. Set Up Environment Variables

After the initial deployment starts, you should set up any required environment variables:

1. **Navigate to Environment Variables**:
   - Go to "Site settings" > "Build & deploy" > "Environment"
   - Click "Edit variables"

2. **Add Required Environment Variables**:
   - `NEXT_TELEMETRY_DISABLED`: `1` (already in netlify.toml)
   - `NODE_ENV`: `production` (already in netlify.toml for production context)
   
   Add any additional environment variables your application needs, such as:
   - API keys for external services
   - CMS configuration variables
   - Analytics tracking IDs
   - Other service credentials

3. **Sensitive Information Handling**:
   - For sensitive variables (API keys, tokens, etc.), ensure "Encrypt" is checked
   - Consider using Netlify's environment-specific variables for different deployment contexts

## 4. Domain Configuration (Optional)

If you have a custom domain for the MyMiamiDoctor website:

1. **Add Custom Domain**:
   - Go to "Site settings" > "Domain management"
   - Click "Add custom domain"
   - Enter your domain name (e.g., mymiamidoctor.com)
   - Follow the instructions to configure DNS settings with your domain registrar

2. **Enable HTTPS**:
   - Netlify automatically provisions SSL certificates via Let's Encrypt
   - Ensure "HTTPS" is enabled in the domain settings

## 5. Deploy and Test the Website

After the initial deployment completes:

1. **Verify Deployment**:
   - Check the deployment log for any errors or warnings
   - Click on the generated Netlify URL to view your site

2. **Test Core Functionality**:
   - **Page Loading**: Verify all pages load correctly
     - Home page
     - About page
     - Services pages
     - Contact page
     - Blog pages
     - Patient portal
     - Appointment page
   
   - **Multilingual Support**: Test language switching between English and Russian
     - Verify content appears correctly in both languages
     - Check that language switching works on all pages
   
   - **Responsive Design**: Test on different device sizes
     - Desktop (1920px width)
     - Tablet (768px width)
     - Mobile (375px width)
   
   - **Forms**: Test all forms for proper submission
     - Contact form
     - Appointment form
   
   - **CMS Access**: Verify Netlify CMS is accessible
     - Navigate to /admin
     - Test login with Netlify Identity
     - Verify content editing capabilities

3. **Performance Testing**:
   - Run Lighthouse tests for performance, accessibility, SEO, and best practices
   - Check Core Web Vitals metrics
   - Verify image optimization is working correctly

4. **API Connections**:
   - Verify any API endpoints are working correctly
   - Test authentication flows if applicable

5. **Environment Variables**:
   - Confirm all environment variables are properly applied
   - Check for any missing or incorrect variables

## 6. Post-Deployment Configuration

After successful deployment and testing:

1. **Set Up Continuous Deployment**:
   - Verify that automatic deployments are enabled for your main branch
   - Configure branch deploys and deploy previews as needed

2. **Configure Form Handling**:
   - Set up form notifications in Netlify dashboard
   - Configure form submissions to be sent to appropriate email addresses

3. **Set Up Netlify Identity**:
   - Configure user roles and permissions for CMS access
   - Invite team members or clients who need access to the CMS

4. **Analytics and Monitoring**:
   - Enable Netlify Analytics if using
   - Set up external analytics services if needed

## 7. Troubleshooting Common Issues

If you encounter issues during deployment:

1. **Build Failures**:
   - Check the build log for specific error messages
   - Verify Node.js version compatibility
   - Ensure all dependencies are properly installed

2. **Routing Issues**:
   - Check redirects in netlify.toml
   - Verify Next.js configuration for API routes

3. **Environment Variable Problems**:
   - Confirm variables are correctly named and valued
   - Check for missing required variables

4. **CMS Access Issues**:
   - Verify Netlify Identity is properly configured
   - Check Git Gateway settings

## Conclusion

Following this guide will ensure a successful deployment of the MyMiamiDoctor website to Netlify. The site is now ready for public access with all features functioning correctly across different devices and languages.

For ongoing maintenance, refer to the Netlify dashboard for monitoring site performance, managing deployments, and updating environment variables as needed.