import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homeContainer";
import FormContainer from "./pages/FormContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/portifolio" element={<FormContainer />} />
          <Route path="/portifolio/home" element={<Home />} />
          {/* <Route path='/form' element={<Form/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/projects' element={<Projects/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
