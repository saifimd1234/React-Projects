import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl bg-green-400 p-3 rounded-sm'>Vite with Tailwind</h1>
      <Card 
        title="Card Title" 
        content="This is some example content for the card component." 
        imageUrl="https://plus.unsplash.com/premium_photo-1731167468076-7e4cdb16941d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=400" 
      />
    </>
  )
}

export default App
