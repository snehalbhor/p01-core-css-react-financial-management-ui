
import './App.css';
import Companies from './components/Companies/Companies';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Scroll from './components/Scroll/Scroll';
import Top from './components/Top/Top';
import Value from './components/Value/Value';
import Footer1 from './components/Footer1/Footer1';
import Footer2 from './components/Footer2/Footer2';


function App() {
  return (
    <div className='App'>
      <div>
      <div className="white-gradient"/>
        <Header />
        <Top />
      </div>
      <Companies/>
      <Scroll/>
      <Value/>
      <Contact/>
     <Footer1/>
     <Footer2/>
    </div>



  );
}

export default App;


