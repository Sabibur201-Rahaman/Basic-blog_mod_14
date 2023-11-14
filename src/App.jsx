import { BrowserRouter,Routes,Route } from "react-router-dom";
import ByCategoryPage from "./pages/ByCategoryPage";
import PageDetails from "./pages/PageDetails";
import HomePage from "./pages/HomePage";
export default function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/category/:categoryID" element={<ByCategoryPage/>} />
      <Route path="/details/:postID" element={<PageDetails/>} />
     </Routes>
     </BrowserRouter>
    </div>
  )
}