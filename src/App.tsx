import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';
import { BankOfAmericaCase } from './pages/BankOfAmericaCase';
import { CYNCCase } from './pages/CYNCCase';
import { CyncAdvancedAnalyticsCase } from './pages/CyncAdvancedAnalyticsCase';
import { UIUXProcessCase } from './pages/UIUXProcessCase';
import { HuluProject } from './pages/HuluProject';
import { SplitLandingPage } from './pages/SplitLandingPage';
import { ExpandingCardsPage } from './pages/ExpandingCardsPage';
import { RotatingNavPage } from './pages/RotatingNavPage';
import { ProgressStepsPage } from './pages/ProgressStepsPage';
import { AnimationsProject } from './pages/AnimationsProject';
import { KanbanProject } from './pages/KanbanProject';
import { BudgetPlanner } from './pages/BudgetPlanner';
import { VideoGameProject } from './pages/VideoGameProject';
import { TodoProject } from './pages/TodoProject';
import { TwitterProject } from './pages/TwitterProject';
import Footer from './components/Footer';

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
                <Portfolio />
                <About />
                <Skills />
                <Impact />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/case-studies/bank-of-america" element={<BankOfAmericaCase />} />
          <Route path="/case-studies/cync-loan-origination" element={<CYNCCase />} />
          <Route path="/case-studies/cync-advanced-analytics" element={<CyncAdvancedAnalyticsCase/>} />
          <Route path="/case-studies/uiux-process" element={<UIUXProcessCase />} />
          <Route path="/design/hulu" element={<HuluProject />} />
          <Route path="/design/split" element={<SplitLandingPage />} />
          <Route path="/design/expanding-cards" element={<ExpandingCardsPage />} />
          <Route path="/design/rotating-nav" element={<RotatingNavPage />} />
          <Route path="/design/progress-steps" element={<ProgressStepsPage />} />
          <Route path="/animations" element={<AnimationsProject />} />
          <Route path="/kanban" element={<KanbanProject />} />
          <Route path="/recipe" element={<BudgetPlanner />} />
          <Route path="/video-games" element={<VideoGameProject />} />
          <Route path="/todo" element={<TodoProject />} />
          <Route path="/twitter" element={<TwitterProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;