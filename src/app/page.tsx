import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/pages/Hero";
import FeatureStrip from "@/pages/FeatureStrip";
import WhoWeAre from "@/pages/WhoWeAre";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureStrip />
      <WhoWeAre />
    </main>
  );
}
