import { useState } from 'react';

function AIBgChanger() {
  const [bgColor, setBgColor] = useState('bg-white');
  const colors = [
    { name: 'Red', value: 'bg-red-500' },
    { name: 'Blue', value: 'bg-blue-500' },
    { name: 'Green', value: 'bg-green-500' },
  ];

  return (
    <div className={`min-h-screen flex flex-col justify-end ${bgColor} transition-colors duration-300`}>
      <div className="w-full flex justify-center space-x-6 mb-10">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`px-8 py-4 rounded-full text-white font-bold text-lg shadow-lg focus:outline-none ${color.value} hover:scale-105 transition-transform duration-200`}
            onClick={() => setBgColor(color.value)}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default AIBgChanger;
