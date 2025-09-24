import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Coffee from "@/components/Coffee";
import Menu from "@/components/Menu";
import Locations from "@/components/Locations";
// import Social from "@/components/Social";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <Story />
        <Coffee />
        <Menu />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
