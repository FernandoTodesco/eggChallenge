import { AppContainer } from "./App.styled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Slider from "./pages/Slider";

function App() {
  return (
    <BrowserRouter>
      <AppContainer className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people/:id" element={<People />} />
          <Route path="/slider" element={<Slider />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
