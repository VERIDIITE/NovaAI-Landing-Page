import { Layout } from "./components/Layout";
import { AboutUs } from "./components/sections/AboutUs";
import { Brands } from "./components/sections/Brands";
import { CalltoAction } from "./components/sections/CallToAction";
import { Hero } from "./components/sections/Hero";
import { Pricing } from "./components/sections/Pricing";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <Layout title="NovaAI - AI Solutions for Your Business">
      {" "}
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CalltoAction />
    </Layout>
  );
}

export default App;
