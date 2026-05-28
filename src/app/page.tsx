import { SiteNav } from "./_components/SiteNav";
import { SiteFooter } from "./_components/SiteFooter";
import { HeroGrand } from "./_components/HeroGrand";
import { ThesisSection } from "./_components/sections/ThesisSection";
import { GapSection } from "./_components/sections/GapSection";
import { EvidenceSection } from "./_components/sections/EvidenceSection";
import { CompareSection } from "./_components/sections/CompareSection";
import { InstallSection } from "./_components/sections/InstallSection";

export default function Home() {
  return (
    <>
      <SiteNav />
      <HeroGrand />
      <div className="content">
        <ThesisSection />
        <GapSection />
        <EvidenceSection />
        <CompareSection />
        <InstallSection />
      </div>
      <SiteFooter />
    </>
  );
}
