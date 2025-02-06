
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { signInWithGoogle, user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (user) {
    navigate('/'); // Redirect to home if already logged in
    return null; // Prevents rendering anything else.
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <button className="btn btn-primary" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;