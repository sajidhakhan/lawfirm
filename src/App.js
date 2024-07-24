import ChooseUS from "./Components/ChooseUs/ChooseUS";
import HomePage from "./Components/HomePage/HomePage";
import Intro from "./Components/Intro/Intro";
import Practices from "./Components/Practices/Practices";
import ClientTestimonials from './Components/ClientTestimonials/ClientTestimonials';
import Team from './Components/Team/Team';
import FAQ from "./Components/FAQ/FAQ";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
   <>
   <HomePage />
   <Intro />
   <ChooseUS />
   <Practices />
   <ClientTestimonials />
   {/* <CilentCards /> */}
   <Team />
   <FAQ />
   <NewsLetter />
   <Footer />
   </>
  );
}

export default App;
