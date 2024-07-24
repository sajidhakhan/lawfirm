import ChooseUS from "./Components/ChooseUs/ChooseUS";
import HomePage from "./Components/HomePage/HomePage";
import Intro from "./Components/Intro/Intro";
import Practices from "./Components/Practices/Practices";
import ClientTestimonials from './Components/ClientTestimonials/ClientTestimonials';
// import CilentCards from "./Components/ClientTestimonials/CilentCards";
import Team from './Components/Team/Team';

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
   </>
  );
}

export default App;
