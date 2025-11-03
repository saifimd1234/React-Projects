import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

function MyApp(){
    return(
        <div>
            <h1>Custom function and react app</h1>
        </div>
    )
}
// anotherElement will not work, Camel casing is mandatory in Vite
const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <App />
    <MyApp />
    {AnotherElement}
    </>
)
