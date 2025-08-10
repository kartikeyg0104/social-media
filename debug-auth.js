// Test script to debug authentication issues
// Run this in browser console to test API connectivity

const testAuth = async () => {
  const serverUrl = "http://localhost:5000"; // Change this to your backend URL
  
  console.log("Testing server connectivity...");
  
  try {
    // Test server connectivity
    const response = await fetch(`${serverUrl}/api/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        userName: 'test',
        password: 'test'
      })
    });
    
    const data = await response.text();
    console.log("Server response:", response.status, data);
    
    if (response.status === 0) {
      console.error("❌ CORS or network error - check if backend is running");
    } else if (response.status === 400) {
      console.log("✅ Server is responding (user not found is expected)");
    } else {
      console.log("Server response:", response.status);
    }
    
  } catch (error) {
    console.error("❌ Connection failed:", error.message);
    console.log("Possible issues:");
    console.log("1. Backend server is not running");
    console.log("2. CORS configuration issue");
    console.log("3. Wrong server URL");
  }
};

// Test function
testAuth();
