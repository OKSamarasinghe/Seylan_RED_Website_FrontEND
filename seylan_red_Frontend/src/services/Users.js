// services/Users.js

export const loginUser = async (userData) => {
    try {
      const { UserName, Password } = userData;
      const response = await fetch(`https://localhost:7230/api/UserDetails/login?userName=${encodeURIComponent(UserName)}&password=${encodeURIComponent(Password)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
  
      const data = await response.json();
      return data; // This will contain the user data and success message
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  };
  