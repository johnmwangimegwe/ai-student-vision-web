
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FindingsSection } from "@/components/FindingsSection";
import { MethodologySection } from "@/components/MethodologySection";
import { ConnectSection } from "@/components/ConnectSection";
import { Footer } from "@/components/Footer";

const Index = () => {
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
