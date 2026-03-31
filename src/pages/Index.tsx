import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { Settings, Shield, Zap, Users, Code, Wrench } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main>
        <HeroSection />

        {/* --- ABOUT SECTION --- */}
        <section id="about" className="py-20 px-6 scroll-mt-20">
            {/* Founded by <strong>-----</strong>, our mission is to provide high-quality, 
                  precision-tested components for ECE and EE students across Nepal. We ensure that 
                  every instrument—from microcontrollers to advanced sensors—meets the rigorous 
                  standards required for modern engineering projects */}
        </section>

        {/* --- OUR SERVICE SECTION --- */}
        <section id="service" className="py-20 px-6 bg-slate-900/50 scroll-mt-20 border-y border-border/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We go beyond just selling parts. We provide the ecosystem needed for engineering success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Zap />, title: "Component Sourcing", desc: "Access to high-precision microcontrollers, sensors, and actuators." },
                { icon: <Settings />, title: "Custom Prototyping", desc: "Assistance in designing and assembling robotic prototypes for projects." },
                { icon: <Shield />, title: "Quality Assurance", desc: "Every component is lab-tested by our engineers before being listed." },
              ].map((service, i) => (
                <div key={i} className="p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- MEMBERS SECTION --- */}
        <section id="members" className="py-20 px-6 scroll-mt-20">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground">The innovators behind InnovNepal.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-12">
              {[
                { name: "-----", role: "CEO & Founder", bio: "------" },
                { name: "------", role: "Co-Founder", bio: "--" },
                { name: "------", role: "Project Manager", bio: "----" },
              ].map((member, i) => (
                <div key={i} className="text-center group">
                  <div className="w-32 h-32 mx-auto rounded-full bg-muted border-2 border-border group-hover:border-primary transition-all overflow-hidden mb-4">
                    {/* Use an <img> tag here for real photos */}
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-slate-800">
                       <Users className="w-10 h-10" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground max-w-[200px]">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProductGrid searchQuery={searchQuery} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
