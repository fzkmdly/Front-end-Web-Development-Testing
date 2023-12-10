import API_ENDPOINT from '../globals/api-endpoint';

const authorization = async (uid) => {
  try {
    const url = API_ENDPOINT.USER;
    const options = {
      method: 'GET',
      headers: {
        'Authorization': `${uid}`, // Replace with your actual access token
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(url, options);
    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData.data.user;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw the error to be handled by the caller
  }
};

export default authorization;
