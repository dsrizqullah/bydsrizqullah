import image_95a3074027178227fdde8f8262bd159da522bab9 from 'figma:asset/95a3074027178227fdde8f8262bd159da522bab9.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl">
              Creative, <br />
              UI/UX Designer <br/>
              & Developer
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              I am a Designer with over 10 years of experience in the tech industry, including the last 5 years as a UI/UX Designer at Softwareseni Indonesia. Previously, I worked as a Creative Designer in several companies, building strong expertise in visual communication and brand design.
            </p>
            <p className="text-lg text-muted-foreground max-w-md">
              I am seeking opportunities to leverage my experience in creating impactful designs within a dynamic and collaborative work environment.
            </p>
            <div className="flex space-x-4">
              <div className="text-sm">
                <div className="text-muted-foreground">Based in</div>
                <div>Sleman, Yogyakarta</div>
              </div>
              <div className="text-sm">
                <div className="text-muted-foreground">Experience</div>
                <div>10+ Years</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <ImageWithFallback
                src={image_95a3074027178227fdde8f8262bd159da522bab9}
                alt="Workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}