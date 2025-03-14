import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Senior Product & UI/UX Designer
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Transforming complex challenges into intuitive digital experiences that drive business growth and user satisfaction
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">15%</h3>
              <p className="text-gray-600">Increase in User Satisfaction</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">25%</h3>
              <p className="text-gray-600">Faster Onboarding Time</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">20%</h3>
              <p className="text-gray-600">Increase in Engagement</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#case-studies"
              className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              View Case Studies
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}