export function ExperienceSection() {
  const experiences = [
    {
      role: "UI/UX Designer",
      // company: "",
      company: (
        <a 
          href="https://www.softwareseni.co.id/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="url-link"
        >
          Softwareseni Indonesia | Indonesia
        </a>
      ),
      period: "2020 - Present",
      description: "Worked on website design for both desktop and mobile platforms, delivering projects for clients across multiple countries including Australia, the United States, and the UK. Responsible for implementing client feedback, redesigning outdated websites, and refining user interfaces to improve functionality and user experience."
    },
    {
      role: "Website Designer & Developer",
      company: (
        <a 
          href="https://www.funraisin.co" 
          target="_blank" 
          rel="noopener noreferrer"
          className="url-link"
        >
          Funraisin | Australia
        </a>
      ),
      period: "2020 - Present",
      description:
        "I create website designs for various clients and build websites based on those designs using CMS platforms as well as custom CSS and JavaScript. I also ensure that every website is fully responsive across different screen sizes, including mobile and tablet."
    },
    {
      role: "Creative Designer",
      company: (
        <a 
          href="https://www.digitaldistribusi.com/en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="url-link"
        >
          Digital Distribusi Indonesia | Indonesia
        </a>
      ),
      period: "2020 - 2022",
      description: "Designed social media banners and visual assets tailored to each client’s products, while also developing marketplace visuals to strengthen product presentation and brand identity. Collaborated closely with clients to deliver designs that met both creative and commercial goals."
    },
    {
      role: "Creative Designer",
      company: (
        <a 
          href="https://www.instagram.com/salestockindonesia/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="url-link"
        >
          Sale Stock Indonesia | Indonesia
        </a>
      ),
      period: "2015 - 2020",
      description: "Responsible for creating and managing all marketing design materials, including social media content, TV advertisements, marketplace banners, and promotional posters. Ensured brand consistency across various platforms to effectively engage target audiences."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl mb-4">Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            Professional journey in design and creative development.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="md:col-span-1">
                <div className="text-sm text-muted-foreground">{exp.period}</div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl mb-1">{exp.role}</h3>
                <div className="text-muted-foreground mb-3">{exp.company}</div>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}