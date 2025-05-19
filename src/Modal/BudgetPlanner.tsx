import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export function BudgetPlanner() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white z-10 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Budget Planner</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="pt-20">
        <iframe
          src="https://61f0efec215e813c8ff08265--hardcore-roentgen-8b2667.netlify.app/"
          title="Budget Planner Project"
          className="w-full h-[calc(100vh-5rem)] border-0"
        />
      </div>
    </div>
  );
}