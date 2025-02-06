import Navbar from '../Navbar/Navbar';
import Componen6 from './Componen6';
import EasiestWay from './EasiestWay';
import Steps from './Steps';
import Best_Website from './Best_Website';
import Check_status from './Check_status';
import Component5 from './Component5';
import Component7 from './Component7';
import Component8 from './Component8';
import Component9 from './Component9';
import Faq_ITR from './Faq_ITR';
import Need_Support from './Need_Support';
import Footer from './Footer';

// import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div>
        <Navbar/>
      <EasiestWay />
      <Steps />
      <Best_Website />
      <Check_status />
      <Component5 />
  <Componen6/>
  <Component7/>
  <Component8/>
  <Component9/>
  <Faq_ITR/>
  <Need_Support/>
  <Footer/>
    </div>
  );
};

export default HomePage;