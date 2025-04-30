// backend/seed.ts
import mongoose from 'mongoose';
import Section from './src/models/section.model';

const seedData = async () => {
  await mongoose.connect('mongodb://localhost:27017/fullstack-homepage');
  
  await Section.deleteMany({});
  
  const sections = [
    {
      type: 'hero',
      content: {
        title: 'Welcome to Our Platform',
        subtitle: 'Build amazing experiences with our tools',
        ctaButtons: [
          { text: 'Get Started', url: '/signup' },
          { text: 'Learn More', url: '/about' }
        ]
      },
      order: 0
    },
    {
      type: 'about',
      content: {
        title: 'About Our Company',
        description: 'We specialize in creating high-quality software solutions tailored to your business needs.',
        imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf'
      },
      order: 1
    },
    {
      type: 'logos',
      content: {
        title: 'Trusted By',
        logos: [
          { url: 'https://logo.clearbit.com/google.com', alt: 'Google' },
          { url: 'https://logo.clearbit.com/microsoft.com', alt: 'Microsoft' }
        ]
      },
      order: 2
    },
    {
      type: 'footer',
      content: {
        copyright: `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
        links: [
          { text: 'Privacy Policy', url: '/privacy' },
          { text: 'Terms of Service', url: '/terms' }
        ]
      },
      order: 3
    }
  ];

  await Section.insertMany(sections);
  console.log('Database seeded!');
  process.exit();
};

seedData().catch(console.error);