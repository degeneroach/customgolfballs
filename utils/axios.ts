import axios from 'axios';

const API = async (method: string, endpoint: string, data = {}, headers = {}) => {
  try {
    const response = await axios({
      method,
      url: `/api/${endpoint}`,
      data,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Axios error:', error);
    throw error;
  }
};

export default API