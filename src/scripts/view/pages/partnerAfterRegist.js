

const partnerAfterRegistation = async () => {
    try {
      const response = await fetch(API_ENDPOINT.GET_PARTNER_VEHICLES, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (response.ok) {
        const vehicles = await response.json();
        return generateVehicleList(vehicles);
      } else {
        // Handle error
        console.error('Failed to fetch vehicles');
        return '';
      }
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      return '';
    }
  };
  
  const generateVehicleList = (vehicles) => {
    // Logic to generate HTML for the vehicle list
    // ...
  
    return generatedHTML;
  };
  