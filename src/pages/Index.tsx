
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MethodologySection } from "@/components/MethodologySection";
import { FindingsSection } from "@/components/FindingsSection";
import { ConnectSection } from "@/components/ConnectSection";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Load Infogram script
    const script = document.createElement('script');
    script.src = 'https://e.infogram.com/js/dist/embed-loader-min.js';
    script.id = 'infogram-async';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up
      if (document.getElementById('infogram-async')) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MethodologySection />
        <FindingsSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
