
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import ThemeToggle from './components/ThemeToggle'; // Import ThemeToggle

function App() {
  return (
    <AuthProvider>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen"> {/* Add a dark mode background and text color */}
        <BrowserRouter>
          <div className="p-4 flex justify-end">
            <ThemeToggle /> {/* Place ThemeToggle at the top */}
          </div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;