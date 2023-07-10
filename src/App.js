import Home from "./pages/Home";
import Artical from "./pages/Artical";
import ArticalList from "./pages/ArticalList";
import Navbar from "./components/Nav";
import About from './pages/About'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="max-w-screen-md mx-auto pt-20">
    <Routes>
      <Route path="/" element={ <Home></Home>}></Route>
      <Route path="/artical-list" element={ <ArticalList></ArticalList>}></Route>
      <Route path="/artical/:name" element={ <Artical></Artical>}></Route>
      <Route path="/about" element={ <About></About>}></Route>

    </Routes>
    </div>
    
    </BrowserRouter>
   
  )   
}

export default App;
