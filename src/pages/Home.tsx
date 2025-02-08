import React from 'react';
import { Heart, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ChatBot } from '../components/ChatBot';

export function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Connecting Lives Through</span>
            <span className="block text-red-600">Blood Donation</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Track blood availability across hospitals in real-time. Join our mission to save lives by becoming a donor or finding blood when you need it most.
          </p>
          <div className="mt-10">
            <img
              src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=1600"
              alt="Blood Donation Center"
              className="rounded-lg shadow-xl mx-auto max-w-full h-auto"
            />https://i.ytimg.com/vi/BsmFXVA1Vmw/maxresdefault.jpg
          </div>
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
        <button
          onClick={() => navigate('/donate')}
          className="px-6 py-3 bg-red-600 text-white hover:bg-red-700 font-medium rounded-full shadow-lg flex items-center"
        >
          <Heart className="h-5 w-5 mr-2" />
          Donate
        </button>
        <button
          onClick={() => navigate('/find-donor')}
          className="px-6 py-3 bg-white text-red-600 hover:bg-gray-50 font-medium rounded-full shadow-lg border-2 border-red-600 flex items-center"
        >
          <Search className="h-5 w-5 mr-2" />
          Find a Donor
        </button>
      </div>

      {/* Chatbot */}
      <ChatBot />
    </>
  );
}