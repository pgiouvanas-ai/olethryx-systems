import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Systems from "@/components/Systems";
import About from "@/components/About";
import Services from "@/components/Services";

export default function Home() {
  return(
    <>
    <Header />
    <main>
      <Hero />
      <About />
      <Systems />
      <Services />
    </main>
    <Footer />
    </>
  )
}
