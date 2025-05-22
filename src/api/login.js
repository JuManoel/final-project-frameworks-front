import api from "./api";

/**
 * Handles user login
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @returns {Promise} Response with user data and token
 */
export const login = async (email, password) => {
  try {
    const response = await api.post('/login', {
      email,
      password
    });

    // Store token in localStorage if needed
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }

    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Error durante el inicio de sesión'
    };
  }
};

