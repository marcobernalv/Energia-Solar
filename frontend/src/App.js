import "@/App.css";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Advantages } from "@/components/site/Advantages";
import { QuoteWizard } from "@/components/site/QuoteWizard";
import { Packages } from "@/components/site/Packages";
import { Testimonials } from "@/components/site/Testimonials";
import { ContactFooter } from "@/components/site/ContactFooter";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="dark App bg-[#0B0D0F] text-[#F5F7FA] font-[var(--font-body)] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Advantages />
        <QuoteWizard />
        <Packages />
        <Testimonials />
      </main>
      <ContactFooter />
      <Toaster position="top-center" richColors theme="dark" />
    </div>
  );
}

export default App;
