import image_441ed4067b18620469ca02210d8e2929d3a6a45b from 'figma:asset/441ed4067b18620469ca02210d8e2929d3a6a45b.png';
import image_1daea3ac9ef33fc7aa8672a62963c3d18d1c195b from 'figma:asset/1daea3ac9ef33fc7aa8672a62963c3d18d1c195b.png';
import image_32ef10c121134cc8f10e69f9e28b9339abf61084 from 'figma:asset/32ef10c121134cc8f10e69f9e28b9339abf61084.png';
import image_041615b17d791ae82da46a03c95b127188e188ee from 'figma:asset/041615b17d791ae82da46a03c95b127188e188ee.png';
import image_78f1b218c89a39941501ee4c6a6e554c1ceb9aae from 'figma:asset/78f1b218c89a39941501ee4c6a6e554c1ceb9aae.png';
import image_5da70a33483faaaddc358100539dea345781ae99 from 'figma:asset/5da70a33483faaaddc358100539dea345781ae99.png';
import image_f067fed4358a67eab7b2e34509d02d12d0aec57c from 'figma:asset/f067fed4358a67eab7b2e34509d02d12d0aec57c.png';
import image_6453979b4f2fa3db6bd842b4fe064c5847567aef from 'figma:asset/6453979b4f2fa3db6bd842b4fe064c5847567aef.png';
import image_ac17cceb6a733f7b8b347af52446a01076d3e212 from 'figma:asset/ac17cceb6a733f7b8b347af52446a01076d3e212.png';
import image_6d6ef9c48514bf08a051436583a55303eea329c7 from 'figma:asset/6d6ef9c48514bf08a051436583a55303eea329c7.png';
import image_3eb9615f5e05bfd99439a5c55e09ffc7b6021728 from 'figma:asset/3eb9615f5e05bfd99439a5c55e09ffc7b6021728.png';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Badge } from './ui/badge';
import { X } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  colorPalette: string[];
  tools: {
    name: string;
    icon: string;
  }[];
}

