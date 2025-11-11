import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export function ContactSection() {
  const contacts = [
    {
      label: "Email",
      value: "dwisepta135@gmail.com",
      href: "mailto:dwisepta135@gmail.com",
      icon: Mail
    },
    {
      label: "LinkedIn",
      value: "www.linkedin.com/in/septa-r-03b168278",
      href: "www.linkedin.com/in/septa-r-03b168278",
      icon: Linkedin
    },
    {
      label: "WhatsApp",
      value: "+62 851-7973-5451",
      href: "https://wa.me/6285179735451",
      icon: Github
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl mb-6">Let's Connect</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Interested in working together? Let's discuss your next project.
            </p>
            
            <div className="space-y-4">
              {contacts.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Icon size={20} />
                    <span>{contact.value}</span>
                    <ExternalLink size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-4">Available for</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Freelance Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Design Consulting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-muted-foreground">Creative Collaborations</span>
                </div>
              </div>
            </div>
            
            <Button className="w-full md:w-auto">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}