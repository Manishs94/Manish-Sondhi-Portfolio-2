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
import { CYNCCase } from './pages/CYNCCase';
import { HuluProject } from './pages/HuluProject';
import { SplitLandingPage } from './pages/SplitLandingPage';

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
          <Route path="/case-studies/cync-loan-origination" element={<CYNCCase />} />
          <Route path="/design/hulu" element={<HuluProject />} />
          <Route path="/design/split" element={<SplitLandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;