import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./components/auth/signUp";
import Navbar from "./components/navbar/navbar";
import SignIn from "./components/auth/signIn";
import { ThemeProvider } from "./components/themeProvider";
import DayGridDetails from "./components/dateGrid/dayGridDetails";
import DayGrid from "./components/dateGrid/dayGrid";
import CreateHouse from "./components/dateGrid/createHouse";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Router>
          <Navbar />
          {/* <DayGrid/> */}
          <div className="mt-5">
            <Routes>
              <Route path="/" element={<DayGrid />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/details/:date" element={<DayGridDetails />} />
              <Route path="/details/:date/create-house" element={<CreateHouse />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
