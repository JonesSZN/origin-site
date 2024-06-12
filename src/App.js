import {
  Header,
  Hero,
  Solve,
  Services,
  Skin,
  Testimonials,
  Consulatoin,
  Faq,
  Blog,
  Contact,
  Footer,
} from "./sections";

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
