// src/apiService.js
import axios from 'axios';

const API_URL = 'https://api.geonet.org.nz';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}/quake`, {
      params: {
        MMI: 1, // Replace with the desired MMI value
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
