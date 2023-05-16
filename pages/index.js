
import SkillBar from "@/components/skillBar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h2 className="text-3xl">Home Page</h2>
      <SkillBar/>
    </>
  );
}
