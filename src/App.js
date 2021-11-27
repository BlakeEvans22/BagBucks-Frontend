import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    /* <div>
      <h1>Prepare for greatness</h1>
      <img
        style={{ width: "20vh", height: "auto" }}
        src="bagby.png"
        alt="Bag Bucks"
      />
    </div> */
  );
}

export default App;
