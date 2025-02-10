import React from 'react';
import { useState } from 'react';
import { apiService } from '../apiService';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  UserIcon,
  EnvelopeIcon as MailIcon,
  LockClosedIcon,
} from '@heroicons/react/24/solid'; 

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setErrorMessage('');
  
      try {
        const payload = {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          contact: contact,
        };
  
        const response = await apiService.admin.signup(payload);
        console.log('Registration response:', response);
        navigate('/otp-verification', { state: { email: email } });
      } catch (error: Error | unknown) {
        const message = error instanceof Error ? error.message : 'Registration failed';
        setErrorMessage(message); 
      }
    };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      {/* Container */}
      <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left Side (Background Image) */}
        <div className="w-1/2 hidden md:block relative ">
          <img
            src="/images/side.png"
            alt="Registration Background"
            className="h-full w-auto object-contain absolute inset-0"
          />
        </div>

        {/* Right Side (Registration Form) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          {/* Already have an account */}
          <div className="flex justify-end mb-6">
            <p className="text-gray-text text-sm mr-4">
              Already have an account?
            </p>
            <Link
              to="/login"
              className="bg-primary text-white rounded px-4 py-2 font-semibold hover:bg-dark-blue focus:outline-none focus:ring-2 focus:ring-light-blue"
            >
              Login 
            </Link>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h2>
              Register to get started
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              {/* First Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Input
                  type="text"
                  placeholder="FirstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-light-blue text-sm bg-light-gray"
                />
              </div>

              {/* Last Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Input
                  type="text"
                  placeholder="LastName"
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-light-blue text-sm bg-light-gray"
                />
              </div>
            </div>

            {/* Email Input */}
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

            <div className="grid grid-cols-2 gap-4">
              {/* Password Input */}
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

              {/* Confirm Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <Input
                  type="password"
                  placeholder="Confrim password"
                  className="border border-gray-300 rounded-md py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-light-blue text-sm bg-light-gray"
                />
              </div>
            </div>

            {/* Hint copy (Contact) */}
            {/* Contact Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <Input
                type="text"
                placeholder="Contact"
                onChange={(e) => setContact(e.target.value)}
                className="border border-gray-300 rounded-md py-2 pl-10 pr-3 w-full focus:outline-none focus:ring-2 focus:ring-light-blue text-sm bg-light-gray"
              />
              
            </div>
            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-sm">{errorMessage}</div>
            )}

            {/* Create Accounts Button */}
            <div>
              <Button variant="primary" className="w-full py-2 rounded-md font-semibold text-sm hover:bg-dark-blue focus:outline-none focus:ring-2 focus:ring-light-blue bg-gray-200 text-gray-700">
                Create accounts 
              </Button>
            </div>
          </form>

          {/* Terms of Service */}
          <div className="mt-6 text-left">
            <p className="text-gray-text text-sm">
              By confirming your email, you agree to our{' '}
              <a href="#" className="text-light-blue">
                Terms of Service
              </a>{' '}
              and that you have read and understood our{' '}
              <a href="#" className="text-light-blue">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;