
import { useState, useEffect } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

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
              Thibault Leture
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
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container">
            <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
                Créons ensemble votre présence numérique
              </h1>
              <p className="text-accent text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Développement web sur mesure pour donner vie à vos projets avec élégance et professionnalisme.
              </p>
              <a href="#contact" className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors">
                Commencer un projet
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* À propos Section */}
        <section id="à-propos" className="py-20 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="reveal">
                <h2 className="text-3xl md:text-4xl font-medium mb-6">
                  À propos
                </h2>
                <p className="text-accent mb-6">
                  Passionné par le développement web et le design, je crée des expériences numériques uniques qui allient esthétique et fonctionnalité. Mon approche met l'accent sur la simplicité et l'élégance, créant des espaces numériques qui respirent et captent l'attention.
                </p>
                <a href="#services" className="hover-link inline-flex items-center">
                  Découvrir mes services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              <div className="reveal">
                <div className="aspect-video bg-white rounded-lg shadow-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto reveal">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Mes services
              </h2>
              <p className="text-accent mb-12">
                Des solutions adaptées à vos besoins, avec une attention particulière portée aux détails et à l'expérience utilisateur.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Design UI/UX",
                  description: "Interfaces élégantes et intuitives qui captivent vos utilisateurs.",
                },
                {
                  title: "Développement Web",
                  description: "Solutions techniques modernes et performantes.",
                },
                {
                  title: "Optimisation",
                  description: "Performance et accessibilité pour une expérience optimale.",
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

        {/* Témoignages Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-medium mb-12 text-center reveal">
              Ce qu'en disent mes clients
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  text: "Un travail remarquable, avec une vraie compréhension de nos besoins et une excellente communication tout au long du projet.",
                  author: "Marie D.",
                  role: "Directrice Marketing",
                },
                {
                  text: "Thibault a su transformer notre vision en une réalité numérique qui dépasse nos attentes. Je recommande vivement.",
                  author: "Pierre L.",
                  role: "Entrepreneur",
                },
              ].map((testimonial, index) => (
                <div key={index} className="p-8 bg-white rounded-lg shadow-sm reveal">
                  <p className="text-accent mb-6">"{testimonial.text}"</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-accent text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container max-w-4xl">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl md:text-4xl font-medium mb-6">
                Parlons de votre projet
              </h2>
              <p className="text-accent">
                Contactez-moi pour discuter de vos besoins et objectifs.
              </p>
            </div>
            <form className="space-y-6 reveal">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nom"
                  className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:border-primary transition-colors"
              />
              <textarea
                placeholder="Message"
                rows={6}
                className="w-full p-4 rounded-lg border border-secondary focus:outline-none focus:border-primary transition-colors"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
              >
                Envoyer
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-playfair text-xl mb-4">Thibault Leture</h3>
              <p className="text-accent">
                Création d'expériences web uniques et professionnelles.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <div className="space-y-2">
                <a href="mailto:contact@example.com" className="text-accent hover:text-primary flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contact@example.com
                </a>
                <a href="tel:+33600000000" className="text-accent hover:text-primary flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +33 6 00 00 00 00
                </a>
                <p className="text-accent flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Paris, France
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Navigation</h4>
              <div className="space-y-2">
                {["À propos", "Services", "Contact"].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="block text-accent hover:text-primary">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-accent/20 mt-8 pt-8 text-center text-accent">
            <p>&copy; {new Date().getFullYear()} Thibault Leture. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
