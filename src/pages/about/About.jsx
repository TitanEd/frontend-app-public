import AboutHero from '../../components/about/aboutHero/AboutHero';
import AboutStats from '../../components/about/aboutStats/AboutStats';
import AboutStory from '../../components/about/aboutStory/AboutStory';
import AboutValues from '../../components/about/aboutValues/AboutValues';
import './About.scss';

const About = () => (
  <div className="about-page">
    <AboutHero />
    <AboutValues />
    <AboutStats />
    <AboutStory />
  </div>
);

export default About;
