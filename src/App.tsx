import {
  Link,
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import LogIn from "./components/auth/LogIn";
import Home from "./components/pages/home";
import Notes from "./components/pages/notes";
import NotesCreate from "./components/pages/notesCreate";
import { Button } from "./components/ui/button";
import { useAuth } from "./context/authProvider";

function App() {
  const { token } = useAuth();

  return (
    <div className="dark:bg-slate-900 dark:text-white min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="" element={token ? <Notes /> : <GoToLogin />} />
            <Route
              path="create"
              element={token ? <NotesCreate /> : <Navigate to={"/login"} />}
            />
            <Route
              path="edit/:id"
              element={token ? <NotesCreate /> : <Navigate to={"/login"} />}
            />
          </Route>

          <Route
            path="/login"
            // element={<LogIn />}
            element={token ? <Navigate to="/" /> : <LogIn />}
          />

          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </Router>
    </div>
  );
}

const GoToLogin = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <p className="text-xl font-semibold text-black dark:text-white">
        Create A Notes 👇.
      </p>
      <Link to={"/login"}>
        <Button className="w-full max-w-[140px] dark:bg-pink-400 dark:text-white dark:hover:bg-pink-400/90 text-lg px-5">
          LogIn
        </Button>
      </Link>
    </div>
  );
};

export default App;
