import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <main>
        <HeroSection />

        {/* --- NEW ABOUT SECTION --- */}
        <section id="about" className="py-20 px-6 bg-slate-900/30 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Side */}
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
                  About InnovNepal
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  InnovNepal is a specialized engineering hub dedicated to bridging the gap between 
                  theoretical electronics and practical robotics implementation. 
                </p>
                <p className="text-slate-400">
                  Founded by <strong>-------</strong>, our mission is to provide high-quality, 
                  precision-tested components for ECE and EE students across Nepal. We ensure that 
                  every instrument—from microcontrollers to advanced sensors—meets the rigorous 
                  standards required for modern engineering projects.
                </p>
                <div className="pt-4">
                  <div className="inline-block p-4 border border-blue-500/20 rounded-lg bg-blue-500/5">
                    <p className="text-sm font-mono text-blue-400">
                      // Status: Empowering Nepal's Engineers
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Side (Optional) */}
              <div className="hidden md:block relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl blur opacity-20"></div>
                <div className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4 text-white">Why Choose Us?</h3>
                  <ul className="space-y-3 text-slate-400">
                    <li className="flex items-center gap-2">✔ Precision Tested Hardware</li>
                    <li className="flex items-center gap-2">✔ Curated for ECE/EE Syllabi</li>
                    <li className="flex items-center gap-2">✔ Fast Local Delivery</li>
                    <li className="flex items-center gap-2">✔ Technical Support by Experts</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ------------------------- */}

        <ProductGrid searchQuery={searchQuery} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
