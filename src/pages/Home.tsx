
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user, signOutUser } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Welcome, {user?.displayName || 'User'}!</h1>
      <p>Your email: {user?.email}</p>
      <button className="btn btn-secondary mt-4" onClick={signOutUser}>
        Sign Out
      </button>
    </div>
  );
};

export default Home;