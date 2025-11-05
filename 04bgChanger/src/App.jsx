import { useState } from 'react';
import AIBgChanger from './AIBgChanger';
import UdemyBgChanger from './UdemyBgChanger';

function App() {
  const [selected, setSelected] = useState(null);

  if (!selected) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-300 via-gray-100 to-teal-300">
        <div className="flex flex-col items-center space-y-8">
          <button
            className="px-10 py-5 bg-indigo-600 text-white rounded-full shadow-xl text-2xl font-bold hover:bg-indigo-700 hover:scale-105 transition-all duration-200 focus:outline-none"
            onClick={() => setSelected('ai')}
          >
            AI BG Changer
          </button>
          <button
            className="px-10 py-5 bg-teal-600 text-white rounded-full shadow-xl text-2xl font-bold hover:bg-teal-700 hover:scale-105 transition-all duration-200 focus:outline-none"
            onClick={() => setSelected('udemy')}
          >
            Udemy BG Changer
          </button>
        </div>
      </div>
    );
  }

  if (selected === 'ai') return <AIBgChanger />;
  if (selected === 'udemy') return <UdemyBgChanger />;
}

export default App;
