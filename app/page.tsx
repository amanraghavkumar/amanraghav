import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import AIChatbot from '@/components/chatbot/AIChatbot';

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <div className="fixed bottom-6 right-6 z-50">
        <AIChatbot />
      </div>
    </div>
  );
}