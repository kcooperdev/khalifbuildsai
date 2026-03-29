import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { PillarsSection } from "@/components/PillarsSection";
import { CommunitySection } from "@/components/CommunitySection";
import { TrustedBy } from "@/components/TrustedBy";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        <HeroSection />
        <TrustedBy />
        <ImpactSection />
        <PillarsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
