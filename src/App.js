import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "./styles/LandingPage.css";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";
import Horror from "./components/Horror";

function App() {
  return (
    <div>
      {/*Intro Section*/}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/*End of Intro*/}
      {/*Trending Section*/}
      <div className="trending">
        <Trending />
      </div>
      {/*End of Trending*/}
      {/*Superhero Section*/}
      <div className="superhero">
        <SuperHero />
      </div>
      {/*End of Superhero*/}
      <div className="horror">
        <Horror />
      </div>
    </div>
  );
}

export default App;
