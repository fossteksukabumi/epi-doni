import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import OpeningPage from "./pages/Openingpage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OpeningPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;




