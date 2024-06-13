// src/apiService.js
import axios from 'axios';

const API_URL = 'https://api.geonet.org.nz';

export const fetchData = async (params) => {
  try {
    console.log('Fetching data with params:', params);
    const response = await axios.get(`${API_URL}/quake`, { params });
    console.log('Data fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data with params:', params, error);
    throw error;
  }
};
