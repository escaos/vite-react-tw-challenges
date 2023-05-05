import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import AgeCalculator from '@/pages/AgeCalculator';
import { Layout } from './components/Layout';

const App: React.FC = () => {
  return (
    <div className="App background-animation">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/age-calculator" element={<AgeCalculator />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
