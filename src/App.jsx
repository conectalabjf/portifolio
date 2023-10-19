import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/homeContainer'
import FormContainer from './components/formContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename='/portifolio'>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/form' element={<FormContainer/>}/>
        {/* <Route path='/form' element={<Form/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/projects' element={<Projects/>}/> */}

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
