import Features from "@/components/homeroute/Features";
import HeroBanner from "@/components/homeroute/HeroBanner";
import Stats from "@/components/homeroute/Stats";
import Image from "next/image";



const Home = ()=> {
  return (
    <div>
      <HeroBanner/>
      <Features/>
      <Stats/>
    </div>
  );
}
export default Home;
