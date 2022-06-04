import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";

const App = () => {
  return <div>
    <Intro/>
    <About/>
    <Experiences/>
    <Projects/>
    <Footer/>
  </div>;
};

export default App;