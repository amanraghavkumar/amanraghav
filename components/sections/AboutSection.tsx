"use client"

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BrainCircuit, Code, Database, Layers } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const skills = [
    { 
      icon: <BrainCircuit className="h-8 w-8" />,
      title: 'Machine Learning',
      description: 'Building intelligent systems that learn from data and make predictions.'
    },
    { 
      icon: <Database className="h-8 w-8" />,
      title: 'Data Science',
      description: 'Extracting knowledge and insights from structured and unstructured data.'
    },
    { 
      icon: <Layers className="h-8 w-8" />,
      title: 'Deep Learning',
      description: 'Implementing neural networks for complex pattern recognition tasks.'
    },
    { 
      icon: <Code className="h-8 w-8" />,
      title: 'AI Development',
      description: 'Creating AI-powered applications and tools to solve real-world problems.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-16 bg-primary mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Passionate Data Scientist
            </h3>
            <p className="text-muted-foreground mb-6">
              I am a passionate data science enthusiast with strong interest in Machine Learning, 
              Deep Learning and building AI-powered tools. I'm currently learning and building 
              real-world ML/DL projects.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in data science began with a curiosity about how machines can learn from data 
              and make intelligent decisions. Today, I focus on creating solutions that leverage the 
              power of AI to solve complex problems.
            </p>
            <p className="text-muted-foreground">
              I'm constantly exploring new technologies and methodologies in the rapidly evolving 
              field of AI, always seeking to expand my knowledge and improve my skills.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg border bg-card"
              >
                <div className="text-primary mb-4">{skill.icon}</div>
                <h4 className="text-lg font-medium mb-2">{skill.title}</h4>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;