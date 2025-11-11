import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-[0px] px-[32px]">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-lg font-medium">Dwi Septa | Portfolio</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-muted-foreground transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-muted-foreground"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button 
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('work')}
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors w-full text-left"
              >
                Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-foreground hover:text-muted-foreground transition-colors w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}