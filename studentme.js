import axios from 'axios';

const getStudentMe = async (authToken) => {
  try {
    const response = await axios.get('/api/v1/student/me/', {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching student data:', error);
    throw error;
  }
};

export default getStudentMe;
