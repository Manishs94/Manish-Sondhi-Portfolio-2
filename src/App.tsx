import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';
import { BankOfAmericaCase } from './Modal/BankOfAmericaCase';
import { CYNCCase } from './Modal/CYNCCase';
import { CyncAdvancedAnalyticsCase } from './Modal/CyncAdvancedAnalyticsCase';
import { UIUXProcessCase } from './Modal/UIUXProcessCase';
import { HuluProject } from './Modal/HuluProject';
import { SplitLandingPage } from './Modal/SplitLandingPage';
import { ExpandingCardsPage } from './Modal/ExpandingCardsPage';
import { RotatingNavPage } from './Modal/RotatingNavPage';
import { ProgressStepsPage } from './Modal/ProgressStepsPage';
import { AnimationsProject } from './Modal/AnimationsProject';
import { KanbanProject } from './Modal/KanbanProject';
import { BudgetPlanner } from './Modal/BudgetPlanner';
import { VideoGameProject } from './Modal/VideoGameProject';
import { TodoProject } from './Modal/TodoProject';
import { TwitterProject } from './Modal/TwitterProject';
import Footer from './components/Footer';
import Chat from './components/Pages/Chat';

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
        <Chat />
      </div>
    </Router>
  );
}

export default App;