export function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "All Night Long",
      category: "Website Design",
      year: "2024",
      image: image_3eb9615f5e05bfd99439a5c55e09ffc7b6021728,
      description: "A website from client in Australia (All Night Long) for marathon challenge with 2 layout design desktop and mobile. This website using their brand guideline and full color as themes for the website. Simple feature in the website like register event and also donation dashboard to fundraising.",
      colorPalette: ["#FDBA44", "#6DC1EC", "#C070AE", "#221244"],
      tools: [
        
        { name: "Figma", icon: "🎯" },
        
      ]
    },
    {
      title: "Walk for Autism",
      category: "Website Design",
      year: "2024",
      image: image_6d6ef9c48514bf08a051436583a55303eea329c7,
      description: "A website from client in Australia (Walk for Autism) for walking event and fundraising with 2 layout design desktop and mobile. This website using their brand guideline and full color as themes for the website. Simple feature in the website like progress bar and profile dashboard.",
      colorPalette: ["#8CC051", "#F37253", "#EEC536", "#00853F"],
      tools: [
        { name: "Figma", icon: "🎯" },
      ]
    },
    {
      title: "Event Poster",
      category: "Graphic Design",
      year: "2025",
      image: image_ac17cceb6a733f7b8b347af52446a01076d3e212,
      description: "Created a set of promotional posters for internal sports activities, including mini soccer and badminton. The design focuses on dynamic layouts, bold typography, and energetic visuals to capture the spirit of teamwork and competition.",
      colorPalette: ["#00afaa", "#072e45", "#f1c600"],
      tools: [
        { name: "Adobe Photoshop", icon: "🎯" },       
      ]
    },
    {
      title: "Social Media Post",
      category: "Graphic Design",
      year: "2023",
      image: image_32ef10c121134cc8f10e69f9e28b9339abf61084,
      description: "Creating digital design posts for social media such as Instagram and other platforms, in various sizes required by the brand.",
      colorPalette: ["#FE0C00", "#FC8626", "#032449", "#329CCE"],
      tools: [
        { name: "Adobe Photoshop", icon: "🎯" },
        
      ]
    },
    {
      title: "Marketplace Banner",
      category: "Branding",
      year: "2020",
      image: image_1daea3ac9ef33fc7aa8672a62963c3d18d1c195b,
      description: "Creating designs for brand needs in the marketplace with various sizes according to requirements and image placement, as well as preparing digital posts for social media and other digital platforms.",
      colorPalette: ["#D10101", "#73B5D5", "#E9B6BB", "#171313"],
      tools: [
        { name: "Adobe Illustrator", icon: "🎨" },
        { name: "Adobe Photoshop", icon: "🎯" },
      ]
    },
    {
      title: "Marketpalce Banner",
      category: "Branding",
      year: "2020",
      image: image_441ed4067b18620469ca02210d8e2929d3a6a45b,
      description: "Creating designs for brand needs in the marketplace with various sizes according to requirements and image placement, as well as preparing digital posts for social media and other digital platforms.",
      colorPalette: ["#1E293B", "#3B82F6", "#10B981", "#F59E0B"],
      tools: [
        { name: "Adobe Illustrator", icon: "🎨" },
        { name: "Adobe Photoshop", icon: "🎯" },
      ]
    }
  ];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Selected Work</h2>
          <p className="text-muted-foreground max-w-2xl">
            A collection of projects spanning branding, digital experiences, and product design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer overflow-hidden border-0 bg-transparent"
              onClick={() => handleProjectClick(project)}
            >
              <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg">{project.title}</h3>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* My Skills Section */}
        <div className="mt-32">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">My Skills</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="text-center group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 p-6 transition-transform duration-300 group-hover:scale-105">
                <ImageWithFallback
                  src={image_6453979b4f2fa3db6bd842b4fe064c5847567aef}
                  alt="Figma"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg">Photoshop</h3>
            </div>

            <div className="text-center group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 p-6 transition-transform duration-300 group-hover:scale-105">
                <ImageWithFallback
                  src={image_f067fed4358a67eab7b2e34509d02d12d0aec57c}
                  alt="Adobe Photoshop"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg">Figma</h3>
            </div>

            <div className="text-center group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 p-6 transition-transform duration-300 group-hover:scale-105">
                <ImageWithFallback
                  src={image_5da70a33483faaaddc358100539dea345781ae99}
                  alt="Adobe Illustrator"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg">Illustrator</h3>
            </div>

            <div className="text-center group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 p-6 transition-transform duration-300 group-hover:scale-105">
                <ImageWithFallback
                  src={image_78f1b218c89a39941501ee4c6a6e554c1ceb9aae}
                  alt="Sketch"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg">CSS</h3>
            </div>

            <div className="text-center group">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden mb-4 p-6 transition-transform duration-300 group-hover:scale-105">
                <ImageWithFallback
                  src={image_041615b17d791ae82da46a03c95b127188e188ee}
                  alt="After Effects"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg">After Effects</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-2xl mb-2">{selectedProject?.title}</DialogTitle>
                <DialogDescription className="flex items-center space-x-4 text-sm">
                  <span>{selectedProject?.category}</span>
                  <span>•</span>
                  <span>{selectedProject?.year}</span>
                </DialogDescription>
              </div>
              <button
                onClick={closeModal}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </DialogHeader>

          {selectedProject && (
            <div className="space-y-8">
              {/* Project Image */}
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Description */}
              <div>
                <h3 className="text-lg mb-3">About the Project</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Color Palette */}
              <div>
                <h3 className="text-lg mb-4">Color Palette</h3>
                <div className="flex space-x-3">
                  {selectedProject.colorPalette.map((color, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="w-16 h-16 rounded-lg border border-border shadow-sm"
                        style={{ backgroundColor: color }}
                      ></div>
                      <p className="text-xs text-muted-foreground mt-2 font-mono">
                        {color.toUpperCase()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div>
                <h3 className="text-lg mb-4">Tools Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tools.map((tool, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="flex items-center space-x-2 px-3 py-2"
                    >
                      <span className="text-lg">{tool.icon}</span>
                      <span>{tool.name}</span>
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}