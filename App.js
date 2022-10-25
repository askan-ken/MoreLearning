import "./App.css";
import NavBar from "./components/NavBar";
import "./style/Nyet.css";
import Intro from "./components/Intro";
import Horror from "./components/Horror";
import Romance from "./components/Romance";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <div className="myBG">
        <NavBar />
        <Intro />
      </div>
      <div className="horror">
        <Horror />
      </div>
      <div className="romance">
        <Romance />
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
