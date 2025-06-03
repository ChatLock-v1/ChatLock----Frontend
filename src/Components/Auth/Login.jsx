import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, AlertCircle, Github } from 'lucide-react';
import Loading from '../Loding';
import { context } from '../../context/UserContext';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const { serverUrl, socket } = useContext(context);

  // Detect device info (basic example)
  const deviceInfo = navigator.userAgent;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (!serverUrl) {
      setError('Server URL is not defined. Please try again later.');
      return;
    }

    if (!socket?.id) {
      console.warn('⚠️ Socket not connected during login.');
    }

    setIsSubmitting(true);

    try {
      const data = {
        email: formData.email.trim().toLowerCase(),
        password: formData.password,
        deviceInfo,
        socketId: socket?.id || null,
      };

      const response = await axios.post(`${serverUrl}/login`, data);

      console.log('✅ Login successful:', response.data);

      // Save JWT token in localStorage
      localStorage.setItem('chatlock_token', response.data.token);

      // Emit socket event to register user socket
      if (socket && response.data?.user?.id) {
        socket.emit('registerSocket', response.data.user.id);
      }

      // Redirect to homepage or dashboard
      navigate('/dashboard'); // adjust route as needed

    } catch (err) {
      console.error('❌ Login error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Something went wrong.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-100 to-white px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-md rounded-xl p-5 space-y-5 relative">
        <div className="text-center space-y-3">
          <Link to="/" className="inline-block">
            <h2 className="text-2xl font-bold text-purple-900">ChatLock</h2>
          </Link>
          <h3 className="text-lg font-semibold">Welcome Back to ChatLock</h3>
          <p className="text-sm text-gray-500">Sign in to continue</p>
        </div>

        {error && (
          <div className="flex items-center gap-2 bg-red-100 text-red-800 p-2 rounded-md text-xs">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
              placeholder="name@example.com"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                placeholder="••••••••"
                required
                disabled={isSubmitting}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2 right-2 text-gray-500 hover:text-purple-600"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Use at least 8 characters including a number & special character.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md flex items-center justify-center transition-colors duration-200 text-sm"
          >
            {isSubmitting ? (
              <>
                <Loading className="w-4 h-4 mr-2" />
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-xs text-gray-500">Or continue with</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            disabled={isSubmitting}
            onClick={() => alert('Google login not implemented yet')}
            className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50 text-sm"
          >
            <img src="https://img.icons8.com/color/24/google-logo.png" alt="Google" className="w-4 h-4" />
            <span className="ml-2">Google</span>
          </button>

          <button
            disabled={isSubmitting}
            onClick={() => alert('GitHub login not implemented yet')}
            className="flex items-center justify-center border border-gray-300 rounded-md p-2 hover:bg-gray-50 text-sm"
          >
            <Github className="w-4 h-4" />
            <span className="ml-2">GitHub</span>
          </button>
        </div>

        <div className="text-center text-xs mt-4">
          <p className="text-gray-500">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
