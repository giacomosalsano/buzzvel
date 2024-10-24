import Header from "@/components/Header";
import Presentation from "@/components/Presentation";
import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center min-h-screen ">
      <Header />
      <Presentation />
    </div>
  );
}
