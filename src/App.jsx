
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Menu from "./pages/Menu"
import PageNotFound from "./pages/PageNotFound"

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/menu"  element={<Menu/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
        <Route path="/contact"  element={<Contact/>}></Route>
        <Route path="*"  element={<PageNotFound/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
