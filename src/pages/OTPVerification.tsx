import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { apiService } from '../apiService';
import Input from '../components/Input';
import Button from '../components/Button';
import jwt from 'jsonwebtoken';


const OTPVerification: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email; // Get email from the location state
  const [error, setError] = React.useState('');
  const [otpToken, setOtpToken] = React.useState('');
  const [isExpired, setIsExpired] = React.useState(false);

  // Redirect if email is not available
  React.useEffect(() => {
    if (!email) {
      navigate('/register'); // Or wherever you want to redirect if no email.
    }
  }, [email, navigate]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      interface DecodedToken {
        exp?: number;
      }
      
      const decodedToken = jwt.decode(otpToken) as DecodedToken;
      
            if (!decodedToken || !decodedToken.exp) {
        setError('Invalid OTP token.');
        return;
      }

      const expirationTime = decodedToken.exp * 1000; // Convert seconds to milliseconds
      const currentTime = Date.now();

      if (expirationTime <= currentTime) {
        setError('OTP has expired. Please request a new one.');
        setIsExpired(true);
        return;
      }

      if (!email) {
        setError('Email is missing. Please request a new OTP.');
        return;
      }

      const response = await apiService.admin.verifyEmail({ email, token: otpToken });
      const data = await response.json();

      if (data.success) {
        navigate('/login');
      } else {
        setError(data.message || 'Invalid OTP code'); // Use the message from the API if available
      }
    } catch (err: unknown) {
      console.error('Error during OTP verification:', err);
      setError('Failed to verify OTP. Please try again.');
    }
  };

  // Function to resend the OTP
  const handleResendOTP = async () => {
    try {
      // Call your API endpoint to resend the OTP
      const response = await apiService.admin.resendVerificationEmail({email}); // Assuming you have a resend OTP API
      const data = await response.json();

      if (data.success) {
        // Display a success message to the user
        alert("A new OTP has been sent to your email.");
        setIsExpired(false); // Reset the isExpired state
      } else {
        // Handle error cases, e.g., email not found, etc.
        setError(data.message || "Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      setError("Failed to resend OTP. Please try again.");
    }
  };

  if (!email) {
    return <div>Loading...</div>; // Or some other placeholder
  }

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
              Enter the verification code we sent to your {email}
            </p>
          </div>

          {/* OTP Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Input
                type="text"
                onChange={(e) => setOtpToken(e.target.value)}
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
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
            {isExpired ? (
              <p className="text-red-500 text-sm">
                Sorry, the OTP has expired. Please{' '}
                <button onClick={handleResendOTP} className="text-light-blue">
                  Resend OTP
                </button>
              </p>
            ) : (
              <p className="text-gray-text text-sm">
                Didn't you receive the OTP?{' '}
                <button onClick={handleResendOTP} className="text-light-blue">
                  Resend OTP
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;