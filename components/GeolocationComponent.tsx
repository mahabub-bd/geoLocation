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
      // Step 1: Get geolocation
      const { latitude, longitude } = await getGeolocation();

      // Step 2: Fetch address using reverse geocoding
      const fetchedAddress = await fetchAddress(latitude, longitude);
      setAddress(fetchedAddress);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Get My Location</h1>
      <button onClick={handleGetLocation} disabled={loading}>
        {loading ? "Fetching..." : "Get Location"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {address && (
        <div>
          <h2>Your Address:</h2>
          <p>{address}</p>
        </div>
      )}
    </div>
  );
};

export default GeolocationComponent;
