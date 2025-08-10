# Authentication Issues - Troubleshooting Guide

## Issues Fixed:

### 1. CORS Configuration
- ❌ **Problem**: Backend CORS was set to wrong origin (backend URL instead of frontend)
- ✅ **Fixed**: Updated CORS to allow localhost:5173, localhost:3000, and production frontend URL

### 2. Missing Navigation
- ❌ **Problem**: Users weren't redirected after successful login/signup
- ✅ **Fixed**: Added `navigate("/")` after successful authentication

### 3. Cookie Settings
- ❌ **Problem**: Cookies had restrictive settings that might block in development
- ✅ **Fixed**: Updated sameSite to "lax" and made secure flag environment-dependent

### 4. Form Validation
- ❌ **Problem**: No client-side validation, could send empty requests
- ✅ **Fixed**: Added validation for empty fields and password length

### 5. Environment Configuration
- ❌ **Problem**: Hardcoded production URL for all environments
- ✅ **Fixed**: Dynamic server URL based on NODE_ENV

## How to Test:

### 1. Start Backend Server
```bash
cd backend
npm install
npm start
```
Server should run on `http://localhost:5000`

### 2. Start Frontend Server
```bash
cd frontend
npm install
npm run dev
```
Frontend should run on `http://localhost:5173`

### 3. Test Authentication
1. Try creating a new account on `/signup`
2. Try signing in with existing credentials on `/signin`
3. Check browser console for any error messages
4. Check browser Network tab to see if requests are being made

### 4. Debug Steps

If authentication still doesn't work:

1. **Check Console Logs**: Open browser DevTools → Console for detailed error messages
2. **Check Network Tab**: Look for failed requests and their status codes
3. **Verify Backend**: Make sure backend server is running and accessible
4. **Test API Directly**: Use the debug script provided (`debug-auth.js`)

### Common Error Messages:

- **"Network Error"**: Backend server is not running or wrong URL
- **"CORS Error"**: CORS configuration issue (already fixed)
- **"User not found"**: Trying to sign in with non-existent username
- **"Incorrect Password"**: Wrong password for existing user
- **"Email/Username already exists"**: Trying to sign up with existing credentials

### Environment Variables

Make sure these are set in your backend `.env` file:
```
JWT_SECRET=your_jwt_secret_here
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
```

### Production Deployment

For production, make sure to:
1. Update the CORS origin in `backend/index.js` to your actual frontend domain
2. Set proper environment variables
3. Use HTTPS for secure cookies
