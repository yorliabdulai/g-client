import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { apiService } from '../apiService';
import Input from '../components/Input';
import Button from '../components/Button';

interface OTPVerificationProps {
  payload: {
    email: string;
    token: string;
  };
}
const OTPVerification: React.FC<OTPVerificationProps> = ({ payload }) => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await apiService.admin.verifyEmail(payload);
        const { success } = await response.json();

        if (success) {
          console.log('OTP response:', response);
          navigate('/login');
        } else {
          console.error("Email verification failed");
        }
      } catch (error) {
        console.error("An error occurred during email verification", error);
      }
    };
    verifyEmail();
  }, [payload, navigate]);
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      {/* Container */}
      <div className="flex w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left Side (Background Image) */}
        <div className="w-1/2 hidden md:block relative">
          <img
            src="/images/otp_background.png" // Replace with your actual image path
            alt="OTP Verification Background"
            className="h-full w-auto object-contain absolute inset-0"
          />
        </div>

        {/* Right Side (OTP Form) */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">

          {/* Back Button */}
          <div className="flex justify-start mb-6">
            <Link to="/register" className="text-light-blue text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Back
            </Link>
          </div>

          {/* Header */}
          <div className="mb-6">
            <img src="/images/logo.png" alt="CClient Logo" className="h-8 mb-4" />
            <h2 className="text-2xl font-semibold text-text-primary text-left">
              Secure Your Account with OTP Verification
            </h2>
            <p className="text-gray-text text-sm">
              Simply enter the code we've sent to ensure your information stays safe and protected.
            </p>
            <p className="text-gray-text text-sm mt-2">
              Enter the verification code we sent to your {payload?.email}
            </p>
          </div>

          {/* OTP Form */}
          <form className="space-y-4" >
            <div>
              <Input
                type="text"
                placeholder="123456" // Replace with your actual OTP input logic
                className="border border-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-light-blue text-sm bg-light-gray"
              />
            </div>

            <div>
              <Button variant="primary" className="w-full py-2 rounded-md font-semibold text-sm hover:bg-dark-blue focus:outline-none focus:ring-2 focus:ring-light-blue bg-primary text-white">
                Verify 
              </Button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 text-left">
            <p className="text-gray-text text-sm">
              Didn't you receive the OPT?{' '}
              <a href="#" className="text-light-blue">
                Resend OTP
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;