// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import NavbarCustom from './componentes/narbar/narbar';
import Seccion from './componentes/Seccion/Seccion';
import Footer from './componentes/Footer/footer';
import ContactForm from './componentes/Contacto/Contacto';
import Servicios from './componentes/Servicios/Servicios.jsx';
import Nosotros from './componentes/Nosotros/Nosotros.jsx';

function App() {
  return (
    <Router>
      <div className='contenedor'>
        <NavbarCustom />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/Fumitecno" />} />
            <Route path='/Fumitecno' element={<Seccion />} />
            <Route path='/Servicios' element={<Servicios />} />
            <Route path='/Nosotros' element={<Nosotros />} />
            <Route path='/Contacto' element={<ContactForm />} />

          </Routes>
        </main>
        </div> 
        <Footer />
    </Router>
  );
}

export default App;

