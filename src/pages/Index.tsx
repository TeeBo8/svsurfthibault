
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          reveal.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <nav className={`fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="text-xl font-playfair font-medium">
              Logo
            </a>
            <div className="hidden md:flex space-x-8">
              {["À propos", "Services", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover-link">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                Une expérience digitale unique
              </h1>
              <p className="text-accent text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Découvrez notre approche minimaliste et professionnelle pour créer des expériences web mémorables.
              </p>
              <a href="#contact" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors">
                Commencer
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="reveal">
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  Design moderne et épuré
                </h2>
                <p className="text-accent mb-6">
                  Notre approche met l'accent sur la simplicité et l'élégance, créant des espaces numériques qui respirent et captent l'attention.
                </p>
                <a href="#services" className="hover-link inline-flex items-center">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="reveal">
                <div className="aspect-video bg-white rounded-lg shadow-lg"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto reveal">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Notre expertise
              </h2>
              <p className="text-accent mb-12">
                Nous combinons design minimaliste et fonctionnalités avancées pour créer des expériences web uniques.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Design UI/UX",
                  description: "Interfaces élégantes et intuitives",
                },
                {
                  title: "Développement Web",
                  description: "Solutions techniques modernes",
                },
                {
                  title: "Optimisation",
                  description: "Performance et accessibilité",
                },
              ].map((item, index) => (
                <div key={index} className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow reveal">
                  <h3 className="text-xl font-medium mb-4">{item.title}</h3>
                  <p className="text-accent">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
