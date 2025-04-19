"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Project } from '@/lib/projects-data';

// const handleResumeClick = () => {
//   Open resume in new tab
//   window.open('/public/aman_resume.pdf', '_blank');

//   // Download resume
//   const link = document.createElement('a');
//   link.href = '/public/aman_resume.pdf';
//   link.download = 'Aman_Raghav_Resume.pdf';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { data: session } = useSession();
  const { toast } = useToast();
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);
  
  const handleDownloadClick = async () => {
    if (!session) {
      toast({
        title: "Authentication required",
        description: "Please log in to download this project",
        variant: "destructive",
      });
      router.push('/login');
      return;
    }
    
    // Log download attempt
    try {
      const response = await fetch('/api/log-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectId: project.id,
          email: session.user?.email,
        }),
      });
      
      if (response.ok) {
        // Trigger the download   public/resumes/aman123.pdf
        window.open(`/resumes/${project.id}.pdf`, '_blank');
        // window.open(`/aman_resume.pdf`, '_blank');
        toast({
          title: "Download started",
          description: "Your download should begin shortly",
        });
      } else {
        toast({
          title: "Download failed",
          description: "There was a problem initiating your download",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Download error:", error);
      toast({
        title: "Download failed",
        description: "There was a problem initiating your download",
        variant: "destructive",
      });
    }
  };
  
  return (
    <motion.div
      className="rounded-xl overflow-hidden bg-card border shadow-sm"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{
              transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
          />
        </AspectRatio>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4">
          <span className="px-2 py-1 bg-primary/90 text-primary-foreground rounded-md text-xs font-medium">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {project.githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View source code on GitHub"
              >
                <Github className="mr-1 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          
          {project.demoUrl && (
            <Button size="sm" variant="outline" asChild>
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="View live demo"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
          
          {/* <Button 
            size="sm" 
            onClick={handleDownloadClick}
            aria-label="Download project files"
          >
            <Download className="mr-1 h-4 w-4" />
            Download
          </Button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;