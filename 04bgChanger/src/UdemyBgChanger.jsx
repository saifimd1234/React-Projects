import { useState } from 'react';

function UdemyBgChanger() {
  const [bgColor, setBgColor] = useState('bg-black');
  const colors = [
    { name: 'Purple', value: 'bg-purple-600' },
    { name: 'Orange', value: 'bg-orange-400' },
    { name: 'Gray', value: 'bg-gray-700' },
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

export default UdemyBgChanger;
