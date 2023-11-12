import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="backdrop">
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
