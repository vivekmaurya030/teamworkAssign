import './App.css';
import './App.scss';
import Header from './header';
import ImageSlider from './carousel';
import Process from './process';
import ProductImageSlider from './product-carousel';
import whyklara from './images/whyklara.png'
import chakachakbg from './images/chahachakbg.png'
import CircularImg from './circularImg';
import Services from './services';


function App() {
  const chakachakStyle={
    background:`url(${chakachakbg})`,
    backgroundSize:'100% 100%'
  }
  return (
    <div>
      <Header />
      <ImageSlider />
      <Process />
      <ProductImageSlider />
      <div className="why-klara-container">
        <div className="why-klara-col1">
          <img src={whyklara} alt="" />
        </div>
        <div className="why-klara-col2">
          <h1>Why choose KLARA?</h1>
          <p>We understand that regular cleanings are an important part of maintaining a clean, healthy environment.</p>
          <p>Our professionally-trained cleaners will ensure your home or office is free from dirt, dust and debris so you can relax and focus on what's most important: life.</p>
          <h4>Team Klara</h4>
        </div>
      </div>

      <div className="chakachak" style={chakachakStyle}>
        <h1>Chakachak</h1>
      </div>
      <CircularImg />
      <Services />

    </div>
  );
}

export default App;

