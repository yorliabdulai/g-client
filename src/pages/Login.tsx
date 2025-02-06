import React, { useState } from 'react';
import {apiService} from '../apiService';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import { useAuth } from '../context/AuthContext';
import { EnvelopeIcon as MailIcon, LockClosedIcon } from '@heroicons/react/24/solid';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { signInWithGoogle, user: authUser, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const payload = {
        email: email,
        password: password,
      };

      const data = await apiService.admin.login(payload);
      // Store the JWT token in localStorage
      localStorage.setItem('authToken', data.token);
      navigate('/admin/dashboard'); // Navigate to the dashboard
    } catch (error: Error | unknown) {
      const message = error instanceof Error ? error.message : 'Login failed';
      setErrorMessage(message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (authUser) {
    navigate('/admin/dashboard');
    return null;
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">

        {/* Left Side (Background Image) */}
        <div className="w-1/2 hidden md:block relative ">
          <img
            src="/images/side.png"
            alt="Registration Background"
            className="h-full w-auto object-contain absolute inset-0"
          />
        </div>

        {/* Right Side (Login Form) */}
        <div className="w-full md:w-[55%] p-6 flex flex-col justify-center">

          {/* Footer - Right Top */}
          <div className="flex justify-end mb-6">
            <p className="text-gray-text text-sm mr-4">
              Need to create an account?
            </p>
            <Link
              to="/register"
              className="bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-dark-blue focus:outline-none focus:ring-2 focus:ring-light-blue"
            >
              Sign up 
            </Link>
          </div>

          {/* Header */}
          <div className="mb-6">
            <img src="/images/logo.png" alt="CClient Logo" className="h-8 mb-4" />
            <h2 className="text-2xl font-semibold text-text-primary text-left">
              Login into your account
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-light-blue text-sm bg-light-gray"
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-light-blue text-sm bg-light-gray"
                />
              </div>
            </div>

            <div className="flex justify-start">
              <Link to="/forgot-password" className="text-light-blue text-sm">
                Forgot password?
              </Link>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}
            <div>
              <Button variant="primary" className="w-full py-2 rounded-md font-semibold text-sm hover:bg-dark-blue focus:outline-none focus:ring-2 focus:ring-light-blue bg-gray-200 text-gray-700">
                Login 
              </Button>
            </div>
          </form>

          {/* Google Login Button */}
          <div className="mt-4">
            <Button variant="secondary" className="w-full py-2 rounded-md font-semibold text-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-light-blue text-gray-700" onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;