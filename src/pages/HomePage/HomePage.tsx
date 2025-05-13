import YourAreHere from "../../components/YourAreHere/YouAreHere";
import MainCarousel from "./MainCarousel/MainCarousel";
import { MainContext } from "./MainCarousel/styles";


function HomePage() {
    return (
      <>
      <MainCarousel />
        <MainContext>
          <YourAreHere />
  
        </MainContext>
      </>
    );
  }
  
  export default HomePage;
  