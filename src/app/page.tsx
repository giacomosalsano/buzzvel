import Header from "@/components/Header";
import Introduction from "@/components/Introduction";
import Presentation from "@/components/Presentation";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="items-center min-h-screen ">
      <Header />
      <Presentation />
      <Introduction />
      <Services />
    </div>
  );
}
