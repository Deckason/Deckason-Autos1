import LandingPage from "./components/LandingPage/LandingPage";
import Logos from "./components/Logo/logos";
import Services from "./components/Services/services";
import Products from "./components/products/Products";

const Home = () => {
  return (
    <>
      <LandingPage />
      <Services />
      <Products />
      {/* <Logos /> */}
    </>
  );
}
 
export default Home;