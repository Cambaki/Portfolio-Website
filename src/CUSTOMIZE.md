# How to Customize Your Portfolio

This guide explains how to personalize your portfolio with your own information.

## Changing Your Name and Personal Details

1. **Update your name in multiple locations:**
   - In `src/components/Hero.tsx` - Change "Cameron Hale" to your name and update your initials in the circle (CH)
   - In `src/components/Navbar.tsx` - Change the name in the navigation bar
   - In `src/components/Footer.tsx` - Update the copyright information
   - In `index.html` - Update the title and meta tags with your name

2. **Update your social links:**
   - In `src/components/Hero.tsx` - Replace the GitHub, LinkedIn, and email links with your own
   - In `src/pages/ContactPage.tsx` - Update your contact information

3. **Change your profile picture:**
   - In `src/components/Hero.tsx` - Replace the image source URL with a link to your own photo
   - You can use services like Unsplash or upload your own photo to image hosting services

## Customizing Your Projects

1. **Edit project details in:**
   - `src/data/sampleProjects.ts` - This file contains the information for your projects
   - Update titles, descriptions, images, and tags for each project
   - Add new projects by copying the existing format

2. **Change project images:**
   - Replace the image URLs in each project with links to your own work
   - Make sure to keep the image aspect ratios consistent for best appearance

## Updating Your Resume and About Information

1. **Edit your professional summary:**
   - In `src/components/ProfessionalSummary.tsx` - Update your bio, education, and skills

2. **Update your resume details:**
   - In `src/pages/ResumePage.tsx` - Modify your education, experience, and skills sections

## Customizing Navigation

The navigation links in the header connect to different pages in your portfolio:
- Home: Overview of your portfolio
- Projects: Gallery of your work
- About: Information about you
- Resume: Your education and experience
- Contact: How to reach you

## Additional Customization

For more advanced customization:
1. Update the color scheme by changing color classes (text-indigo-600, bg-purple-100, etc.)
2. Modify the layout and components to better showcase your specific work
3. Add or remove sections based on what's most relevant to your career goals

Remember to save all files after making changes for them to take effect.
