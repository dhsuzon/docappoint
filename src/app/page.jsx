import Features from "@/components/homeroute/Features";
import HeroBanner from "@/components/homeroute/HeroBanner";
import Stats from "@/components/homeroute/Stats";
import TopDoctors from "@/components/homeroute/TopDoctors";
import Image from "next/image";



const Home = ()=> {
  return (
    <div>
      <HeroBanner/>
      <TopDoctors/>
      <Features/>
      <Stats/>
    </div>
  );
}
export default Home;
