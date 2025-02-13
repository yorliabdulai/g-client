
import AuthProvider from './context/AuthContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'; // Import Register
import ProtectedRoute from './components/ProtectedRoute';
import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import OTPVerification from './pages/OTPVerification';
import InvoicesPage from './pages/admin/InvoicesPage';

function App() {
  return (
    <AuthProvider>
      <div className="dark:bg-gray-900 dark:text-white min-h-screen">
        <BrowserRouter>
          <Routes>
            <Route path='/home' element={<Home />}/>
            <Route path='/admin' element={<Dashboard />}/>
            <Route path='/admin/invoices' element={<InvoicesPage />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* Add Register Route */}
            <Route path="/otp-verification" element={<OTPVerification />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            {/* Admin Routes */}
           <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route path="dashboard" element={<Dashboard />} />
              {/* Add other admin routes here (invoices, learners, courses, etc.) */}
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
