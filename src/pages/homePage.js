import '../App.css';
import '../App.scss';
import Header from '../components/header';
import ImageSlider from '../components/carousel';
import Process from '../components/process';
import ProductImageSlider from '../components/product-carousel';
import whyklara from '../components/images/whyklara.png'
import chakachakbg from '../components/images/chakachakbg.png'
import Services from '../components/services';
import CircularImg from '../components/circularImg';
import Reviews from '../components/reviews/reviews';
import ServiceProvider from '../components/servicesProvider/serviceProvider';
import AboutUs from '../components/aboutUs/aboutUs';
import Newsletter from '../components/newsletter/newsletter';
import Footers from '../components/footer/footers';

const HomePage=()=>{
      // localStorage.clear('userDetails')
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
    
          <div className="chakachak" style={{background:`url(${chakachakbg})`,
        backgroundSize:'100% 100%',}}>
            <div className='chakachak-inner'>
            <h1>Chakachak</h1>
            </div>
          </div>
          <CircularImg />
          <Services />
          <ServiceProvider />
          <Reviews />
          <AboutUs />
          <Newsletter />
          <Footers />
        </div>
      );
}

export default HomePage;