import "./App.css";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { AllRouters } from "./Pages/AllRouters";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRouters />
      <Footer />
    </div>
  );
}

export default App;
