import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import AgeCalculator from "@/pages/AgeCalculator";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/age-calculator">Age Calculator</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/age-calculator" element={<AgeCalculator />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
