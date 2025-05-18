import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import ErrorBoundary from './components/ui/ErrorBoundary';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Impact } from './components/Impact';
import { Contact } from './components/Contact';
import { BankOfAmericaCase } from './components/Modal/BankOfAmericaCase';
import { CYNCCase } from './components/Modal/CYNCCase';
import { CyncAdvancedAnalyticsCase } from './components/Modal/CyncAdvancedAnalyticsCase';
import { UIUXProcessCase } from './components/Modal/UIUXProcessCase';
import { HuluProject } from './components/Modal/HuluProject';
import { SplitLandingPage } from './components/Modal/SplitLandingPage';
import { ExpandingCardsPage } from './components/Modal/ExpandingCardsPage';
import { RotatingNavPage } from './components/Modal/RotatingNavPage';
import { ProgressStepsPage } from './components/Modal/ProgressStepsPage';
import { AnimationsProject } from './components/Modal/AnimationsProject';
import { KanbanProject } from './components/Modal/KanbanProject';
import { BudgetPlanner } from './components/Modal/BudgetPlanner';
import { VideoGameProject } from './components/Modal/VideoGameProject';
import { TodoProject } from './components/Modal/TodoProject';
import { TwitterProject } from './components/Modal/TwitterProject';
import Footer from './components/Footer';
import Chat from './components/Pages/Chat';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Suspense fallback={<LoadingSpinner />}>
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
          </Suspense>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;