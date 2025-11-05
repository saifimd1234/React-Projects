import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded-sm'>Vite with Tailwind</h1>
      <div className="flex flex-row justify-center items-center space-x-4">
      <Card 
        title="Leaf" 
        content="Represents nature and growth. The leaf symbolizes freshness, renewal, and the changing seasons." 
        imageUrl="https://plus.unsplash.com/premium_photo-1731167468076-7e4cdb16941d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400" 
      />
      <Card 
        title="Christmas Tree" 
        content="Embodies holiday spirit and tradition. The Christmas tree is a sign of celebration, family gatherings, and festive decorations during winter." 
        imageUrl="https://plus.unsplash.com/premium_photo-1671643642897-04c9917dc28b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400" 
      />
      <Card 
        title="Mountain" 
        content="Stands for strength and adventure. The mountain card evokes a sense of challenge, exploration, and achieving new heights." 
        imageUrl="https://images.unsplash.com/photo-1761939433931-4305ebba3ec9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=400" 
      />
      </div>
    </>
  )
}

export default App
