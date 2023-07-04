import Home from "./pages/Home";
import Artical from "./pages/Artical";
import ArticalList from "./pages/ArticalList";

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home></Home>}></Route>
      <Route path="/artical-list" element={ <ArticalList></ArticalList>}></Route>
      <Route path="/artical" element={ <Artical></Artical>}></Route>

    </Routes>
    </BrowserRouter>
   
  )   
}

export default App;
