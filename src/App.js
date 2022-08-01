import "./App.css"
import {Auth} from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
       <BrowserRouter>
        <Routes>
          <Route path ="/" element={ <Auth isLogin={true} />}></Route>
          <Route path ="/Home" element={<Home  />}></Route>
          <Route path ="/Signup" element={<Auth isLogin={false} />}></Route>
          <Route path ="/Profile" element={<Profile/>}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
