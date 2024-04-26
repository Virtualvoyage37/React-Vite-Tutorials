import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// const ReactElement = {
//   name: "a",
//   props: {
//       href: 'https://www.google.com/',
//       target: '_blank',
//       class: 'google',
//       id: 'googleid'
//   },
//   children: 'Click me Visit Google'
// }
// const OtherElement = (
//   <a href='#'>Heloo  OtherElement</a>
// )

// const element = React.createElement(
//   "a",
//   {href: 'https://www.google.com/',  target: '_blank',},
//   'Click me Visit Google !!!'
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> 
    {/* <MyApp /> */}
    {/* {element}  */}
  </React.StrictMode>,
)
