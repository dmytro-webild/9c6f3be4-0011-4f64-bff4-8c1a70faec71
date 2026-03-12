"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { BookOpen, HelpCircle, Library, Shield, Sparkles, Star, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmallSizeLargeTitles"
      background="circleGradient"
      cardStyle="soft-shadow"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="StudyHub"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Subjects", id: "features" },
            { name: "Features", id: "product" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Unlock Your Learning Potential with StudyHub"
          description="Share, discover, and master science subjects through collaborative study notes. Explore comprehensive summaries for physics, chemistry, and biology with interactive learning maps and expert insights."
          tag="Educational Platform"
          tagIcon={Sparkles}
          background={{ variant: "plain" }}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/a-vibrant-study-platform-dashboard-showi-1773313363665-fb479a1b.png",              imageAlt: "Interactive study platform dashboard"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/an-educational-app-showing-chemistry-per-1773313366623-2273dd9a.png",              imageAlt: "Chemistry interactive interface"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/a-biology-learning-platform-displaying-h-1773313361969-f85827cd.png",              imageAlt: "Biology learning visualization"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/a-comprehensive-study-notes-sharing-plat-1773313363613-fb38429c.png",              imageAlt: "Study notes sharing platform"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/a-student-focused-learning-dashboard-wit-1773313364464-32841561.png",              imageAlt: "Student progress tracking dashboard"
            }
          ]}
          buttons={[
            { text: "Explore Subjects", href: "features" },
            { text: "Browse Notes", href: "product" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          tag="About StudyHub"
          tagIcon={BookOpen}
          title="Empowering Students Through Collaborative Learning and Comprehensive Study Resources"
          useInvertedBackground={false}
          buttons={[
            { text: "Join Our Community", href: "contact" },
            { text: "Learn More", href: "faq" }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentyThree
          title="Core Features for Science Learning"
          description="Comprehensive tools designed to enhance your educational journey across all science subjects"
          tag="Our Capabilities"
          tagIcon={Zap}
          features={[
            {
              id: "1",              title: "Comprehensive Subject Notes",              tags: ["Physics", "Chemistry", "Biology"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/a-comprehensive-subject-notes-interface--1773313363074-b689e786.png?_wi=1",              imageAlt: "Physics comprehensive subject notes"
            },
            {
              id: "2",              title: "Interactive Learning Maps",              tags: ["Visualization", "Concept Links"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/an-interactive-learning-map-visualizatio-1773313364389-74612980.png?_wi=1",              imageAlt: "Chemistry interactive learning maps"
            },
            {
              id: "3",              title: "Detailed Reference Guides",              tags: ["Anatomy", "Systems"],
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/a-biology-reference-guide-showing-detail-1773313362361-315e53ce.png?_wi=1",              imageAlt: "Biology reference guide"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Featured Study Materials"
          description="Explore our curated collection of high-quality study notes and educational resources"
          tag="Subject Collections"
          tagIcon={Library}
          products={[
            {
              id: "1",              name: "Physics Fundamentals Bundle",              price: "Free",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/a-comprehensive-subject-notes-interface--1773313363074-b689e786.png?_wi=2",              imageAlt: "Physics notes collection",              initialQuantity: 1
            },
            {
              id: "2",              name: "Chemistry Periodic Guide",              price: "Free",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/an-interactive-learning-map-visualizatio-1773313364389-74612980.png?_wi=2",              imageAlt: "Chemistry reference guide",              initialQuantity: 1
            },
            {
              id: "3",              name: "Biology Systems Encyclopedia",              price: "Free",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/a-biology-reference-guide-showing-detail-1773313362361-315e53ce.png?_wi=2",              imageAlt: "Biology comprehensive guide",              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSix
          title="Student Success Stories"
          description="Hear from students who have transformed their learning with StudyHub"
          tag="Testimonials"
          tagIcon={Star}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "@sarahjohn",              testimonial: "StudyHub completely transformed how I study! The comprehensive notes and interactive maps make complex concepts so easy to understand. Highly recommend!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/professional-portrait-of-a-young-female--1773313361257-8557dc01.png",              imageAlt: "Sarah Johnson student"
            },
            {
              id: "2",              name: "Michael Chen",              handle: "@mchen_studies",              testimonial: "The collaborative nature of the platform is amazing. I can share my notes and learn from others simultaneously. Best study resource I've found!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/professional-portrait-of-a-young-male-st-1773313361334-22189e3a.png",              imageAlt: "Michael Chen student"
            },
            {
              id: "3",              name: "Dr. Emily Rodriguez",              handle: "@dr_emily_r",              testimonial: "As an educator, I appreciate how StudyHub organizes complex scientific information. Students genuinely enjoy using it, and their comprehension has improved significantly.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/professional-portrait-of-a-female-educat-1773313361357-b8b625ac.png",              imageAlt: "Dr. Emily Rodriguez educator"
            },
            {
              id: "4",              name: "James Wilson",              handle: "@jameswilson",              testimonial: "Finally, a platform where science learning feels engaging and intuitive. The visual representations and clear explanations have boosted my exam scores tremendously.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/professional-portrait-of-a-male-educator-1773313361953-7fffdd2c.png",              imageAlt: "James Wilson student"
            },
            {
              id: "5",              name: "Priya Patel",              handle: "@priya_learns",              testimonial: "The diversity of study materials and perspectives on StudyHub helped me prepare for my entrance exams. Grateful for such an inclusive learning community!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/professional-portrait-of-a-diverse-stude-1773313363134-a092001a.png",              imageAlt: "Priya Patel student"
            },
            {
              id: "6",              name: "Alex Thompson",              handle: "@alex_sciencegeek",              testimonial: "Exceptional platform for serious learners. The organization, accessibility, and quality of notes are unmatched. This is the future of collaborative learning!",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AqGkBrKEg1odNGcW88rAlikQ3n/professional-portrait-of-a-dedicated-stu-1773313361527-c09eda83.png",              imageAlt: "Alex Thompson student"
            }
          ]}
        />
      </div>

      <div id="socialproof" data-section="socialproof">
        <SocialProofOne
          title="Trusted by Educational Institutions Worldwide"
          description="Join thousands of students and educators who trust StudyHub for their learning needs"
          tag="Partnership"
          tagIcon={Shield}
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "Academic Excellence Network",            "Science Education Foundation",            "STEM Learning Initiative",            "Global Education Alliance",            "Research Universities Consortium",            "Student Success Program",            "Knowledge Sharing Platform",            "Educational Innovation Hub"
          ]}
          showCard={true}
          speed={40}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Find answers to common questions about StudyHub and how to make the most of your learning experience"
          tag="Help & Support"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",              title: "What subjects are covered on StudyHub?",              content: "StudyHub provides comprehensive study materials and notes for <strong>Physics</strong>, <strong>Chemistry</strong>, and <strong>Biology</strong>. Each subject includes detailed explanations, visual diagrams, interactive learning maps, and reference guides to support your learning journey."
            },
            {
              id: "2",              title: "Is StudyHub free to use?",              content: "Yes! StudyHub is completely free for students and educators. Our mission is to democratize access to quality educational resources and make learning more accessible to everyone worldwide."
            },
            {
              id: "3",              title: "Can I share my own study notes?",              content: "Absolutely! One of the core features of StudyHub is collaborative learning. You can share your own study notes, summaries, and insights with the community. Simply upload your materials and help other students learn."
            },
            {
              id: "4",              title: "How do interactive learning maps work?",              content: "Our interactive learning maps visually connect related concepts across subjects. They show how different topics relate to each other, making it easier to understand the big picture and build comprehensive knowledge. Click on any concept to dive deeper."
            },
            {
              id: "5",              title: "Can I bookmark or save materials for later?",              content: "Yes! You can bookmark any study material, create personalized collections, and save notes for offline access. Use the save feature on any note or resource to quickly access it later from your dashboard."
            },
            {
              id: "6",              title: "How accurate is the information on StudyHub?",              content: "All study materials are curated and verified by educators and subject matter experts. We maintain high academic standards and regularly update content based on feedback from our community to ensure accuracy and relevance."
            },
            {
              id: "7",              title: "Is there mobile access to StudyHub?",              content: "StudyHub is fully responsive and works seamlessly on mobile devices, tablets, and desktops. Access your study materials anytime, anywhere, even on the go!"
            },
            {
              id: "8",              title: "How do I get started with StudyHub?",              content: "Getting started is simple! Create a free account, browse our subject collections, explore study notes and learning maps, and start your personalized learning journey. Join our community today to unlock your educational potential!"
            }
          ]}
          faqsAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="StudyHub"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "About", href: "about" },
                { label: "Features", href: "features" }
              ]
            },
            {
              items: [
                { label: "Physics", href: "#" },
                { label: "Chemistry", href: "#" },
                { label: "Biology", href: "#" }
              ]
            },
            {
              items: [
                { label: "Community", href: "#" },
                { label: "Support", href: "faq" },
                { label: "Contact", href: "#" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Accessibility", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}