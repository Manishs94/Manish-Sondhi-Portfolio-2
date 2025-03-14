import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { DesignWork } from './components/DesignWork';
import { DevelopmentWork } from './components/DevelopmentWork';
import { Skills } from './components/Skills';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';
import { BankOfAmericaCase } from './pages/BankOfAmericaCase';
import { HuluProject } from './pages/HuluProject';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <CaseStudies />
                <DesignWork />
                <DevelopmentWork />
                <Skills />
                <Impact />
                <Contact />
              </>
            }
          />
          <Route path="/case-studies/bank-of-america" element={<BankOfAmericaCase />} />
          <Route path="/design/hulu" element={<HuluProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;