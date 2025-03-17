import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { DesignProject } from './components/DesignProject';
import { DevelopmentProject } from './components/DevelopmentProject';
import { Skills } from './components/Skills';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';
import { BankOfAmericaCase } from './pages/BankOfAmericaCase';
import { CYNCCase } from './pages/CYNCCase';
import { HuluProject } from './pages/HuluProject';
import { SplitLandingPage } from './pages/SplitLandingPage';
import { ExpandingCardsPage } from './pages/ExpandingCardsPage';
import { RotatingNavPage } from './pages/RotatingNavPage';
import { ProgressStepsPage } from './pages/ProgressStepsPage';
import { AnimationsProject } from './pages/AnimationsProject';

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
                <DesignProject />
                <DevelopmentProject />
                <About />      {/* Add this line */}
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
          <Route path="/design/expanding-cards" element={<ExpandingCardsPage />} />
          <Route path="/design/rotating-nav" element={<RotatingNavPage />} />
          <Route path="/design/progress-steps" element={<ProgressStepsPage />} />
          <Route path="/animations" element={<AnimationsProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;