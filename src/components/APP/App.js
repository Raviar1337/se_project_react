import logo from "../../logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className="backdrop">
      <div className="App">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
