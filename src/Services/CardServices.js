
export const fetchCardTable = async () => {
  try {
    const response = await fetch('/carddata.json');
    const data = await response.json();
    console.log('API Response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching card data:', error);
    throw error;
  }
};
