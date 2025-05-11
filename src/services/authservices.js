  // services/authservices.js
export const login = async ({ email, password }) => {
    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-api-key': 'reqres-free-v1' },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      // Assuming the response contains a token
      localStorage.setItem('token', data.token);
      return data;
    } catch (error) {
      throw error;
    }
  };
  

  
  