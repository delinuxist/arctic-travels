import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Map from "./components/Map";
import Passes from "./components/Passes";
import Places from "./components/Places";
import Regions from "./components/Regions";

function App() {
  return (
    <>
      <Header />
      <Map />
      <Regions />
      <Places />
      <Passes />
      <Footer />
    </>
  );
}

export default App;
