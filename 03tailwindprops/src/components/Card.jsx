import React from 'react'

/*
function Card() {
  return (
    
    <div>
        <img src="https://plus.unsplash.com/premium_photo-1731167468076-7e4cdb16941d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400" alt="leaf" />
        <h1 className='text-2xl bg-blue-950 p-3 rounded'>A card for a leaf</h1>
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
  )
}
*/

function Card({ title, content, imageUrl }) {
  return (
    <div className="w-64 h-64 bg-white rounded-lg shadow-md flex flex-col overflow-hidden mx-2">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm flex-1 overflow-auto max-h-24 pr-2 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">{content}</p>
      </div>
    </div>
  );
}

export default Card