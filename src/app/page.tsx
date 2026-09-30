import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/pages/Hero";
import FeatureStrip from "@/pages/FeatureStrip";
import WhoWeAre from "@/pages/WhoWeAre";
import DarkStats from "@/pages/DarkStats";
import ProductsTeaser from "@/pages/ProductsTeaser";
import SectorsWeServe from "@/pages/SectorsWeServe";
import Process from "@/pages/Process";
import Testimonials from "@/pages/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeatureStrip />
      <WhoWeAre />
      <DarkStats />
      <ProductsTeaser />
      <SectorsWeServe />
      <Process />
      <Testimonials />
    </main>
  );
}
