import Header from "./sections/header";
import Hero from "./sections/hero";
import Solve from "./sections/solve";
import Services from "./sections/services";
import Skin from "./sections/skin";
import Testimonials from "./sections/testimonials";
import Consulatoin from "./sections/consulatoin";
import Faq from "./sections/faq";
import Blog from "./sections/blog";
import Contact from "./sections/contact";
import Footer from "./sections/footer";

function App() {
  return (
    <div className="flex   flex-col items-center">
      <Header />
      <Hero />
      <Solve />
      <Services />
      <Skin />
      <Testimonials />
      <Consulatoin />
      <Faq />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
