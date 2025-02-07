
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user, signOutUser } = useAuth();
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate('/admin/dashboard'); // Navigate to the admin dashboard
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome, {user?.displayName || 'User'}!</h1>
      <p>Your email: {user?.email}</p>
      <button className="btn btn-secondary mt-4" onClick={signOutUser}>
        Sign Out
      </button>
      <button className="btn btn-primary mt-4" onClick={handleAdminClick}>
        Go to Admin Dashboard
      </button>
    </div>
  );
};

export default Home;