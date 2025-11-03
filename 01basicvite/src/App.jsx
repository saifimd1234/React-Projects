import Youtube from "./Youtube"
function App() {

  return (
// The <div> is used as a wrapper because React components must return a single parent element.
// It groups multiple JSX elements (<h1> in this example) into one container.
// Alternatively, React Fragments (<> </>) can be used to avoid adding an extra node to the DOM.

    <div>  
      <h1>Basic Vite App</h1>
      <h1>Vite react app</h1>
      <Youtube />  
    </div>
  )
// call <youtube /> doesn't works bcz filename is js instead of jsx
}

export default App
