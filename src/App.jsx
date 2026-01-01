import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import LyrcsResults from "./pages/LyricsPage";
import AddLyrics from "./pages/AddLyrics";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/results/:id"
          element={<LyrcsResults />}
        />
        <Route
          path="/add-page"
          element={<AddLyrics />}
        />

        {/* Catch-all route */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
