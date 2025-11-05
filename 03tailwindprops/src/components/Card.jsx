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
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
    </div>
  );
}

export default Card