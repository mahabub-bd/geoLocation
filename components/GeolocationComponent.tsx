"use client";
import React, { useState } from "react";
import { getGeolocation } from "./getGeolocation";
import { fetchAddress } from "./fetchAddress";

const GeolocationComponent: React.FC = () => {
  const [address, setAddress] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleGetLocation = async () => {
    setLoading(true);
    setError("");

    try {
      // Get geolocation
      const { latitude, longitude } = await getGeolocation();

      // Fetch address using reverse geocoding
      const fetchedAddress = await fetchAddress(latitude, longitude);
      setAddress(fetchedAddress);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Get My Location</h1>
      <button
        onClick={handleGetLocation}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? "Fetching..." : "Get Location"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {address && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Your Address:</h2>
          <p className="text-gray-700">{address}</p>
        </div>
      )}
    </div>
  );
};

export default GeolocationComponent;
