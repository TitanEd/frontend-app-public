import HomeAbout from '../../components/home/homeAbout/HomeAbout';
import HomeHero from '../../components/home/homeHero/HomeHero';
import HomePartners from '../../components/home/homePartners/HomePartners';
import './Home.scss';

const Home = () => (
  <div className="home-page">
    <HomeHero />
    <HomeAbout />
    <HomePartners />
  </div>
);

export default Home;
