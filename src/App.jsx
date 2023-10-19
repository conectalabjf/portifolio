import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/homeContainer";
import FormContainer from "./components/FormContainer";

function App() {
  return (
    <>
      <BrowserRouter basename="/portifolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormContainer />} />
          {/* <Route path='/form' element={<Form/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/projects' element={<Projects/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
