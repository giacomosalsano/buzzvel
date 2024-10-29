import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Presentation from "@/components/Presentation";
import Services from "@/components/Services";
import SecondServices from "@/components/SecondServices";
import Testimonials from "@/components/Testimonials";
import LastPage from "@/components/LastPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="items-center h-screen w-screen">
      <Header />
      <Presentation />
      <Introduction />
      <Services />
      <SecondServices />
      <Testimonials />
      <LastPage />
      <Footer />
    </div>
  );
}
