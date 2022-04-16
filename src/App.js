import React from 'react'
import { BrowserRouter as Router , Routes , Route , Navigate  } from 'react-router-dom'
import { Home , About , Projects , Contact , NavBar , NotFound , Footer } from './Compoments'

function App() {
  return (
    <div >

        <Router >
            <NavBar />
            <Routes >
                <Route exact path='/' element={<Home/>} />
                <Route exact path='/about' element={<About/>} />
                <Route exact path='/projects' element={<Projects/>} />
                <Route exact path='/contact' element={<Contact/>} />
                <Route exact path='*' element={<NotFound/>} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
