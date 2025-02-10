import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth } from '../firebase';
import { User } from 'firebase/auth'; // Import the User type

interface AuthContextProps {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  const signInWithGoogle = async () => {
    try {
      const { signInWithGoogle: firebaseSignInWithGoogle } = await import('../firebase'); // Dynamic import
      await firebaseSignInWithGoogle(); // Call the function
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  const signOutUser = async () => {
    try {
      const { signOutUser: firebaseSignOutUser } = await import('../firebase');
      await firebaseSignOutUser();
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  const value: AuthContextProps = {
    user,
    loading,
    signInWithGoogle,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export default AuthProvider;
