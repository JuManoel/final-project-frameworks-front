import api from './api';

/**
 * Fetch houses with pagination and sorting
 * @param {Object} params - Query parameters
 * @param {number} params.page - Page number (optional)
 * @param {number} params.size - Items per page (optional)
 * @param {string} params.sort - Sort criteria (optional)
 * @returns {Promise} Response with houses data and pagination info
 */
export const getHouses = async (params = {}) => {
  try {
    const token = localStorage.getItem('token');
    
    const response = await api.get('/house', {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        page: params.page,
        size: params.size,
        sort: params.sort
      }
    });

    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Error al obtener las casas'
    };
  }
};