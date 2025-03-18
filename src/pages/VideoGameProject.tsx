import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';

export function VideoGameProject() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-0 left-0 right-0 bg-white z-10 border-b">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-900">Video Game Database</h1>
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
          src="https://ng-video-game-db.web.app/"
          title="Video Game Database"
          className="w-full h-[calc(100vh-5rem)] border-0"
        />
      </div>
    </div>
  );
}