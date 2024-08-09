import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import LogIn from "./components/auth/LogIn";
import Notes from "./components/pages/notes";
import NotesCreate from "./components/pages/notesCreate";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={<Notes />} />
            <Route path="create" element={<NotesCreate />} />
          </Route>

          <Route
            path="/login"
            element={<LogIn />}
            // element={token ? <Navigate to="/chat" /> : <LogIn />}
          />

          <Route
            path="*"
            element={
              <p>Not found</p>
              // <NotFound
              //   title="No Page Found"
              //   heading="Try going back to the previous page..."
              // />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
