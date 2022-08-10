
import Hero from './comps/hero/Hero';
import Join from './comps/join/Join';
import Plan from './comps/plan/Plan';
import Program from './comps/program/Program';
import Reason from './comps/reason/Reason';
import SayAbout from './comps/sayAbout/SayAbout';
import Footer from './comps/footer/Footer';
import './_global.scss'

function App() {
  return (
    <div className="App  ">
      <div className="_container">
        <Hero/>
        <Program/>
        <Reason/>
        <Plan/>
        <SayAbout />
        <Join/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
