import AboutSection from '@/components/about-section'
import ContactSection from '@/components/contact-section'
import HeroSection from '@/components/hero-section'
import ProjectsSection from '@/components/projects-section'
import RecentBlogPosts from '@/components/recent-blog-posts'
import SkillsSection from '@/components/skills-section'
import Carousel from '@/components/ui/carousel'


export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <RecentBlogPosts />
      <ContactSection />
    </main>
  )
}

