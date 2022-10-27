import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { About } from "./pages/about/About";
import { Home } from "./pages/home/Home";

export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </Router>
    )
}