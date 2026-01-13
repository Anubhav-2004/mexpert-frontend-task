import { Routes, Route, Link } from "react-router-dom";
import StoriesList from "./pages/StoriesList";
import StoryDetails from "./pages/StoryDetails";
import "./App.css";

const App = () => {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <span className="logo-icon">🧠</span>
          BrainyLingo
        </div>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Leaderboard</Link>
          <Link to="/">Daily Quiz</Link>
          <Link to="/">Genre</Link>
        </nav>

        <button className="signout-btn">Sign Out</button>
      </header>

      <Routes>
        <Route path="/" element={<StoriesList />} />
        <Route path="/story/:id" element={<StoryDetails />} />
      </Routes>
    </>
  );
};

export default App;
