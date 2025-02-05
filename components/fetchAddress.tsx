const fetchAddress = async (
  latitude: number,
  longitude: number
): Promise<string> => {
  const apiKey = "AIzaSyBoZ748CDTdBTII1tkC6ERDS-mLAuDwb80";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].formatted_address; // Full address
    } else {
      throw new Error("No address found.");
    }
  } catch (error) {
    console.error("Error fetching address:", error);
    throw error;
  }
};

export { fetchAddress };
